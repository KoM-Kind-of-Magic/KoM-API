const sequelize = require('../conf/database')
const { DataTypes } = require('sequelize');

const Sets = sequelize.define('sets', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    defaultValue: null,
  },
  baseSetSize: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  block: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: null,
  },
  booster: {
    type: DataTypes.TEXT('long'),
    allowNull: true,
    defaultValue: null,
  },
  cardsphereSetId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  code: {
    type: DataTypes.STRING(8),
    allowNull: true,
    unique: true,
  },
  isFoilOnly: {
    type: DataTypes.TINYINT(1),
    allowNull: false,
    defaultValue: 0,
  },
  isForeignOnly: {
    type: DataTypes.TINYINT(1),
    allowNull: false,
    defaultValue: 0,
  },
  isNonFoilOnly: {
    type: DataTypes.TINYINT(1),
    allowNull: false,
    defaultValue: 0,
  },
  isOnlineOnly: {
    type: DataTypes.TINYINT(1),
    allowNull: false,
    defaultValue: 0,
  },
  isPartialPreview: {
    type: DataTypes.TINYINT(1),
    allowNull: false,
    defaultValue: 0,
  },
  keyruneCode: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: null,
  },
  mcmId: {
    type: DataTypes.INTEGER(11),
    allowNull: true,
    defaultValue: null,
  },
  mcmIdExtras: {
    type: DataTypes.INTEGER(11),
    allowNull: true,
    defaultValue: null,
  },
  mcmName: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: null,
  },
  mtgoCode: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: null,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: null,
  },
  parentCode: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: null,
  },
  releaseDate: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  },
  sealedProduct: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: null,
  },
  tcgplayerGroupId: {
    type: DataTypes.INTEGER(11),
    allowNull: true,
    defaultValue: null,
  },
  totalSetSize: {
    type: DataTypes.INTEGER(11),
    allowNull: true,
    defaultValue: null,
  },
  type: {
    type: DataTypes.ENUM('core','masters','memorabilia','commander','expansion','starter','archenemy','box','draft_innovation','masterpiece','arsenal','funny','duel_deck','from_the_vault','promo','premium_deck','alchemy','planechase','token','vanguard','treasure_chest','spellbook'),
    allowNull: true,
    defaultValue: null,
  }
}, {
  freezeTableName: true,
});

module.exports = Sets