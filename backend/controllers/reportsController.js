const path = require("path");
const Reports = require("../Model/Reports");
const finalAPI = require("./reports/finalAPI");
const serverError = require("../utils/serverError");

const filePaths = [
  path.join(__dirname, "reports/full/overview.json"),
  path.join(__dirname, "reports/full/advice.json"),
  path.join(__dirname, "reports/full/lifeCycle.json"),
  path.join(__dirname, "reports/full/nature.json"),
  path.join(__dirname, "reports/full/relationship.json"),
  path.join(__dirname, "reports/full/swot.json"),

  path.join(__dirname, "reports/love/idealPartner.json"),
  path.join(__dirname, "reports/love/kids.json"),
  path.join(__dirname, "reports/love/lifeCycle.json"),
  path.join(__dirname, "reports/love/marriage.json"),
  path.join(__dirname, "reports/love/needs.json"),
  path.join(__dirname, "reports/love/overview.json"),

  path.join(__dirname, "reports/money/outlook.json"),
  path.join(__dirname, "reports/money/outlook2.json"),
  path.join(__dirname, "reports/money/overview.json"),
  path.join(__dirname, "reports/money/risk.json"),

  path.join(__dirname, "reports/work-academic/idealCareer.json"),
  path.join(__dirname, "reports/work-academic/learning.json"),
  path.join(__dirname, "reports/work-academic/overview.json"),
];

const addReports = (req, res) => {
  const { _id } = req.user;
  const { firstName, lastName, gender } = req.body;
  const personalityType = "KGBX";
  const userName = `${firstName} ${lastName}`;
  finalAPI(filePaths, personalityType, userName, gender)
    .then((createRes) => {
      const newObj = {
        userId: _id,
        title: createRes.title,
        date: createRes.date,
        reports: {
          full: {
            advice: createRes.fullAdvice,
            lifeCycle: createRes.fullLifeCycle,
            nature: createRes.fullNature,
            overview: createRes.fullOverview,
            relationship: createRes.fullRelationship,
            swot: createRes.fullSwot,
          },
          love: {
            idealPartner: createRes.loveIdealPartner,
            kids: createRes.loveKids,
            lifeCycle: createRes.loveLifeCycle,
            marriage: createRes.loveMarriage,
            needs: createRes.loveNeeds,
            overview: createRes.loveOverview,
          },
          money: {
            outlook: createRes.financeOutlook,
            outlook2: createRes.financeOutlook2,
            overview: createRes.financeOverview,
            risk: createRes.financeRisk,
          },
          workAcademic: {
            idealCareer: createRes.academicIdealCareer,
            learning: createRes.academicLearning,
            overview: createRes.academicOverview,
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
