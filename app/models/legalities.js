const sequelize = require('../conf/database')
const { DataTypes } = require('sequelize');

const Legalities = sequelize.define('legalities', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  format: {
    type: DataTypes.ENUM('commander','duel','legacy','modern','paupercommander','penny','premodern','vintage','gladiator','historic','historicbrawl','pauper','pioneer','explorer','alchemy','brawl','future','standard','oldschool'),
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('Legal','Restricted','Banned'),
    allowNull: false
  },
  uuid: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  freezeTableName: true,
});

module.exports = Legalities