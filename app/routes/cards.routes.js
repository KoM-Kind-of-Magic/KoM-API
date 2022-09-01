const express = require('express');
const router = express.Router();

const cardsController = require("../controller/cards.controller");

router.get("/", cardsController.cards);

module.exports = router;