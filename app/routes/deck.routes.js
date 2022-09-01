const express = require('express');
const router = express.Router();

const deckController = require("../controller/deck.controller");

router.get("/", deckController.deck);
router.get("/fields", deckController.fields);

module.exports = router;