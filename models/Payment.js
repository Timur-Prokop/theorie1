const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false
  },

  provider: {
    type: String,
    default: "stripe"
  },

  amount: {
    type: Number,
    default: null
  },

  currency: {
    type: String,
    default: "EUR"
  },

  plan: {
    type: String,
    enum: ["1_day", "7_days", "14_days", "30_days", "premium", "free"],
    default: null
  },

  status: {
    type: String,
    enum: ["pending", "paid", "failed", "refunded"],
    default: "pending"
  },

  processingStatus: {
    type: String,
    enum: ["received", "processed", "failed"],
    default: "received"
  },

  stripeEventId: {
    type: String,
    required: true,
    unique: true 
  },

  stripeCustomerId: String,
  stripeSubscriptionId: String,
  stripeSessionId: String,
  stripeInvoiceId: String,

  paymentId: String, 

  periodStart: Date,
  periodEnd: Date,

  email: String,

  rawEvent: {
    type: mongoose.Schema.Types.Mixed
  },

  rawObject: {
    type: mongoose.Schema.Types.Mixed
  },

  errorMessage: String,

  processedToUser: {
    type: Boolean,
    default: false
  },

  processedAt: Date,

  createdAt: {
    type: Date,
    default: Date.now
  },

  updatedAt: {
    type: Date,
    default: Date.now
  }
});


paymentSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});


paymentSchema.index({ stripeEventId: 1 }, { unique: true });

module.exports = mongoose.model("Payment", paymentSchema);