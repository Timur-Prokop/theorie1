const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  provider: {
    type: String,
    default: "stripe"
  },

  amount: {
    type: Number,
    required: true
  },

  currency: {
    type: String,
    default: "EUR"
  },

  plan: {
    type: String,
    enum: ["1_day", "7_days", "14_days", "30_days"],
    required: true
  },

  status: {
    type: String,
    enum: ["pending", "paid", "failed", "refunded"],
    default: "pending"
  },

  paymentId: {
    type: String
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Payment", paymentSchema);