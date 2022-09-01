const sequelize = require('../conf/database')
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nickname: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },        
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW
  },         
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  freezeTableName: true,
});


module.exports = User
