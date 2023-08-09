const sequelize = require('../conf/database')
const { DataTypes } = require('sequelize');

const cardIdentifiers = sequelize.define('cardIdentifiers', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  uuid: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cardKingdomEtchedId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cardKingdomFoilId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cardKingdomId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cardsphereId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mcmId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mcmMetaId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mtgArenaId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mtgjsonFoilVersionId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mtgjsonNonFoilVersionId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mtgjsonV4Id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mtgoFoilId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mtgoId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  multiverseId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  scryfallId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  scryfallOracleId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  scryfallIllustrationId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tcgplayerProductId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tcgplayerEtchedProductId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  freezeTableName: true,
});

module.exports = cardIdentifiers