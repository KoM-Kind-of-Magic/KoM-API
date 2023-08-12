const express = require('express');
const router = express.Router();

const cardsController = require("../controller/cards.controller");

router.get("/", cardsController.cards);// for the moment this route only retrieves the first 20 cards from the database

// GET	Search
router.post("/search", cardsController.search);
router.post("/big-search", cardsController.laBigFatSearch);

router.post("/getPrintings", cardsController.getPrintings);

// GET	Read
router.get("/:uuid", cardsController.card_by_uuid);

module.exports = router;