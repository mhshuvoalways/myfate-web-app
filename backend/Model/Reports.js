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
        overview: {
          data: String,
          image: String,
        },
        lifeCycle: {
          data: String,
          image: String,
        },
        nature: {
          data: String,
          image: String,
        },
        "strength&Weakness": {
          data: String,
          image: String,
        },
        relationship: {
          data: String,
          image: String,
        },
        advice: {
          data: String,
          image: String,
        },
      },
      love: {
        overview: {
          data: String,
          image: String,
        },
        needs: {
          data: String,
          image: String,
        },
        lifeCycle: {
          data: String,
          image: String,
        },
        marriage: {
          data: String,
          image: String,
        },
        kids: {
          data: String,
          image: String,
        },
        idealPartner: {
          data: String,
          image: String,
        },
      },
      finance: {
        overview: {
          data: String,
          image: String,
        },
        outlook: {
          data: String,
          image: String,
        },
        outlook2: {
          data: String,
          image: String,
        },
        risk: {
          data: String,
          image: String,
        },
      },
      "learning&Career": {
        overview: {
          data: String,
          image: String,
        },
        idealCareer: {
          data: String,
          image: String,
        },
        learning: {
          data: String,
          image: String,
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("report", reportSchema);
