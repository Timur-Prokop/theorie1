const { admin, getDb, setSessionCookie } = require("./_lib");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  try {
    const { idToken } = req.body || {};

    if (!idToken) {
      return res.status(400).json({
        success: false,
        message: "idToken is required"
      });
    }

    const decoded = await admin.auth().verifyIdToken(idToken);

    const googleId = decoded.uid;
    const email = decoded.email || "";
    const name = decoded.name || "No name";

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Google account has no email"
      });
    }

    const db = await getDb();
    const users = db.collection("users");

    let user = await users.findOne({
      $or: [{ googleId }, { email }]
    });

    if (!user) {
      const doc = {
        googleId,
        email,
        name,
        role: "user",
        subscription: {
          plan: "free",
          startDate: null,
          expireDate: null
        },
        createdAt: new Date()
      };

      const result = await users.insertOne(doc);
      user = { _id: result.insertedId, ...doc };
    } else {
      await users.updateOne(
        { _id: user._id },
        {
          $set: {
            googleId,
            email,
            name
          }
        }
      );

      user = {
        ...user,
        googleId,
        email,
        name
      };
    }

    setSessionCookie(res, String(user._id));

    return res.status(200).json({
      success: true,
      message: "Google auth success",
      user: {
        id: String(user._id),
        googleId: user.googleId,
        email: user.email,
        name: user.name,
        role: user.role,
        subscription: user.subscription
      }
    });
  } catch (error) {
    console.error("Google auth error:", error);
    return res.status(401).json({
      success: false,
      message: "Google authentication failed",
      error: error.message
    });
  }
};