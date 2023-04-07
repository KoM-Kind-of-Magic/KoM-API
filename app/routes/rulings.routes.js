const express = require('express');
const router = express.Router();

const rulingsController = require("../controller/rulings.controller");

router.get("/:uuid", rulingsController.rulings_by_uuid);

module.exports = router;