const express = require('express');
const router = express.Router();

const dotenv = require('dotenv');
dotenv.config();


const TestController = require("../../controller/test.controller");

// Example
router.get("/", TestController.example);

module.exports = router;