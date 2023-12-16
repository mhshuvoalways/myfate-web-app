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
        advice: String,
        lifeCycle: String,
        nature: String,
        overview: String,
        relationship: String,
        swot: String,
      },
      love: {
        idealPartner: String,
        kids: String,
        lifeCycle: String,
        marriage: String,
        needs: String,
        overview: String,
      },
      money: {
        outlook: String,
        outlook2: String,
        overview: String,
        risk: String,
      },
      workAcademic: {
        idealCareer: String,
        learning: String,
        overview: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("report", reportSchema);
