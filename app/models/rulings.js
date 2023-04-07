const sequelize = require('../conf/database')
const { DataTypes } = require('sequelize');

const Rulings = sequelize.define('rulings', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    defaultValue: null,
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
    allowNull: false,
    defaultValue: null,
  },
}, {
  freezeTableName: true,
});

module.exports = Rulings