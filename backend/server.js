require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./config/db");

const userRouter = require("./routers/userRouter");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("This is a business web app");
});

db(app);
