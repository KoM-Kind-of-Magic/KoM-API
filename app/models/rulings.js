const sequelize = require('../conf/database')
const { DataTypes } = require('sequelize');

const Rulings = sequelize.define('rulings', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: null,
  },
  uuid: {
    type: DataTypes.UUID,
    allowNull: true,
    defaultValue: null,
  },
}, {
  freezeTableName: true,
});

module.exports = Rulings