module.exports = async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({
        success: false,
        message: "Method not allowed"
      });
    }

    const Stripe = require("stripe");
    const { getCurrentUser, getDb } = require("./_lib");

    const {
      STRIPE_SECRET_KEY,
      STRIPE_PRICE_DAY,
      STRIPE_PRICE_WEEK,
      STRIPE_PRICE_2WEEKS,
      STRIPE_PRICE_MONTH,
      APP_URL
    } = process.env;

    if (!STRIPE_SECRET_KEY) {
      return res.status(500).json({
        success: false,
        message: "Missing STRIPE_SECRET_KEY"
      });
    }

    if (!APP_URL) {
      return res.status(500).json({
        success: false,
        message: "Missing APP_URL"
      });
    }

    const stripe = new Stripe(STRIPE_SECRET_KEY);

    const PRICE_MAP = {
      day: STRIPE_PRICE_DAY,
      week: STRIPE_PRICE_WEEK,
      "2weeks": STRIPE_PRICE_2WEEKS,
      month: STRIPE_PRICE_MONTH
    };

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
        message: `Invalid plan or missing price env: ${plan}`
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
      success_url: `${APP_URL}/profile.html?paid=1`,
      cancel_url: `${APP_URL}/profile.html?paid=0`
    });

    return res.status(200).json({
      success: true,
      url: session.url
    });
  } catch (error) {
    console.error("create-checkout-session ERROR:", error);
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};