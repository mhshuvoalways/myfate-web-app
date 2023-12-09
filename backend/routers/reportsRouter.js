const router = require("express").Router();
const { getReports } = require("../controllers/reportsController");
const authenticate = require("../middlewares/authenticate");

router.get("/getreports", authenticate, getReports);

module.exports = router;
