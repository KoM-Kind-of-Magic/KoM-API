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