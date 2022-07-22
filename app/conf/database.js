const { Sequelize, DataTypes } = require('sequelize');

exports.connect = () => {
  const sequelize = new Sequelize(
    process.env.MYSQLDB_DATABASE,
    process.env.MYSQLDB_USER,
    process.env.MYSQLDB_ROOT_PASSWORD, 
    {
      host: 'mysql',
      dialect: 'mysql',
      define: {
        scopes: {
          excludeCreatedAtUpdateAt: {
            attributes: { exclude: ['createdAt', 'updatedAt'] }
          }
        },
        timestamps: false 
      }
    }
  );
  try {
    sequelize.authenticate();
    console.log('CONNECTED');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}