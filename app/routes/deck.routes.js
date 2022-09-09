const express = require('express');
const router = express.Router();

const deckController = require("../controller/deck.controller");

router.get("/", deckController.deck); // for the moment this route only retrieves the first 20 decks from the database
// router.get("/fields", deckController.fields); //I don't think this route will be used so i'll leave it here commented

// POST	Create
router.post("/", deckController.create);
// GET	Read
router.get("/:id", deckController.deck_by_id);
// PUT	Update/Replace
router.put("/:id", deckController.update);
// PATCH	Update/Modify
router.patch("/:id", deckController.patch);
// DELETE	Delete
router.delete("/:id", deckController.delete);

module.exports = router;