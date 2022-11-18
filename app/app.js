require("dotenv").config();
const express = require("express");
var cors = require('cors');
const app = express();
const PORT = process.env.NODE_PORT || 8090;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server Running on port ${PORT}`);
});

const sequelize = require("./conf/database")
try {
  sequelize.authenticate();
  console.log('CONNECTED');
  sequelize.sync({ force: false }).then(() => {
    console.log(`Database & tables created!`);
  })
  .catch((error) => {
    console.error(error)
  })
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const indexRoutes = require("./routes/index.routes.js");
const cardsRoutes = require("./routes/cards.routes.js");
const userRoutes = require("./routes/user.routes.js");
const deckRoutes = require("./routes/deck.routes.js");

app.use(express.json());
app.use(cors({
  origin: '*'
}));
app.use('/', indexRoutes);
app.use('/cards', cardsRoutes);
app.use('/user', userRoutes);
app.use('/deck', deckRoutes);

module.exports = app;