
const Stripe = require("stripe");
const { getDb } = require("./_lib");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const sig = req.headers["stripe-signature"];

    const chunks = [];
    for await (const chunk of req) {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    }
    const rawBody = Buffer.concat(chunks);

    const event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    const db = await getDb();
    const users = db.collection("users");

    async function saveSubscriptionByCustomer(customerId, subscriptionId) {
      const subscription = await stripe.subscriptions.retrieve(subscriptionId);

      const item = subscription.items?.data?.[0] || null;
      const periodStart = item?.current_period_start || null;
      const periodEnd = item?.current_period_end || null;

      console.log("SUBSCRIPTION DEBUG:", {
        subscriptionId: subscription.id,
        status: subscription.status,
        itemPeriodStart: periodStart,
        itemPeriodEnd: periodEnd,
        startDate: subscription.start_date || null
      });

      await users.updateOne(
        { "subscription.stripeCustomerId": customerId },
        {
          $set: {
            "subscription.plan":
              subscription.status === "active" || subscription.status === "trialing"
                ? "premium"
                : "free",
            "subscription.status": subscription.status,
            "subscription.stripeSubscriptionId": subscription.id,
            "subscription.startDate": periodStart
              ? new Date(periodStart * 1000)
              : subscription.start_date
              ? new Date(subscription.start_date * 1000)
              : null,
            "subscription.expireDate": periodEnd
              ? new Date(periodEnd * 1000)
              : null
          }
        }
      );
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      if (session.mode === "subscription" && session.customer && session.subscription) {
        await saveSubscriptionByCustomer(session.customer, session.subscription);
      }
    }

    if (
      event.type === "customer.subscription.created" ||
      event.type === "customer.subscription.updated" ||
      event.type === "customer.subscription.deleted"
    ) {
      const subscription = event.data.object;

      await saveSubscriptionByCustomer(subscription.customer, subscription.id);
    }

    return res.status(200).json({ received: true });
  } catch (error) {
    console.error("stripe_webhook error:", error);
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }
};