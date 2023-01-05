const { Op, Sequelize } = require("sequelize");
const Rulings = require("../models/rulings");

exports.rulings_by_uuid = async (req, res) => {
  const uuid = req.params.uuid
  Rulings
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