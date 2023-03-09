const dotenv = require('dotenv');
dotenv.config();

const { Sequelize } = require('sequelize');
host_val = process.env.USE_DOCKER ? 'mariadb' : '127.0.0.1';

const sequelize = new Sequelize(
  process.env.MYSQLDB_DATABASE,
  process.env.MYSQLDB_USER,
  process.env.MYSQLDB_PASSWORD, 
  {
    host: host_val,
    dialect: 'mariadb',
    define: {
      timestamps: false 
    }
  }
);



module.exports = sequelize