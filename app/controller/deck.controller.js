const Deck = require('../models/deck')

exports.deck = async (req, res) => {
  Deck
    .findAll({offset: 0, limit: 20})
    .then((data) => {res.json({'status': 200, 'data': data});})
    .catch((error) => {res.json({'status': 500, 'error': error})})
};

exports.fields = async (req, res) => {
  Deck
    .describe()
    .then((data) => {res.json({'status': 200, 'data': data});})
    .catch((error) => {res.json({'status': 500, 'error': error})})
};

exports.create = async (req, res) => {
  try {
    const newDeck = Deck.build({
      name: "Jane",
      format: "Jane",
      type: "Jane",
      created_at: Date.now(),
      updated_at: Date.now(),
      user_id: 0,
      representing_card_uuid: null,
    })
    if(newDeck instanceof Deck) {
      await newDeck.save();
      console.log('Deck was saved to the database!')
      res.json({'status': 201, 'details': 'Deck created'});
    }
    else {
      res.json({'status': 500, 'error': 'Error while creating Deck.'})
    }
  } catch (error) {
    res.json({'status': 500, 'error': error})
  }
};

exports.deck_by_id = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    if(isNaN(id)) {
      res.json({'status': 500, 'error': 'Id given is not a number.'})
    }
    else {
      Deck
      .findByPk(id)
      .then((data) => {res.json({'status': 200, 'data': data});})
      .catch((error) => {res.json({'status': 500, 'error': error})})
    }
  } catch (error) {
    res.json({'status': 500, 'error': error})
  }
};