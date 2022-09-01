const dotenv = require('dotenv');
dotenv.config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.MYSQLDB_DATABASE,
  process.env.MYSQLDB_USER,
  process.env.MYSQLDB_ROOT_PASSWORD, 
  {
    host: 'mysql',
    dialect: 'mysql',
    define: {
      timestamps: false 
    }
  }
);



module.exports = sequelize