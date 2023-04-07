const express = require('express');
const router = express.Router();

const userController = require("../controller/user.controller");
const deckController = require("../controller/deck.controller");

router.get("/", userController.user);

// get list of decks for a given user id
router.get("/:user_id/decks", deckController.deck_by_id);
// temporaire pour change l'email sur le profil user
router.put("/:user_id/email", userController.updateEmail);

// router.get("/profile", userController.getProfile);

module.exports = router;