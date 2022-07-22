require("dotenv").config();
require("./conf/database").connect();
const express = require("express");
const exampleRoutes = require("./conf/routes/test.routes");
const app = express();
const ExampleController = require("./controller/test.controller");
const res = require("express/lib/response");

app.use(express.json());
app.use(exampleRoutes);

module.exports = app;