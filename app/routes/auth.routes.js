const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const auth = require("../middleware/auth");

const dotenv = require('dotenv');
dotenv.config();

const authController = require("../controller/auth.controller");

// Register
router.post("/register", authController.register);
// Login
router.post("/login", authController.login);
// Check token
router.get("/checkToken", auth, authController.checkToken)

module.exports = router;