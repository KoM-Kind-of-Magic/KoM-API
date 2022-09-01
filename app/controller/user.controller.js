const User = require('../models/user')

exports.user = async (req, res) => {
    User
      .findAll({offset: 0, limit: 20})
      .then((data) => {res.json({'status': 200, 'data': data});})
      .catch((error) => {res.json({'status': 500, 'error': error})})
};