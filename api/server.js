const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");
const admin = require("firebase-admin");

const app = express();

const MONGO_URI = process.env.MONGO_URI;
const SESSION_SECRET = process.env.SESSION_SECRET;
const FIREBASE_SERVICE_ACCOUNT = process.env.FIREBASE_SERVICE_ACCOUNT;

if (!MONGO_URI) throw new Error("MONGO_URI is missing");
if (!SESSION_SECRET) throw new Error("SESSION_SECRET is missing");
if (!FIREBASE_SERVICE_ACCOUNT) throw new Error("FIREBASE_SERVICE_ACCOUNT is missing");

let serviceAccount;
try {
  serviceAccount = JSON.parse(FIREBASE_SERVICE_ACCOUNT);
} catch (e) {
  throw new Error("FIREBASE_SERVICE_ACCOUNT is not valid JSON");
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

if (mongoose.connection.readyState === 0) {
  mongoose.connect(MONGO_URI, {
    dbName: "theorie1_db",
  });
}

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    unique: true,
    sparse: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "user"
  },
  subscription: {
    plan: {
      type: String,
      default: "free"
    },
    startDate: {
      type: Date,
      default: null
    },
    expireDate: {
      type: Date,
      default: null
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { collection: "users" });

const User = mongoose.models.User || mongoose.model("User", userSchema);

app.set("trust proxy", 1);
app.use(express.json());

app.use(
  session({
    name: "connect.sid",
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    proxy: true,
    store: MongoStore.create({
      mongoUrl: MONGO_URI,
      dbName: "theorie1_db",
      collectionName: "sessions",
      ttl: 60 * 60 * 24 * 7
    }),
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.post("/api/auth/google", async (req, res) => {
  try {
    const { idToken } = req.body;

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

    let user = await User.findOne({
      $or: [{ googleId }, { email }]
    });

    if (!user) {
      user = await User.create({
        googleId,
        email,
        name
      });
    } else {
      user.googleId = googleId;
      user.email = email;
      user.name = name;
      await user.save();
    }

    req.session.userId = String(user._id);

    return req.session.save((err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Session save failed"
        });
      }

      return res.json({
        success: true,
        user: {
          id: String(user._id),
          googleId: user.googleId,
          email: user.email,
          name: user.name,
          role: user.role,
          subscription: user.subscription
        }
      });
    });
  } catch (error) {
    console.error("Google auth error:", error);
    return res.status(401).json({
      success: false,
      message: "Google authentication failed",
      error: error.message
    });
  }
});

app.get("/api/me", async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.json({ user: null });
    }

    const user = await User.findById(req.session.userId).lean();

    if (!user) {
      return res.json({ user: null });
    }

    return res.json({
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
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
});

app.post("/api/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("connect.sid", {
      httpOnly: true,
      secure: true,
      sameSite: "lax"
    });

    return res.json({ success: true });
  });
});

module.exports = app;