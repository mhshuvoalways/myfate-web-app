const Report = require("../Model/Report");

const getReports = (req, res) => {
  Report.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  getReports,
};
