require("dotenv").config();
const express = require("express");
const app = express();

const sequelize = require("./conf/database")
try {
  sequelize.authenticate();
  console.log('CONNECTED');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const indexRoutes = require("./routes/index.routes");
const cardsRoutes = require("./routes/cards.routes");

app.use(express.json());
app.use('/', indexRoutes);
app.use('/cards', cardsRoutes);

module.exports = app;