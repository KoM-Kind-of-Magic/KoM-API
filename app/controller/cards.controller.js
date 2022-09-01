const Cards = require('../models/cards')

exports.cards = async (req, res) => {
    Cards
      .findAll({offset: 0, limit: 20})
      .then((data) => {res.json({'status': 200, 'data': data});})
      .catch((error) => {res.json({'status': 500, 'error': error})})
};