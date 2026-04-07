const Stripe = require("stripe");
const { ObjectId } = require("mongodb");
const { getDb } = require("./_lib");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  let event = null;
  let db = null;
  let payments = null;
  let users = null;

  function toObjectId(id) {
    try {
      return id ? new ObjectId(id) : null;
    } catch {
      return null;
    }
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const sig = req.headers["stripe-signature"];

    const chunks = [];
    for await (const chunk of req) {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    }
    const rawBody = Buffer.concat(chunks);

    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    db = await getDb();
    users = db.collection("users");
    payments = db.collection("payments");

    console.log("WEBHOOK RECEIVED:", event.type, event.id);

    async function savePaymentLog(data = {}) {
      console.log("Saving payment log...", {
        stripeEventId: event?.id,
        stripeEventType: event?.type,
        data,
      });

      const result = await payments.updateOne(
        { stripeEventId: event.id },
        {
          $set: {
            provider: "stripe",
            stripeEventId: event.id,
            stripeEventType: event.type,
            processingStatus: "received",
            processedToUser: false,
            updatedAt: new Date(),
            ...data,
          },
          $setOnInsert: {
            createdAt: new Date(),
          },
        },
        { upsert: true }
      );

      console.log("PAYMENT LOG RESULT:", result);
      return result;
    }

    async function markPaymentProcessed(extra = {}) {
      const result = await payments.updateOne(
        { stripeEventId: event.id },
        {
          $set: {
            processingStatus: "processed",
            processedToUser: true,
            processedAt: new Date(),
            updatedAt: new Date(),
            ...extra,
          },
        }
      );

      console.log("PAYMENT PROCESSED RESULT:", result);
      return result;
    }

    async function markPaymentFailed(message, extra = {}) {
      const result = await payments.updateOne(
        { stripeEventId: event.id },
        {
          $set: {
            provider: "stripe",
            stripeEventId: event.id,
            stripeEventType: event.type,
            processingStatus: "failed",
            processedToUser: false,
            errorMessage: message,
            updatedAt: new Date(),
            ...extra,
          },
          $setOnInsert: {
            createdAt: new Date(),
          },
        },
        { upsert: true }
      );

      console.log("PAYMENT FAILED RESULT:", result);
      return result;
    }

    async function saveSubscriptionAndUser({
      customerId,
      subscriptionId,
      userId = null,
      sessionId = null,
      invoiceId = null,
      email = null,
    }) {
      const normalizedUserId = toObjectId(userId);

      const basePaymentData = {
        userId: normalizedUserId,
        stripeCustomerId: customerId || null,
        stripeSubscriptionId: subscriptionId || null,
        stripeSessionId: sessionId || null,
        stripeInvoiceId: invoiceId || null,
        email: email || null,
        status: "initiated",
      };

      // 1. СНАЧАЛА сохраняем минимальную запись в payments
      await savePaymentLog(basePaymentData);

      let subscription;
      try {
        subscription = await stripe.subscriptions.retrieve(subscriptionId);
      } catch (err) {
        await markPaymentFailed(`Stripe subscription retrieve failed: ${err.message}`, {
          ...basePaymentData,
        });
        throw err;
      }

      const item = subscription.items?.data?.[0] || null;
      const periodStart = item?.current_period_start || null;
      const periodEnd = item?.current_period_end || null;

      const finalUserId = normalizedUserId || toObjectId(subscription.metadata?.userId);
      const stripeCustomerId = customerId || subscription.customer || null;
      const stripeInvoiceId = invoiceId || subscription.latest_invoice || null;

      const plan =
        subscription.status === "active" || subscription.status === "trialing"
          ? "premium"
          : "free";

      const paymentStatus =
        subscription.status === "active" || subscription.status === "trialing"
          ? "paid"
          : "pending";

      const fullPaymentData = {
        userId: finalUserId,
        stripeCustomerId,
        stripeSubscriptionId: subscription.id,
        stripeSessionId: sessionId || null,
        stripeInvoiceId,
        email: email || null,
        amount: item?.price?.unit_amount ?? null,
        currency: item?.price?.currency?.toUpperCase() || "EUR",
        plan,
        status: paymentStatus,
        paymentId: subscription.id,
        periodStart: periodStart ? new Date(periodStart * 1000) : null,
        periodEnd: periodEnd ? new Date(periodEnd * 1000) : null,
      };

      // 2. Обновляем payments уже полными данными
      await savePaymentLog(fullPaymentData);

      // 3. Потом users
      let filter = null;

      if (finalUserId) {
        filter = { _id: finalUserId };
      } else if (stripeCustomerId) {
        filter = {
          "subscription.stripeCustomerId": stripeCustomerId,
        };
      }

      if (!filter) {
        await markPaymentFailed("Payment saved, but no user filter found", fullPaymentData);
        throw new Error("Payment saved, but no user filter found");
      }

      const userResult = await users.updateOne(
        filter,
        {
          $set: {
            "subscription.plan": plan,
            "subscription.status": subscription.status,
            "subscription.stripeCustomerId": stripeCustomerId,
            "subscription.stripeSubscriptionId": subscription.id,
            "subscription.startDate": periodStart
              ? new Date(periodStart * 1000)
              : subscription.start_date
              ? new Date(subscription.start_date * 1000)
              : null,
            "subscription.expireDate": periodEnd
              ? new Date(periodEnd * 1000)
              : null,
          },
        }
      );

      console.log("USER UPDATE RESULT:", userResult);

      if (userResult.matchedCount === 0) {
        await markPaymentFailed("Payment saved, but no user matched", fullPaymentData);
        throw new Error("Payment saved, but no user matched");
      }

      // 4. Только после users => processed
      await markPaymentProcessed({
        ...fullPaymentData,
        userUpdated: true,
      });
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      console.log("checkout.session.completed:", {
        id: session.id,
        customer: session.customer,
        subscription: session.subscription,
        client_reference_id: session.client_reference_id,
        metadata: session.metadata,
      });

      if (
        session.mode === "subscription" &&
        session.customer &&
        session.subscription
      ) {
        await saveSubscriptionAndUser({
          customerId: session.customer,
          subscriptionId: session.subscription,
          userId: session.metadata?.userId || session.client_reference_id || null,
          sessionId: session.id,
          email: session.customer_details?.email || session.customer_email || null,
        });
      } else {
        const paymentData = {
          stripeSessionId: session.id,
          stripeCustomerId: session.customer || null,
          email: session.customer_details?.email || session.customer_email || null,
          status: session.payment_status || "pending",
        };

        await savePaymentLog(paymentData);
        await markPaymentProcessed(paymentData);
      }
    } else if (
      event.type === "customer.subscription.created" ||
      event.type === "customer.subscription.updated" ||
      event.type === "customer.subscription.deleted"
    ) {
      const subscription = event.data.object;

      console.log("subscription event:", {
        customer: subscription.customer,
        subscriptionId: subscription.id,
        metadata: subscription.metadata,
      });

      await saveSubscriptionAndUser({
        customerId: subscription.customer,
        subscriptionId: subscription.id,
        userId: subscription.metadata?.userId || null,
      });
    } else {
      const paymentData = {
        stripeCustomerId: event.data?.object?.customer || null,
        status: event.data?.object?.status || "pending",
      };

      await savePaymentLog(paymentData);
      await markPaymentProcessed(paymentData);
    }

    return res.status(200).json({ received: true });
  } catch (error) {
    console.error("stripe_webhook error:", error);

    try {
      if (!db) {
        db = await getDb();
      }

      if (!payments) {
        payments = db.collection("payments");
      }

      if (event?.id) {
        await payments.updateOne(
          { stripeEventId: event.id },
          {
            $set: {
              provider: "stripe",
              stripeEventId: event.id,
              stripeEventType: event.type,
              processingStatus: "failed",
              processedToUser: false,
              errorMessage: error.message,
              updatedAt: new Date(),
            },
            $setOnInsert: {
              createdAt: new Date(),
            },
          },
          { upsert: true }
        );
      } else {
        await payments.updateOne(
          { stripeEventId: `error_${Date.now()}` },
          {
            $set: {
              provider: "stripe",
              processingStatus: "failed",
              processedToUser: false,
              errorMessage: error.message,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          },
          { upsert: true }
        );
      }
    } catch (dbError) {
      console.error("failed to save webhook error to payments:", dbError);
    }

    return res.status(400).send(`Webhook Error: ${error.message}`);
  }
};