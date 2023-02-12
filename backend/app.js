const express = require("express");
const morgan = require("morgan");
const ProjectRouter = require("./routes/projectRoute");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api", ProjectRouter);

module.exports = app;
