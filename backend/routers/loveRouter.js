const router = require("express").Router();
const { addReport, getReports } = require("../controllers/loveController");
const authenticate = require("../middlewares/authenticate");

router.post("/addlove", authenticate, addReport);
router.get("/getloves", authenticate, getReports);

module.exports = router;
