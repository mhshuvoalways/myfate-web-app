const path = require("path");
const Reports = require("../Model/Reports");
const finalAPI = require("./reports/finalAPI");
const serverError = require("../utils/serverError");

const filePaths = [
  path.join(__dirname, "reports/full/total.json"),
  path.join(__dirname, "reports/full/decade.json"),
  path.join(__dirname, "reports/full/nature.json"),
  path.join(__dirname, "reports/full/swot.json"),
  path.join(__dirname, "reports/full/relationship.json"),
  path.join(__dirname, "reports/full/advice.json"),

  path.join(__dirname, "reports/love/date.json"),
  path.join(__dirname, "reports/love/total.json"),
  path.join(__dirname, "reports/love/marriagerisk.json"),
  path.join(__dirname, "reports/love/decade.json"),
  path.join(__dirname, "reports/love/kids.json"),
  path.join(__dirname, "reports/love/marriage.json"),
  path.join(__dirname, "reports/love/output_file2.json"),

  path.join(__dirname, "reports/money/total.json"),
  path.join(__dirname, "reports/money/decade.json"),
  path.join(__dirname, "reports/money/method.json"),
  path.join(__dirname, "reports/money/risk.json"),

  path.join(__dirname, "reports/work-academic/academic.json"),
  path.join(__dirname, "reports/work-academic/job.json"),
  path.join(__dirname, "reports/work-academic/decade.json"),
];

const addReports = (req, res) => {
  const { _id } = req.user;
  const { firstName, lastName, gender } = req.body;

  const personalityType = "KGBX";
  const userName = `${firstName}${lastName}`.trim().toLowerCase();
  finalAPI(filePaths, personalityType, userName, gender)
    .then((createRes) => {
      const newObj = {
        userId: _id,
        title: createRes.title,
        date: createRes.date,
        reports: {
          full: {
            total: createRes.fullTotal,
            decade: createRes.fullDecade,
            nature: createRes.fullNature,
            swot: createRes.fullSwot,
            relationship: createRes.fullRelationship,
            advice: createRes.fullAdvice,
          },
          love: {
            date: createRes.loveDate,
            total: createRes.loveTotal,
            marriageRisk: createRes.loveMarriageRisk,
            decade: createRes.loveDecade,
            kids: createRes.loveKids,
            marriage: createRes.loveMarriage,
            ideal: createRes.loveIdeal,
          },
          finance: {
            total: createRes.financeTotal,
            decade: createRes.financeDecade,
            method: createRes.financeMethod,
            risk: createRes.financeRisk,
          },
          workAcademic: {
            academic: createRes.academicAcademic,
            job: createRes.academicJob,
            decade: createRes.academicDecade,
          },
        },
      };
      new Reports(newObj)
        .save()
        .then((response) => {
          res.status(200).json(response);
        })
        .catch(() => {
          serverError(res);
        });
    })
    .catch(() => {
      serverError(res);
    });
};

const getReports = (req, res) => {
  const { _id } = req.user;
  Reports.find({ userId: _id })
    .then((response) => {
      res.status(200).json(response[response.length - 1]);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  addReports,
  getReports,
};
