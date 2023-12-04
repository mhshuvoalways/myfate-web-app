const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    profile: {
      firstName: String,
      lastName: String,
      birthDate: String,
      birthTime: String,
      sixMonthPrediction: [],
    },
    roles: {
      type: String,
      default: "user",
    },
    fullReport: {
      title: String,
      publishDate: Date,
      content: [],
    },
    subscriptionPlan: {
      planType: String,
      expireDate: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("user", userSchema);
