const mongoose = require("mongoose");

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
      // default: "free"
      default: "nothing"
    },
    startDate: {
      type: Date,
      default: null
    },
    expireDate: {
      type: Date,
      default: null
    },
    stripeCustomerId: {
      type: String,
      default: null
    },
    stripeSubscriptionId: {
      type: String,
      default: null
    },
    status: {
      type: String,
      default: "inactive"
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", userSchema, "users");