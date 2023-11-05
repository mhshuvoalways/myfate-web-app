const router = require("express").Router();
const {
  register,
  login,
  registerGoogle,
  findMail,
  recoverPassword,
  getUsers,
  getMyAccount,
  deleteUser,
  updateUser,
} = require("../controllers/userController");
const authenticate = require("../middlewares/authenticate");

router.post("/register", register);
router.post("/login", login);
router.post("/registergoogle", registerGoogle);
router.post("/findmail", findMail);
router.post("/recoverpass", recoverPassword);
router.get("/getusers", authenticate, getUsers);
router.get("/getmyaccount", authenticate, getMyAccount);
router.delete("/deleteuser", authenticate, deleteUser);
router.put("/updateuser", authenticate, updateUser);

module.exports = router;
