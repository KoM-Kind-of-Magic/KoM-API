const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const authController = require("../controller/auth.controller");

router.get("/", authController.auth);

// Register
router.post("/register", authController.register);
// Login
router.post("/login", authController.login);

module.exports = router;