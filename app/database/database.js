var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306',
  user     : 'espespesp',
  password : 'espespesp',
  database : 'KOM'
});

connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;
//   console.log('The solution is: ', rows[0].solution);
// });

module.exports = {
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
    sqlQuery = "";
    if (langage == "fr") {
      sqlQuery = " \
        SELECT f.name as name, c.id as id, c.uuid as uuid, c.scryfallId as scryfallId \
        FROM foreign_data f, cards c \
        WHERE f.uuid = c.uuid \
        AND f.language = 'French' \
        AND f.name LIKE '%"+name+"%' \
        LIMIT "+((page-1)*resultsCount)+","+resultsCount+" \
      ;";
    }
    if (langage == "en") {
      sqlQuery = " \
        SELECT name, id, uuid, scryfallId \
        FROM cards \
        WHERE name LIKE '%"+name+"%' \
        LIMIT "+((page-1)*resultsCount)+","+resultsCount+" \
      ;";
    }
    connection.query(sqlQuery, function(err, rows, fields) {
      if (err) throw err;
      console.log(typeof(rows));
      return(rows);
    });
  }

}