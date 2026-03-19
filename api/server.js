// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// const session = require("express-session");
// const { MongoClient, ObjectId } = require("mongodb");

// const admin = require("firebase-admin");
// const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//   });
// }

// const app = express();

// const PORT = process.env.PORT || 7777;
// const NODE_ENV = process.env.NODE_ENV || "development";
// const isProd = NODE_ENV === "production";

// const MONGO_URI = process.env.MONGO_URI;
// const SESSION_SECRET = process.env.SESSION_SECRET;

// const client = new MongoClient(MONGO_URI);
// if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
//   throw new Error("FIREBASE_SERVICE_ACCOUNT is missing");
// }

// if (!MONGO_URI) {
//   throw new Error("MONGO_URI is missing");
// }

// if (!SESSION_SECRET) {
//   throw new Error("SESSION_SECRET is missing");
// }
// let db;

// async function connectDB() {
//   if (!db) {
//     await client.connect();
//     db = client.db("theorie1_db");
//     console.log("MongoDB connected");
//   }
//   return db;
// }

// app.set("trust proxy", 1);

// app.use(
//   cors({
//     origin: [
//       "http://localhost:7777",
//       "http://127.0.0.1:7777",
//       "http://192.168.178.152:7777",
//       "https://red-drive.nl",
//       "https://www.red-drive.nl",
//     ],
//     credentials: true,
//   })
// );

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(
//   session({
//     name: "connect.sid",
//     secret: SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     proxy: true,
//     cookie: {
//       httpOnly: true,
//       secure: isProd,
//       sameSite: "lax",
//       maxAge: 1000 * 60 * 60 * 24 * 7,
//     },
//   })
// );

// app.use(express.static(path.join(__dirname, "..")));

// const questions = require("./upload.js");

// app.get("/api/questions", (req, res) => {
//   res.json(questions);
// });

// app.get("/auth/google", (req, res) => {
//   res.send("GET auth/google works");
// });

// app.post("/auth/google", async (req, res) => {
//   try {
//     const { idToken } = req.body;

//     if (!idToken) {
//       return res.status(400).json({
//         success: false,
//         message: "idToken is required",
//       });
//     }

//     const decodedToken = await admin.auth().verifyIdToken(idToken);

//     const googleId = decodedToken.uid;
//     const email = decodedToken.email || "";
//     const name = decodedToken.name || "No name";

//     if (!email) {
//       return res.status(400).json({
//         success: false,
//         message: "Google account has no email",
//       });
//     }

//     const database = await connectDB();
//     const usersCollection = database.collection("users");

//     let user = await usersCollection.findOne({ googleId });

//     if (!user) {
//       user = await usersCollection.findOne({ email });
//     }

//     if (!user) {
//       const newUser = {
//         googleId,
//         email,
//         name,
//         role: "user",
//         subscription: {
//           plan: "free",
//           startDate: null,
//           expireDate: null,
//         },
//         createdAt: new Date(),
//       };

//       const insertResult = await usersCollection.insertOne(newUser);

//       user = {
//         _id: insertResult.insertedId,
//         ...newUser,
//       };

//       console.log("New user created:", email);
//     } else {
//       const updateFields = {
//         email,
//         name,
//       };

//       if (!user.googleId) {
//         updateFields.googleId = googleId;
//       }

//       await usersCollection.updateOne(
//         { _id: user._id },
//         { $set: updateFields }
//       );

//       user = {
//         ...user,
//         ...updateFields,
//       };

//       console.log("Existing user logged in:", email);
//     }

//     req.session.userId = user._id.toString();

//     return res.json({
//       success: true,
//       message: "Google auth success",
//       user: {
//         id: user._id,
//         googleId: user.googleId,
//         email: user.email,
//         name: user.name,
//         role: user.role,
//         subscription: user.subscription,
//       },
//     });
//   } catch (error) {
//     console.error("Google auth error:", error);
//     return res.status(401).json({
//       success: false,
//       message: "Google authentication failed",
//       error: error.message,
//     });
//   }
// });

// app.get("/api/me", async (req, res) => {
//   try {
//     if (!req.session.userId) {
//       return res.json({ user: null });
//     }

//     const database = await connectDB();
//     const usersCollection = database.collection("users");

//     const user = await usersCollection.findOne({
//       _id: new ObjectId(req.session.userId),
//     });

//     if (!user) {
//       return res.json({ user: null });
//     }

//     return res.json({
//       user: {
//         id: user._id,
//         googleId: user.googleId,
//         email: user.email,
//         name: user.name,
//         role: user.role,
//         subscription: user.subscription,
//         createdAt: user.createdAt,
//       },
//     });
//   } catch (error) {
//     console.error("api/me error:", error);
//     return res.status(500).json({
//       message: "Server error",
//     });
//   }
// });

// app.get("/profile", async (req, res) => {
//   try {
//     if (!req.session.userId) {
//       return res.redirect("/login.html");
//     }

//     const database = await connectDB();
//     const usersCollection = database.collection("users");

//     const user = await usersCollection.findOne({
//       _id: new ObjectId(req.session.userId),
//     });

//     if (!user) {
//       return res.redirect("/login.html");
//     }

//     return res.send(`
//       <!DOCTYPE html>
//       <html lang="nl">
//       <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Profile</title>
//       </head>
//       <body style="font-family: Arial, sans-serif; padding: 40px;">
//         <h1>Profile</h1>
//         <p><strong>Name:</strong> ${user.name}</p>
//         <p><strong>Email:</strong> ${user.email}</p>
//         <p><strong>Role:</strong> ${user.role}</p>
//         <p><strong>Plan:</strong> ${user.subscription?.plan || "free"}</p>
//         <p><strong>Created:</strong> ${
//           user.createdAt ? new Date(user.createdAt).toLocaleString() : ""
//         }</p>
//         <a href="/logout">Logout</a>
//       </body>
//       </html>
//     `);
//   } catch (error) {
//     console.error("profile error:", error);
//     return res.status(500).send("Server error");
//   }
// });

// app.get("/logout", (req, res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       console.error("logout error:", err);
//       return res.status(500).send("Logout error");
//     }

//     res.clearCookie("connect.sid");
//     return res.redirect("/login.html");
//   });
// });

// connectDB()
//   .then(() => {
//     app.listen(PORT, "0.0.0.0", () => {
//       console.log(`🚀 Server gestart on the port: ${PORT}`);
//       console.log(`Mode: ${NODE_ENV}`);
//     });
//   })
//   .catch((err) => {
//     console.error("Failed to start server:", err);
//   });

const express = require("express");
const cors = require("cors");
const path = require("path");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const { MongoClient, ObjectId } = require("mongodb");
const admin = require("firebase-admin");
const serverless = require("serverless-http");

const app = express();

const NODE_ENV = process.env.NODE_ENV || "development";
const isProd = NODE_ENV === "production";

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
  if (!mongoClient) {
    mongoClient = new MongoClient(MONGO_URI);
    await mongoClient.connect();
  }
  if (!db) {
    db = mongoClient.db("theorie1_db");
  }
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
    }),
    cookie: {
      httpOnly: true,
      secure: isProd,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

// healthcheck
app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

// debug route
app.get("/auth/google", (req, res) => {
  res.send("GET /auth/google works");
});

// Google login from Firebase ID token
app.post("/auth/google", async (req, res) => {
  try {
    const { idToken } = req.body;

    if (!idToken) {
      return res.status(400).json({
        success: false,
        message: "idToken is required",
      });
    }

    // Firebase Admin verifies ID token
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    const googleId = decodedToken.uid;
    const email = decodedToken.email || "";
    const name = decodedToken.name || "No name";

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Google account has no email",
      });
    }

    const database = await connectDB();
    const usersCollection = database.collection("users");

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
    }

    req.session.userId = user._id.toString();

    return res.json({
      success: true,
      message: "Google auth success",
      user: {
        id: user._id,
        googleId: user.googleId,
        email: user.email,
        name: user.name,
        role: user.role,
        subscription: user.subscription,
      },
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
        id: user._id,
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

    res.clearCookie("connect.sid");
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
const serverless = require("serverless-http");
module.exports = serverless(app);