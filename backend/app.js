require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./config/db");

const userRouter = require("./routers/userRouter");
const reportRouter = require("./routers/reportRouter");
const loveRouter = require("./routers/loveRouter");
const financeRouter = require("./routers/financeRouter");
const reportsRouter = require("./routers/reportsRouter");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/user", userRouter);
app.use("/api/report", reportRouter);
app.use("/api/love", loveRouter);
app.use("/api/finance", financeRouter);
app.use("/api/reports", reportsRouter);

app.get("/", (req, res) => {
  res.send("This is a business web app");
});

db(app);