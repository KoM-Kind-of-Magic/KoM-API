require('dotenv').config();
const express = require('express')
const app = express()
const port = 8080;

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.MYSQL_DATABASE , process.env.MYSQL_ROOT_USERNAME, process.env.MYSQL_ROOT_PASSWORD, {
  host: 'mysql',
  dialect: 'mysql'
});

try {
  sequelize.authenticate();
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})