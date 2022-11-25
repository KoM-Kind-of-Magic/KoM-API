const { Op, Sequelize } = require("sequelize");
const Cards = require('../models/cards')
const Deck = require('../models/deck')

exports.cards = async (req, res) => {
  Cards
  .findAll({offset: 0, limit: 20})
  .then((data) => {
    return res.status(200).send({
      message: "decks are stored in data key",
      data: data,
    });
  })
  .catch((error) => {
    return res.status(500).send({
      message: error.message,
    });
  })
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

exports.search = async (req, res) => {
  try {
    const name = (req.body.name ?? "").toLowerCase();
    const text = (req.body.text ?? "").toLowerCase();
    const page = req.body.page ?? 1;
    const results = req.body.results ?? 20;
    const types = req.body.types ?? "";
    const mana_value_range = req.body.mana_value_range ?? [0, 999999999999];
    const finishes = req.body.finishes ?? "";
    Cards
      .findAll({
        attributes: ['name', 'scryfallId', 'types', 'uuid'],
        group: ['name'],
        offset: (page-1)*results, 
        limit: results,
        where: {
          [Op.and]: [
            Sequelize.where(
              Sequelize.fn('lower', Sequelize.col('name')),
              {
                [Op.like]: '%'+name+'%'
              }
            ),
            Sequelize.where(
              Sequelize.fn('lower', Sequelize.col('text')),
              {
                [Op.like]: '%'+text+'%'
              }
            ),
            Sequelize.where(
              Sequelize.fn('lower', Sequelize.col('types')),
              {
                [Op.like]: '%'+types+'%'
              }
            ),
            {manaValue: {[Op.between]: mana_value_range}},
            Sequelize.where(
              Sequelize.fn('lower', Sequelize.col('finishes')),
              {
                [Op.like]: '%'+finishes+'%'
              }
            ),
          ], 
        }
      })
      .then((data) => {
        return res.status(200).send({
          message: "Cards are stored in data key",
          data: data,
        });
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