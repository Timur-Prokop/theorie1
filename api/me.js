const { getCurrentUser, getDb } = require("./_lib");

module.exports = async function handler(req, res) {
  try {
    const user = await getCurrentUser(req);

    if (!user) {
      return res.status(200).json({ user: null });
    }

    const expireDate = user.subscription?.expireDate;

    if (expireDate && new Date(expireDate).getTime() < Date.now()) {
      const db = await getDb();
      const users = db.collection("users");

      await users.updateOne(
        { _id: user._id },
        {
          $set: {
            "subscription.plan": "No premium",
            "subscription.expireDate": null,
            "subscription.startDate": null,
            "subscription.status": "expired"
          }
        }
      );

      user.subscription = {
        ...user.subscription,
        plan: "No premium",
        expireDate: null,
        startDate: null,
        status: "expired"
      };
    }

    return res.status(200).json({
      user: {
        id: String(user._id),
        googleId: user.googleId,
        email: user.email,
        name: user.name,
        role: user.role,
        subscription: user.subscription,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    console.error("me error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
};