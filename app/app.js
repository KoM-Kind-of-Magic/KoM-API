require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.NODE_DOCKER_PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});

const sequelize = require("./conf/database")
try {
  sequelize.authenticate();
  console.log('CONNECTED');
  sequelize.sync({ force: true }).then(() => {
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
app.use('/', indexRoutes);
app.use('/cards', cardsRoutes);
app.use('/user', userRoutes);
app.use('/deck', deckRoutes);

module.exports = app;