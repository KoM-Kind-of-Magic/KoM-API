const dotenv = require('dotenv');
dotenv.config();

const { Sequelize } = require('sequelize');
host_val = process.env.USE_DOCKER ? 'mariadb' : '127.0.0.1';
console.log(process.env.MYSQL_DATABASE,process.env.MYSQL_USER, process.env.MYSQL_PASSWORD + "lfdsjfldsj")
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD, 
  {
    host: host_val,
    dialect: 'mariadb',
    define: {
      timestamps: false 
    }
  }
);

module.exports = sequelize