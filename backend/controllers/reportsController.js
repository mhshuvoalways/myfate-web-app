const Reports = require("../Model/Reports");
const finalAPI = require("../utils/reports/finalAPI");
const igdop = require("../utils/igdop/imageList");
const serverError = require("../utils/serverError");

const addReports = (req, res) => {
  const { _id } = req.user;
  const { firstName, lastName, gender, personality, language } = req.body;
  const userName = `${firstName} ${lastName}`;
  const result = igdop(personality);
  finalAPI(personality, userName, gender, language)
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
