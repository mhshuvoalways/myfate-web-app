const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const reportSchema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    title: String,
    date: String,
    reports: {
      entireLife: {
        overview: String,
        lifeCycle: String,
        nature: String,
        "strength&Weakness": String,
        relationship: String,
        advice: String,
      },
      love: {
        overview: String,
        needs: String,
        lifeCycle: String,
        marriage: String,
        kids: String,
        idealPartner: String,
      },
      finance: {
        overview: String,
        outlook: String,
        outlook2: String,
        risk: String,
      },
      "learning&Career": {
        overview: String,
        idealCareer: String,
        learning: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("report", reportSchema);
