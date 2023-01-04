const { Op, Sequelize } = require("sequelize");
const Sets = require("../models/sets");

exports.sets_by_code = async (req, res) => {
  const codeList = req.body.codes
  Sets
  .findAll({
    attributes: ['name', 'code', 'keyruneCode', 'releaseDate'],
    where: {
      code: codeList,
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