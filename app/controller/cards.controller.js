const Cards = require('../model/cards')

exports.cards = async (req, res) => {
    Cards
      .scope('excludeCreatedAtUpdateAt')
      .findAll({offset: 0, limit: 20})
      .then((data) => {res.json({'status': 200, 'data': data});})
      .catch((error) => {res.json({'status': 500, 'error': error})})
};