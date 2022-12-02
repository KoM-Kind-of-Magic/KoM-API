const User = require('../models/user');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.user = async (req, res) => {
    User
      .findAll({offset: 0, limit: 20})
      .then((data) => {res.json({'status': 200, 'data': data});})
      .catch((error) => {res.json({'status': 500, 'error': error})})
};

exports.updateEmail = async (req, res) => {
  const token = req.headers["x-access-token"];
  const {email, new_email, password} = req.body;

  if (token) {
    if (!(email && new_email && password)) {
      res.status(400).send("All inputs are required");
    }
      let decoded = jwt.decode(token, process.env.JWT_KEY);
      req.user = decoded;
      const user = await User.findOne({ where: {user_id : req.user.user_id} });
      if(user && email === user.email && email != new_email && (await bcrypt.compare(password, user.password)))
      {
        // mettre à jour l'email
        user.set({email: new_email});
        await user.save();
        res.send(user);
      }
      else {
        res.status(404).send("FAIL")
      }
  } else{
    res.status(404).send("No access token")
  }
};

// Permet avec le token d'accéder à toute les données du monsieur connectée
// exports.getProfile = (req, res) => {
//   const token = req.headers["x-access-token"];
//   // const token = req.headers["authorization"];
//   // res.send(token);
//   if (token) {
//       let decoded = jwt.decode(token, process.env.JWT_KEY);
//       req.user = decoded;
//       // res.send(decoded);
//       test = User.findByPk(req.user.user_id)
//       .then(user => {
//           if(!user) {
//               return res.status(404).send({
//                   message: "User not found with id " + req.params.id
//               });            
//           }
//           res.send(user);
//       });
//   }
// }