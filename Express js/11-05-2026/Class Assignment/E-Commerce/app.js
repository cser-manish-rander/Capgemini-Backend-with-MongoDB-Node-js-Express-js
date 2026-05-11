const express = require("express");
const cors = require("cors");

const app = express();
const authRouter = require("./routes/authRoutes");
const homeRouter = require("./routes/homeRoutes");


app.use(cors());
app.use(express.json());
app.use(express.text({ type: "text/plain" }));
app.use("/api/auth", authRouter);
app.use("/api/home", homeRouter);
module.exports = app;
