const sequelize = require('../conf/database')
const { DataTypes } = require('sequelize');

const Deck = sequelize.define('deck', {
  deck_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  format: {
    type: DataTypes.STRING,
    allowNull: true
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true
  },        
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW
  },         
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  // user_id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: 'user',
  //     key: 'user_id',
  //   }
  // },
  representing_card_uuid: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: 'cards',
      key: 'uuid',
    }
  },
}, {
  freezeTableName: true,
});

module.exports = Deck