const router = require("express").Router();
const { addReport, getReports } = require("../controllers/reportController");
const authenticate = require("../middlewares/authenticate");

router.post("/addreport", authenticate, addReport);
router.get("/getreports", authenticate, getReports);

module.exports = router;
