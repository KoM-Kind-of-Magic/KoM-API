const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");

const deckController = require("../controller/deck.controller");

router.get("/", auth, deckController.deck); // for the moment this route only retrieves the first 20 decks from the database
// router.get("/fields", deckController.fields); //I don't think this route will be used so i'll leave it here commented

// POST	Create
router.post("/", auth, deckController.create);
// GET All formats possible for a deck
router.get("/formats", deckController.get_formats);
// GET	Read
router.get("/:id", deckController.deck_by_id);
// PUT	Update/Replace
router.put("/:id", deckController.update);
// PATCH	Update/Modify
router.patch("/:id", deckController.patch);
// DELETE	Delete
router.delete("/:id", deckController.delete);
// Remove DELETE /deck/:deck_id/cards/:card_uuid -> need to make it on deck controller side
router.delete("/:id/cards/:uuid", deckController.remove_card)
// POST /deck/:deck_id/cards/:card_uuid -> need to make it on deck controller side
router.post("/:id/cards", deckController.add_card);
// router.post("/:id/cards/:uuid", deckController.add_card);

router.post("/import", deckController.import)

module.exports = router;