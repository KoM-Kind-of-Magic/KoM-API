const express = require('express');
const router = express.Router();

const deckController = require("../controller/deck.controller");

router.get("/", deckController.deck);
router.get("/fields", deckController.fields);

// POST	Create
router.post("/", deckController.create);
// GET	Read
// PUT	Update/Replace
// PATCH	Update/Modify
// DELETE	Delete
router.delete("/:id", deckController.delete);

module.exports = router;