const Finance = require("../Model/Finance");
const FinanceReport = require("../utils/finance/financeAPI");

const addReport = (req, res) => {
  const { _id } = req.user;
  const { financeReportWritings, financeReport } = JSON.parse(FinanceReport);
  const newObj = {
    financeReportWritings,
    financeReport,
    userId: _id,
  };
  new Finance(newObj)
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
  Finance.find({ userId: _id })
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
