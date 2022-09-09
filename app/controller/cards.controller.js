const Cards = require('../models/cards')

exports.cards = async (req, res) => {
    Cards
      .findAll({offset: 0, limit: 20})
      .then((data) => {res.json({'status': 200, 'data': data});})
      .catch((error) => {res.json({'status': 500, 'error': error})})
};

exports.card_by_uuid = async (req, res) => {
  try {
    const uuid = req.params.uuid
    Deck
    .findOne({
      where: {
        uuid: uuid
      }
    })
    .then((data) => {
      if(data !== null) {
        return res.status(200).send({
          message: "Card stored in data key",
          data: data
        });
      }
      else {
        return res.status(404).send({
          message: "Card not found",
        });
      }
    })
    .catch((error) => {
      return res.status(500).send({
        message: error.message,
      });
    })
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};