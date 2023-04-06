const { Op, Sequelize } = require("sequelize");
const Cards = require('../models/cards')
const Legalities = require('../models/legalities');
const Sets = require("../models/sets");

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
    Cards
    .findOne({
      where: {
        uuid: uuid,
      },
      include: [{
        model: Legalities,
        attributes: Legalities.uuid,
        required: false
      },
      {
        model: Sets,
        attributes: ['name', 'totalSetSize', 'keyruneCode'],
        required: false,
      }
    ],
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

exports.laBigFatSearch = async (req, res) => {
  try {
    const page = req.body.page ?? 1;
    const results = req.body.results ?? 20;

    const name = (req.body.name ?? "").toLowerCase();
    const text = (req.body.text ?? "").toLowerCase();
    const rarity = req.body.rarity && req.body.rarity.length>0 ? req.body.rarity : req.body.all.rarity;
    const type = req.body.type && req.body.type.length>0 ? req.body.type : req.body.all.type;
    const set = req.body.set && req.body.set.length>0 ? req.body.set : req.body.all.set;
    let color = req.body.color ? req.body.color : req.body.all.color;
    const colorMode = req.body.colorMode;
    let baseColors = req.body.all.color;
    const excludeColorless = req.body.excludeColorless ? req.body.excludeColorless : false;

    var combi = [];
    var temp = [];
    var filtered = []
    if (colorMode === 'exactly') {
      if (color.length == 0) {
        filtered = ['nothing'];
      }
      else if (color.length == 1 && color[0] === 'C') {
        filtered = [null]
      }
      else {
        filtered = [color.join(',')];
      }
    }
    else {
      color = color.filter(c => c != 'C')
      if (colorMode === 'commander') {
        baseColors = color;
      }
      var slent = Math.pow(2, baseColors.length);
      for (var i = 0; i < slent; i++) {
        temp = [];
        for (var j = 0; j < baseColors.length; j++) {
          if ((i & Math.pow(2, j))) {
            temp.push(baseColors[j]);
          }
        }
        if (temp.length > 0) {
          combi.push(temp.join(','));
        }
      }
      if (colorMode === 'including') {
        color = req.body.color
        if (color.length == 0) {
          req.body.all.color.filter(c => c != 'C').forEach(c => {
            filtered = [...filtered, ...combi.filter(com => com.includes(c))]
          })
        }
        else if (color.length == 1 && color[0] === 'C') {
          filtered = [null]
        }
        else {
          color.forEach(c => {
            filtered = [...filtered, ...combi.filter(com => com.includes(c))]
          });
        }
      }
      else {
        baseColors.forEach(c => {
          filtered = [...filtered, ...combi.filter(com => com.includes(c))]
        });
      }
      filtered.push(null)
    }
    if (excludeColorless) {
      filtered = filtered.filter((f) => f != null)
    }

    Cards
      .findAndCountAll({
        // attributes: ['name', 'scryfallId', 'types', 'uuid'],
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
            {
              rarity: {[Op.in]: rarity},
              types: {[Op.in]: type},
              setCode: {[Op.in]: set},
              availability: {[Op.notIn]: ['arena']},
              colorIdentity: { [Op.or]: filtered }
            },
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