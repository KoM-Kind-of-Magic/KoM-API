const express = require('express');
const router = express.Router();

const setsController = require("../controller/sets.controller");

router.post("/codes", setsController.sets_by_code);

module.exports = router;