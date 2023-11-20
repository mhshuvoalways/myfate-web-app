const Love = require("../Model/Love");
const LoveReport = require("../utils/love/loveReport");

const addReport = (req, res) => {
  const { _id } = req.user;
  const { loveReportWritings, loveReport } = JSON.parse(LoveReport);
  const newObj = {
    loveReportWritings,
    loveReport,
    userId: _id,
  };
  new Love(newObj)
    .save()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const getReports = (req, res) => {
  const { _id } = req.user;
  Love.find({ userId: _id })
    .then((response) => {
      res.status(200).json(response[response.length - 1]);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  addReport,
  getReports,
};
