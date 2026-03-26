const { getCurrentUser } = require("./_lib");

module.exports = async function handler(req, res) {
  try {
    const user = await getCurrentUser(req);

    if (!user) {
      return res.status(200).json({ user: null });
    }
    if (user.subscription?.expireDate && new Date(user.subscription.expireDate) < new Date()) {
    user.subscription.plan = "No premium";
    user.subscription.expireDate = null;
    await user.save();
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