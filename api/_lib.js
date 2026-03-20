const crypto = require("crypto");
const { MongoClient, ObjectId } = require("mongodb");
const admin = require("firebase-admin");

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

let cachedClient = null;
let cachedDb = null;

async function getDb() {
  if (cachedDb) return cachedDb;

  if (!cachedClient) {
    cachedClient = new MongoClient(MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });
    await cachedClient.connect();
  }

  cachedDb = cachedClient.db("theorie1_db");
  return cachedDb;
}

function base64url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function signSession(payload) {
  const body = base64url(JSON.stringify(payload));
  const sig = crypto
    .createHmac("sha256", SESSION_SECRET)
    .update(body)
    .digest("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  return `${body}.${sig}`;
}

function verifySession(token) {
  if (!token || !token.includes(".")) return null;

  const [body, sig] = token.split(".");
  const expected = crypto
    .createHmac("sha256", SESSION_SECRET)
    .update(body)
    .digest("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  if (sig !== expected) return null;

  try {
    const json = JSON.parse(Buffer.from(body, "base64").toString("utf8"));
    if (!json.userId) return null;
    if (!json.exp || Date.now() > json.exp) return null;
    return json;
  } catch {
    return null;
  }
}

function parseCookies(req) {
  const header = req.headers.cookie || "";
  const out = {};
  header.split(";").forEach(part => {
    const idx = part.indexOf("=");
    if (idx === -1) return;
    const key = part.slice(0, idx).trim();
    const value = part.slice(idx + 1).trim();
    out[key] = decodeURIComponent(value);
  });
  return out;
}

function setSessionCookie(res, userId) {
  const token = signSession({
    userId,
    exp: Date.now() + 1000 * 60 * 60 * 24 * 7
  });

  res.setHeader(
    "Set-Cookie",
    `session=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=604800`
  );
}

function clearSessionCookie(res) {
  res.setHeader(
    "Set-Cookie",
    "session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0"
  );
}

async function getCurrentUser(req) {
  const cookies = parseCookies(req);
  const session = verifySession(cookies.session);
  if (!session) return null;

  const db = await getDb();
  const user = await db.collection("users").findOne({
    _id: new ObjectId(session.userId),
  });

  return user || null;
}

module.exports = {
  admin,
  getDb,
  getCurrentUser,
  setSessionCookie,
  clearSessionCookie,
};