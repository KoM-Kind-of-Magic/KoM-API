const sequelize = require('../conf/database')
const { DataTypes } = require('sequelize');

const Legalities = sequelize.define('legalities', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
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
    type: DataTypes.UUID,
    allowNull: false,
    unique: true
  },
}, {
  freezeTableName: true,
});

module.exports = Legalities