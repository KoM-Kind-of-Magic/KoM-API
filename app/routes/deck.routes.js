const express = require('express');
const router = express.Router();

const deckController = require("../controller/deck.controller");

router.get("/", deckController.deck);
router.get("/fields", deckController.fields);

// POST	Create
router.post("/", deckController.create);
// GET	Read
router.get("/:id", deckController.deck_by_id);
// PUT	Update/Replace
router.put("/:id", deckController.update);
// PATCH	Update/Modify
// router.patch("/:id", deckController.patch);
// DELETE	Delete
router.delete("/:id", deckController.delete);

module.exports = router;