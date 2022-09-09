const express = require('express');
const router = express.Router();

const cardsController = require("../controller/cards.controller");

router.get("/", cardsController.cards);// for the moment this route only retrieves the first 20 cards from the database

// GET	Read
router.get("/:uuid", cardsController.card_by_uuid);

// GET	Search
router.get("/search", cardsController.search);

module.exports = router;