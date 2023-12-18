const path = require("path");
const Reports = require("../Model/Reports");
const finalAPI = require("./reports/finalAPI");
const igdop = require("./igdop/imageList");
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

// Example usage
const personalityDbPaths = [
  path.join(__dirname, "igdop/nature/nature.json"),
  path.join(__dirname, "igdop/animal/animal.json"),
  path.join(__dirname, "igdop/castle/castle.json"),
  path.join(__dirname, "igdop/space/space.json"),
];

const generalDbPaths = [
  path.join(__dirname, "igdop/love/love.json"),
  path.join(__dirname, "igdop/marriage/marriage.json"),
  path.join(__dirname, "igdop/animalLove/animalLove.json"),

  path.join(__dirname, "igdop/money/money.json"),

  path.join(__dirname, "igdop/learn/learn.json"),
  path.join(__dirname, "igdop/career/career.json"),
];

const addReports = (req, res) => {
  const { _id } = req.user;
  const { firstName, lastName, gender } = req.body;
  const personalityType = "KGBX";
  const userName = `${firstName} ${lastName}`;
  const result = igdop(personalityType, personalityDbPaths, generalDbPaths);
  finalAPI(filePaths, personalityType, userName, gender)
    .then((createRes) => {
      const newObj = {
        userId: _id,
        title: createRes.title,
        date: createRes.date,
        reports: {
          entireLife: {
            advice: {
              data: createRes.fullAdvice,
            },
            lifeCycle: {
              data: createRes.fullLifeCycle,
            },
            nature: {
              data: createRes.fullNature,
              image: result.animal,
            },
            overview: {
              data: createRes.fullOverview,
              image: result.nature,
            },
            relationship: {
              data: createRes.fullRelationship,
              image: result.space,
            },
            "strength&Weakness": {
              data: createRes.fullSwot,
              image: result.castle,
            },
          },
          love: {
            idealPartner: {
              data: createRes.loveIdealPartner,
              image: result.animalLove,
            },
            kids: {
              data: createRes.loveKids,
            },
            lifeCycle: {
              data: createRes.loveLifeCycle,
            },
            marriage: {
              data: createRes.loveMarriage,
              image: result.marriage,
            },
            needs: {
              data: createRes.loveNeeds,
            },
            overview: {
              data: createRes.loveOverview,
              image: result.love,
            },
          },
          finance: {
            outlook: {
              data: createRes.financeOutlook,
            },
            outlook2: {
              data: createRes.financeOutlook2,
            },
            overview: {
              data: createRes.financeOverview,
              image: result.money,
            },
            risk: {
              data: createRes.financeRisk,
            },
          },
          "learning&Career": {
            idealCareer: {
              data: createRes.academicIdealCareer,
              image: result.career,
            },
            learning: {
              data: createRes.academicLearning,
            },
            overview: {
              data: createRes.academicOverview,
              image: result.learn,
            },
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
