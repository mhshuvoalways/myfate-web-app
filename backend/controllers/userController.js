const Auth = require("../Model/Auth");
const User = require("../Model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const serverError = require("../utils/serverError");
const {
  userRegisterValidation,
  loginValidation,
  findMailValidation,
  recoverPassValidation,
} = require("../validations/userValidation");
const transporter = require("../mail/transporter");
const { recoverPass } = require("../mail/templates");

const register = (req, res) => {
  const { email, password, recaptcha } = req.body;
  const validation = userRegisterValidation({
    email,
    password,
    recaptcha,
  });
  if (validation.isValid) {
    User.findOne({ email })
      .then((findUser) => {
        if (!findUser) {
          bcrypt.hash(password, 10, function (err, hash) {
            if (err) {
              serverError(res);
            } else {
              const userObj = {
                email,
              };
              new User(userObj)
                .save()
                .then((createUser) => {
                  const authObj = {
                    userId: createUser._id,
                    passwordHash: hash,
                  };
                  const token = jwt.sign(
                    {
                      _id: createUser._id,
                      email: createUser.email,
                    },
                    process.env.SECRET,
                    { expiresIn: "24h" }
                  );
                  new Auth(authObj)
                    .save()
                    .then(() => {
                      res.status(200).json({
                        message: "Thanks for register!",
                        user: createUser,
                        token,
                      });
                    })
                    .catch(() => {
                      serverError(res);
                    });
                })
                .catch(() => {
                  serverError(res);
                });
            }
          });
        } else {
          res.status(400).json({
            message: "User already exists!",
          });
        }
      })
      .catch(() => {
        serverError(res);
      });
  } else {
    res.status(400).json(validation.error);
  }
};

const registerGoogle = (req, res) => {
  const { email } = req.body;
  User.findOne({ email })
    .then((findUser) => {
      if (!findUser) {
        const userObj = {
          email,
        };
        new User(userObj)
          .save()
          .then((createUser) => {
            const authObj = {
              userId: createUser._id,
              strategy: "google",
            };
            const token = jwt.sign(
              {
                _id: createUser._id,
                email: createUser.email,
              },
              process.env.SECRET,
              { expiresIn: "24h" }
            );
            new Auth(authObj)
              .save()
              .then(() => {
                res.status(200).json({
                  message: "Thanks for register!",
                  user: createUser,
                  token,
                });
              })
              .catch(() => {
                serverError(res);
              });
          })
          .catch(() => {
            serverError(res);
          });
      } else {
        Auth.findOne({ userId: findUser._id })
          .then((authRes) => {
            if (authRes.strategy === "email") {
              res.status(400).json({
                message: "User already exists with email!",
              });
            } else {
              const token = jwt.sign(
                {
                  _id: findUser._id,
                  email: findUser.email,
                },
                process.env.SECRET,
                { expiresIn: "24h" }
              );
              res.status(200).json({
                message: "Thanks for login!",
                token,
                user: findUser,
              });
            }
          })
          .catch(() => {
            serverError(res);
          });
      }
    })
    .catch(() => {
      serverError(res);
    });
};

const login = (req, res) => {
  const { email, password } = req.body;
  const validation = loginValidation({ email, password });
  if (validation.isValid) {
    User.findOne({ email })
      .then((response) => {
        if (response) {
          Auth.findOne({ userId: response._id })
            .then((authRes) => {
              bcrypt.compare(
                password,
                authRes.passwordHash,
                function (err, result) {
                  if (result) {
                    const token = jwt.sign(
                      {
                        _id: response._id,
                        email: response.email,
                      },
                      process.env.SECRET,
                      { expiresIn: "24h" }
                    );
                    res.status(200).json({
                      message: "Welcome back!",
                      token,
                    });
                  } else {
                    res.status(400).json({
                      message: "Password doesn't match!",
                    });
                  }
                  if (err) {
                    serverError(res);
                  }
                }
              );
            })
            .catch(() => {
              serverError(res);
            });
        } else {
          res.status(400).json({
            message: "User not found!",
          });
        }
      })
      .catch(() => {
        serverError(res);
      });
  } else {
    res.status(400).json(validation.error);
  }
};

const findMail = (req, res) => {
  const { email } = req.body;
  const validation = findMailValidation(email);
  if (validation.isValid) {
    User.findOne({ email })
      .select("-passwordHash")
      .then((response) => {
        if (response) {
          Auth.findOne({ userId: response._id })
            .then((authRes) => {
              const token = jwt.sign(
                {
                  _id: response._id,
                  email: response.email,
                },
                process.env.SECRET,
                { expiresIn: "1h" }
              );
              if (authRes.strategy === "email") {
                transporter(email, recoverPass(token));
                res
                  .status(200)
                  .json({ response, message: "Please check your email!" });
              } else {
                res.status(400).json({
                  message: `User not found!`,
                });
              }
            })
            .catch(() => {
              serverError(res);
            });
        } else {
          res.status(400).json({
            message: "User not found!",
          });
        }
      })
      .catch(() => {
        serverError(res);
      });
  } else {
    res.status(400).json(validation.error);
  }
};

const recoverPassword = (req, res) => {
  const { token, password } = req.body;
  const validation = recoverPassValidation(password);
  if (validation.isValid) {
    jwt.verify(token, process.env.SECRET, function (err, decode) {
      if (decode) {
        User.findOne({ _id: decode._id })
          .then((response) => {
            if (response) {
              bcrypt.hash(password, 10, function (err, hash) {
                if (hash) {
                  Auth.findOneAndUpdate(
                    { userId: decode._id },
                    { passwordHash: hash }
                  )
                    .select("-passwordHash")
                    .then(() => {
                      const token = jwt.sign(
                        {
                          _id: response._id,
                          email: response.email,
                        },
                        process.env.SECRET,
                        { expiresIn: "24h" }
                      );
                      res.status(200).json({
                        token,
                      });
                    })
                    .catch(() => {
                      serverError(res);
                    });
                } else if (err) {
                  serverError(res);
                }
              });
            }
          })
          .catch(() => {
            serverError(res);
          });
      } else if (err) {
        res.status(400).json({
          message: "You are too late! Please try again later.",
        });
      }
    });
  } else {
    res.status(400).json(validation.error);
  }
};

const getUsers = (req, res) => {
  User.find()
    .select("-passwordHash")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const getMyAccount = (req, res) => {
  const { email } = req.user;
  User.findOne({ email: email })
    .select("-passwordHash")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const deleteUser = (req, res) => {
  const { email } = req.user;
  User.findOneAndRemove({ email })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const updateUser = (req, res) => {
  const { email } = req.user;
  const { firstName, lastName, birthDate, birthTime, planType } = req.body;
  const userObj = {
    profile: {
      firstName,
      lastName,
      birthDate,
      birthTime,
    },
    subscriptionPlan: {
      planType: planType,
    },
  };
  User.findOneAndUpdate({ email }, userObj, { new: true })
    .then((response) => {
      res.status(200).json({
        message: "Your plan has been successfully updated!",
        response,
      });
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  register,
  login,
  registerGoogle,
  findMail,
  recoverPassword,
  getUsers,
  getMyAccount,
  deleteUser,
  updateUser,
};
