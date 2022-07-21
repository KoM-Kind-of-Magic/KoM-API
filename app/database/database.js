require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');

console.log(process.env.MYSQL_DATABASE);

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_ROOT_USERNAME,
  process.env.MYSQL_ROOT_PASSWORD, 
  {
    host: 'localhost',
    dialect: 'mysql',
    define: {
      scopes: {
        excludeCreatedAtUpdateAt: {
          attributes: { exclude: ['createdAt', 'updatedAt'] }
        }
      },
      timestamps: false 
    }
  }
);

try {
  sequelize.authenticate();
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const Cards = sequelize.define('cards', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  // Other model options go here
});

module.exports = {

  /**
   * get cards in the database
   * @author Pierre-Louis NICOLAS <pierre-louis.nicolas@epitech.eu>
   * @param  {Number} [page=1] Page currently displaying
   * @param  {Number} [resultsCount=20] Amount of results par page
   * @return {Object[]} An array of objects containing cards
   */
  getCards: (page=1, resultsCount=20) => {
    return new Promise((resolve, reject) => {
      Cards
        .scope('excludeCreatedAtUpdateAt')
        .findAll({offset: (page-1)*resultsCount, limit: resultsCount})
        .then((data) => {resolve(data)})
        .catch((error) => {reject(error)})
    })
  },

  
  /**
   * Search some cards in the database
   * @author Pierre-Louis NICOLAS <pierre-louis.nicolas@epitech.eu>
   * @param  {String} [name=""] Name of a card
   * @param  {Number} [page=1] Page currently displaying
   * @param  {Number} [resultsCount=20] Amount of results par page
   * @param  {String} [langage="fr"] langage used to search cards
   * @return {Object[]} An array of objects containing cards
   */
  searchCards: (name="", page=1, resultsCount=20, langage="fr") => {
    // sqlQuery = "";
    // if (langage == "fr") {
    //   sqlQuery = " \
    //     SELECT f.name as name, c.id as id, c.uuid as uuid, c.scryfallId as scryfallId \
    //     FROM foreign_data f, cards c \
    //     WHERE f.uuid = c.uuid \
    //     AND f.language = 'French' \
    //     AND f.name LIKE '%"+name+"%' \
    //     LIMIT "+((page-1)*resultsCount)+","+resultsCount+" \
    //   ;";
    // }
    // if (langage == "en") {
    //   sqlQuery = " \
    //     SELECT name, id, uuid, scryfallId \
    //     FROM cards \
    //     WHERE name LIKE '%"+name+"%' \
    //     LIMIT "+((page-1)*resultsCount)+","+resultsCount+" \
    //   ;";
    // }
    // connection.query(sqlQuery, function(err, rows, fields) {
    //   if (err) throw err;
    //   console.log(typeof(rows));
    //   return(rows);
    // });
    
    return new Promise((resolve, reject) => {
      reject("🚧 Route in construction 🚧")
    })
  },
}