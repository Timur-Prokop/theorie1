const express = require("express");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const { MongoClient, ObjectId } = require("mongodb");
const admin = require("firebase-admin");
const serverless = require("serverless-http");

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

let mongoClient;
let db;

async function connectDB() {
  if (db) return db;

  if (!mongoClient) {
    mongoClient = new MongoClient(MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });
  }

  await mongoClient.connect();
  db = mongoClient.db("theorie1_db");
  return db;
}

app.set("trust proxy", 1);

app.use(
  cors({
    origin: [
      "http://localhost:7777",
      "http://127.0.0.1:7777",
      "https://red-drive.nl",
      "https://www.red-drive.nl",
      "https://theorie1.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
      ttl: 60 * 60 * 24 * 7,
      autoRemove: "native",
    }),
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.get("/auth/google", (req, res) => {
  res.send("GET /auth/google works");
});

app.post("/auth/google", async (req, res) => {
  try {
    console.log("1. /auth/google called");

    const { idToken } = req.body;
    if (!idToken) {
      return res.status(400).json({
        success: false,
        message: "idToken is required",
      });
    }

    console.log("2. verifying token");
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    console.log("3. token verified");

    const googleId = decodedToken.uid;
    const email = decodedToken.email || "";
    const name = decodedToken.name || "No name";

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Google account has no email",
      });
    }

    console.log("4. connecting db");
    const database = await connectDB();
    const usersCollection = database.collection("users");
    console.log("5. db connected");

    let user = await usersCollection.findOne({ googleId });

    if (!user) {
      user = await usersCollection.findOne({ email });
    }

    if (!user) {
      const newUser = {
        googleId,
        email,
        name,
        role: "user",
        subscription: {
          plan: "free",
          startDate: null,
          expireDate: null,
        },
        createdAt: new Date(),
      };

      const insertResult = await usersCollection.insertOne(newUser);

      user = {
        _id: insertResult.insertedId,
        ...newUser,
      };

      console.log("6. new user created");
    } else {
      const updateFields = { email, name };

      if (!user.googleId) {
        updateFields.googleId = googleId;
      }

      await usersCollection.updateOne(
        { _id: user._id },
        { $set: updateFields }
      );

      user = {
        ...user,
        ...updateFields,
      };

      console.log("6. existing user updated");
    }

    req.session.userId = user._id.toString();

    req.session.save((err) => {
      if (err) {
        console.error("7. session save error:", err);
        return res.status(500).json({
          success: false,
          message: "Session save failed",
          error: err.message,
        });
      }

      console.log("8. session saved");

      return res.json({
        success: true,
        message: "Google auth success",
        user: {
          id: String(user._id),
          googleId: user.googleId,
          email: user.email,
          name: user.name,
          role: user.role,
          subscription: user.subscription,
        },
      });
    });
  } catch (error) {
    console.error("Google auth error:", error);
    return res.status(401).json({
      success: false,
      message: "Google authentication failed",
      error: error.message,
    });
  }
});

app.get("/api/me", async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.json({ user: null });
    }

    const database = await connectDB();
    const usersCollection = database.collection("users");

    const user = await usersCollection.findOne({
      _id: new ObjectId(req.session.userId),
    });

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
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    console.error("api/me error:", error);
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

app.get("/profile.html", async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.redirect("/log-in.html");
    }

    const database = await connectDB();
    const usersCollection = database.collection("users");

    const user = await usersCollection.findOne({
      _id: new ObjectId(req.session.userId),
    });

    if (!user) {
      return res.redirect("/log-in.html");
    }

    return res.send(`
      <!DOCTYPE html>
      <html lang="nl">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Profile</title>
      </head>
      <body style="font-family: Arial, sans-serif; padding: 40px;">
        <h1>Profile</h1>
        <p><strong>Name:</strong> ${escapeHtml(user.name || "")}</p>
        <p><strong>Email:</strong> ${escapeHtml(user.email || "")}</p>
        <p><strong>Role:</strong> ${escapeHtml(user.role || "")}</p>
        <p><strong>Plan:</strong> ${escapeHtml(user.subscription?.plan || "free")}</p>
        <p><strong>Created:</strong> ${
          user.createdAt ? new Date(user.createdAt).toLocaleString("nl-NL") : ""
        }</p>
        <a href="/logout">Logout</a>
      </body>
      </html>
    `);
  } catch (error) {
    console.error("profile error:", error);
    return res.status(500).send("Server error");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("logout error:", err);
      return res.status(500).send("Logout error");
    }

    res.clearCookie("connect.sid", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return res.redirect("/log-in.html");
  });
});

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

module.exports = serverless(app);