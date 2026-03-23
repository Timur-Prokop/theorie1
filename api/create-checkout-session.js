const Stripe = require("stripe");
const { getCurrentUser, getDb } = require("./_lib");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const PRICE_MAP = {
  day: process.env.STRIPE_PRICE_DAY,
  week: process.env.STRIPE_PRICE_WEEK,
  "2weeks": process.env.STRIPE_PRICE_2WEEKS,
  month: process.env.STRIPE_PRICE_MONTH
};

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  try {
    const user = await getCurrentUser(req);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Not authorized"
      });
    }

    const { plan } = req.body || {};
    const priceId = PRICE_MAP[plan];

    if (!priceId) {
      return res.status(400).json({
        success: false,
        message: "Invalid plan"
      });
    }

    const db = await getDb();
    const users = db.collection("users");

    let stripeCustomerId = user.subscription?.stripeCustomerId || null;

    if (!stripeCustomerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        name: user.name,
        metadata: {
          userId: String(user._id)
        }
      });

      stripeCustomerId = customer.id;

      await users.updateOne(
        { _id: user._id },
        {
          $set: {
            "subscription.stripeCustomerId": stripeCustomerId
          }
        }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer: stripeCustomerId,
      line_items: [
        {
          price: priceId,
          quantity: 1
        }
      ],
      success_url: `${process.env.APP_URL}/profile.html?paid=1`,
      cancel_url: `${process.env.APP_URL}/profile.html?paid=0`
    });

    return res.status(200).json({
      success: true,
      url: session.url
    });
  } catch (error) {
    console.error("create-checkout-session error:", error);
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};