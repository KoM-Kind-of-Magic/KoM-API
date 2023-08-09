const { Op, Sequelize } = require("sequelize");
const Sets = require("../models/sets");

exports.sets_by_code = async (req, res) => {
  const codeList = req.body.codes
  Sets
  .findAll({
    attributes: ['name', 'code', 'keyruneCode', 'releaseDate'],
    where: {
      code: codeList,
      isOnlineOnly: false, //We want only paper cards
    },
  })
  .then((data) => {
    return res.status(200).send({
      message: "sets are stored in data key",
      data: data,
    });
  })
  .catch((error) => {
    return res.status(500).send({
      message: error.message,
    });
  })
};

exports.get_sets = async (req, res) => {
  Sets
  .findAll({
    attributes: ['name', 'code', 'keyruneCode', 'releaseDate'],
    group: ['code'],
    order: [['releaseDate', 'DESC']]
  })
  .then((data) => {
    return res.status(200).send({
      message: "sets are stored in data key",
      data: data,
    });
  })
  .catch((error) => {
    return res.status(500).send({
      message: error.message,
    });
  })
};