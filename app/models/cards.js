const sequelize = require('../conf/database')
const { DataTypes } = require('sequelize');

const Cards = sequelize.define('cards', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  artist: {
    type: DataTypes.STRING,
    allowNull: true
  },
  asciiName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  availability: {
    type: DataTypes.STRING,
    allowNull: true
  },
  boosterTypes: {
    type: DataTypes.STRING,
    allowNull: true
  },
  borderColor: {
    type: DataTypes.ENUM('black','white','borderless','silver','gold'),
    allowNull: true
  },
  cardKingdomEtchedId: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cardKingdomFoilId: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cardKingdomId: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cardParts: {
    type: DataTypes.STRING,
    allowNull: true
  },
  colorIdentity: {
    type: DataTypes.STRING,
    allowNull: true
  },
  colorIndicator: {
    type: DataTypes.STRING,
    allowNull: true
  },
  colors: {
    type: DataTypes.STRING,
    allowNull: true
  },
  convertedManaCost: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  duelDeck: {
    type: DataTypes.STRING,
    allowNull: true
  },
  edhrecRank: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  faceConvertedManaCost: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  faceFlavorName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  faceManaValue: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  faceName: {
    type: DataTypes.STRING,
    allowNull: true
  },      
  finishes: {
    type: DataTypes.STRING,
    allowNull: true
  },      
  flavorName: {
    type: DataTypes.STRING,
    allowNull: true
  },    
  flavorText: {
    type: DataTypes.STRING,
    allowNull: true
  },    
  frameEffects: {
    type: DataTypes.STRING,
    allowNull: true
  },  
  frameVersion: {
    type: DataTypes.ENUM('2003','1993','2015','1997','future'),
    allowNull: true
  },
  hand: {
    type: DataTypes.STRING,
    allowNull: true
  },          
  hasAlternativeDeckLimit: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  hasContentWarning: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  hasFoil: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  hasNonFoil: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  isAlternative: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  isFullArt: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  isFunny: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  isOnlineOnly: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  isOversized: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  isPromo: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  isRebalanced: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  isReprint: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  isReserved: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  isStarter: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  isStorySpotlight: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  isTextless: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  isTimeshifted: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  keywords: {
    type: DataTypes.STRING,
    allowNull: true
  },
  language: {
    type: DataTypes.STRING,
    allowNull: true
  },
  layout: {
    type: DataTypes.ENUM('normal','adventure','class','aftermath','split','flip','leveler','saga','transform','vanguard','meld','modal_dfc','scheme','planar','reversible_card','host','augment'),
    allowNull: true
  },
  leadershipSkills: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  life: {
    type: DataTypes.STRING,
    allowNull: true
  },
  loyalty: {
    type: DataTypes.STRING,
    allowNull: true
  },
  manaCost: {
    type: DataTypes.STRING,
    allowNull: true
  },
  manaValue: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  mcmId: {
    type: DataTypes.STRING,
    allowNull: true
  },
  mcmMetaId: {
    type: DataTypes.STRING,
    allowNull: true
  },
  mtgArenaId: {
    type: DataTypes.STRING,
    allowNull: true
  },
  mtgjsonV4Id: {
    type: DataTypes.STRING,
    allowNull: true
  },
  mtgoFoilId: {
    type: DataTypes.STRING,
    allowNull: true
  },
  mtgoId: {
    type: DataTypes.STRING,
    allowNull: true
  },
  multiverseId: {
    type: DataTypes.STRING,
    allowNull: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  number: {
    type: DataTypes.STRING,
    allowNull: true
  },
  originalPrintings: {
    type: DataTypes.STRING,
    allowNull: true
  },
  originalReleaseDate: {
    type: DataTypes.STRING,
    allowNull: true
  },
  originalText: {
    type: DataTypes.STRING,
    allowNull: true
  },
  originalType: {
    type: DataTypes.STRING,
    allowNull: true
  },
  otherFaceIds: {
    type: DataTypes.STRING,
    allowNull: true
  },
  power: {
    type: DataTypes.STRING,
    allowNull: true
  },
  printings: {
    type: DataTypes.STRING,
    allowNull: true
  },
  promoTypes: {
    type: DataTypes.STRING,
    allowNull: true
  },
  purchaseUrls: {
    type: DataTypes.STRING,
    allowNull: true
  },
  rarity: {
    type: DataTypes.ENUM('uncommon','common','rare','mythic','special','bonus'),
    allowNull: true
  },
  rebalancedPrintings: {
    type: DataTypes.STRING,
    allowNull: true
  },
  scryfallId: {
    type: DataTypes.STRING,
    allowNull: true
  },
  scryfallIllustrationId: {
    type: DataTypes.STRING,
    allowNull: true
  },
  scryfallOracleId: {
    type: DataTypes.STRING,
    allowNull: true
  },
  securityStamp: {
    type: DataTypes.STRING,
    allowNull: true
  },
  setCode: {
    type: DataTypes.STRING,
    allowNull: true
  },
  side: {
    type: DataTypes.STRING,
    allowNull: true
  },
  signature: {
    type: DataTypes.STRING,
    allowNull: true
  },
  subtypes: {
    type: DataTypes.STRING,
    allowNull: true
  },
  supertypes: {
    type: DataTypes.STRING,
    allowNull: true
  },
  tcgplayerEtchedProductId: {
    type: DataTypes.STRING,
    allowNull: true
  },
  tcgplayerProductId: {
    type: DataTypes.STRING,
    allowNull: true
  },
  text: {
    type: DataTypes.STRING,
    allowNull: true
  },
  toughness: {
    type: DataTypes.STRING,
    allowNull: true
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true
  },
  types: {
    type: DataTypes.STRING,
    allowNull: true
  },
  uuid: {
    type: DataTypes.UUID,
    allowNull: false,
    unique: true
  },
  variations: {
    type: DataTypes.STRING,
    allowNull: true
  },
  watermark: {
    type: DataTypes.STRING,
    allowNull: true
  },
}, {
  freezeTableName: true,
});

module.exports = Cards
