const { Op, Sequelize } = require("sequelize");
const cardRulings = require("../models/cardRulings");

exports.rulings_by_uuid = async (req, res) => {
  const uuid = req.params.uuid
  cardRulings
  .findAll({
    where: {
      uuid: uuid,
    },
  })
  .then((data) => {
    return res.status(200).send({
      message: "rulings are stored in data key",
      data: data,
    });
  })
  .catch((error) => {
    return res.status(500).send({
      message: error.message,
    });
  })
};