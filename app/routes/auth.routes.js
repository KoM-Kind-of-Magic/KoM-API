const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config();

const authController = require("../controller/auth.controller");

// Register
router.post("/register", authController.register);
// Login
router.post("/login", authController.login);

module.exports = router;