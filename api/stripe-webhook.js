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

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      if (session.mode === "subscription" && session.customer && session.subscription) {
        const subscription = await stripe.subscriptions.retrieve(session.subscription);

        console.log("checkout.session.completed subscription:", {
          id: subscription.id,
          status: subscription.status,
          current_period_start: subscription.current_period_start,
          current_period_end: subscription.current_period_end
        });

        await users.updateOne(
          { "subscription.stripeCustomerId": session.customer },
          {
            $set: {
              "subscription.plan":
                subscription.status === "active" || subscription.status === "trialing"
                  ? "premium"
                  : "free",
              "subscription.status": subscription.status,
              "subscription.stripeSubscriptionId": subscription.id,
              "subscription.startDate": subscription.current_period_start
                ? new Date(subscription.current_period_start * 1000)
                : null,
              "subscription.expireDate": subscription.current_period_end
                ? new Date(subscription.current_period_end * 1000)
                : null
            }
          }
        );
      }
    }

    if (
      event.type === "customer.subscription.created" ||
      event.type === "customer.subscription.updated" ||
      event.type === "customer.subscription.deleted"
    ) {
      const subscription = event.data.object;

      console.log("subscription event:", event.type, {
        id: subscription.id,
        customer: subscription.customer,
        status: subscription.status,
        current_period_start: subscription.current_period_start,
        current_period_end: subscription.current_period_end
      });

      await users.updateOne(
        { "subscription.stripeCustomerId": subscription.customer },
        {
          $set: {
            "subscription.status": subscription.status,
            "subscription.stripeSubscriptionId": subscription.id,
            "subscription.startDate": subscription.current_period_start
              ? new Date(subscription.current_period_start * 1000)
              : null,
            "subscription.expireDate": subscription.current_period_end
              ? new Date(subscription.current_period_end * 1000)
              : null,
            "subscription.plan":
              subscription.status === "active" || subscription.status === "trialing"
                ? "premium"
                : "free"
          }
        }
      );
    }

    return res.status(200).json({ received: true });
  } catch (error) {
    console.error("stripe-webhook error:", error);
    return res.status(400).send(`Webhook Error: ${error.message}`);
  }
};