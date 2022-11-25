const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

exports.register = async (req, res) => {
    try {
      const { email, password, confirm_password, username } = req.body;
  
      if (!(email && password && confirm_password && username)) {
        res.status(400).send("All inputs are required");
      }
  
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await User.findOne({ where: {email : email} });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }

      // Confirmation password
      if (confirm_password != password)
      {
        return res.status(409).send("Password and confirm password must be the same");
      }

      // if ( username.length <= 4)
      // {
      //   return res.status(409).send("Username must be more than 4 character long");
      // }
  
      //Encrypt user password
      let encryptedPassword = await bcrypt.hash(password, 10);
  
      // Create user in our database
      const user = await User.create({
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
        username: username,
      });

      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
};

exports.login = async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("All inputs are required");
    }

    const user = await User.findOne({ where: {email : email} });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user.user_id, isAdmin: user.isAdmin },
        process.env.JWT_KEY,
        {
          expiresIn: "2h",
        }
      );
      const response = {
        token: token,
      };
      res.status(201).send(response);
    } else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
  }
};