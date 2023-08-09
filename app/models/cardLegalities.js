const sequelize = require('../conf/database')
const { DataTypes } = require('sequelize');

const cardLegalities = sequelize.define('cardLegalities', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.STRING,
    allowNull: false
  },
  alchemy: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  brawl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  commander: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  duel: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  explorer: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  future: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gladiator: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  historic: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  historicbrawl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  legacy: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  modern: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  oldschool: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pauper: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  penny: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pioneer: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  predh: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  premodern: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  standard: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  vintage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  freezeTableName: true,
});

module.exports = cardLegalities