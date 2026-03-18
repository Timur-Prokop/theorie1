const express = require("express");
const cors = require("cors");
const path = require("path");
const session = require("express-session");
const admin = require("firebase-admin");
const { MongoClient, ObjectId } = require("mongodb");

const serviceAccount = require("./serviceAccountKey.json");

const app = express();

const uri =
  "mongodb+srv://goodtime2804_db_user:2804ptPT08!@cluster0.78pzwsp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

let db;

async function connectDB() {
  if (!db) {
    await client.connect();
    db = client.db("theorie1_db");
    console.log("MongoDB connected");
  }
  return db;
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "super_secret_key_change_me",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 дней
    },
  })
);

app.use(express.static(path.join(__dirname, "..")));

const questions = require("./upload.js");

app.get("/api/questions", (req, res) => {
  res.json(questions);
});

app.get("/auth/google", (req, res) => {
  res.send("GET auth/google works");
});

app.post("/auth/google", async (req, res) => {
  try {
    const { idToken } = req.body;

    if (!idToken) {
      return res.status(400).json({
        success: false,
        message: "idToken is required",
      });
    }

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

      console.log("New user created:", email);
    } else {
      const updateFields = {
        email,
        name,
      };

      if (!user.googleId) {
        updateFields.googleId = googleId;
      }

      await usersCollection.updateOne(
        { _id: user._id },
        {
          $set: updateFields,
        }
      );

      user = {
        ...user,
        ...updateFields,
      };

      console.log("Existing user logged in:", email);
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

app.get("/profile", async (req, res) => {
  try {
    if (!req.session.userId) {
      return res.redirect("/login.html");
    }

    const database = await connectDB();
    const usersCollection = database.collection("users");

    const user = await usersCollection.findOne({
      _id: new ObjectId(req.session.userId),
    });

    if (!user) {
      return res.redirect("/login.html");
    }

    return res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Profile</title>
      </head>
      <body style="font-family: Arial, sans-serif; padding: 40px;">
        <h1>Profile</h1>
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Role:</strong> ${user.role}</p>
        <p><strong>Plan:</strong> ${user.subscription?.plan || "free"}</p>
        <p><strong>Created:</strong> ${user.createdAt ? new Date(user.createdAt).toLocaleString() : ""}</p>
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
    return res.redirect("/login.html");
  });
});

const PORT = process.env.PORT || 7777;

connectDB()
  .then(() => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server gestart on the port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start server:", err);
  });