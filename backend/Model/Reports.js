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
      full: {
        total: String,
        decade: String,
        nature: String,
        swot: String,
        relationship: String,
        advice: String,
      },
      love: {
        date: String,
        total: String,
        marriageRisk: String,
        decade: String,
        kids: String,
        marriage: String,
        ideal: String,
      },
      finance: {
        total: String,
        decade: String,
        method: String,
        risk: String,
      },
      workAcademic: {
        academic: String,
        job: String,
        decade: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("report", reportSchema);
