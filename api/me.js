const { getCurrentUser } = require("./_lib");

module.exports = async function handler(req, res) {
  try {
    const user = await getCurrentUser(req);

    if (!user) {
      return res.status(200).json({ user: null });
    }


//     const expireDate = user.subscription?.expireDate;

// if (expireDate && new Date(expireDate) < new Date()) {
//   user.subscription = {
//     ...user.subscription,
//     plan: "No premium",
//     expireDate: null,
//     startDate: null
//   };

//   user.markModified('subscription');

//   try {
//     await user.save();
//   } catch (saveError) {
//     console.error("Save subscription error:", saveError);
//   }
// }

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