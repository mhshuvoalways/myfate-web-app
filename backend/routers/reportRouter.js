const router = require("express").Router();
const { getReports } = require("../controllers/reportController");

router.get("/getreports", getReports);

module.exports = router;
