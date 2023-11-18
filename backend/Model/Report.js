const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const reportSchema = new Schema(
  {
    dReportWritings: Object,
    dReport: Object,
  },
  {
    timestamps: true,
  }
);

module.exports = model("dReport", reportSchema);
