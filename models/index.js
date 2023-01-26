const dbConfig = require('../config/dbConfig')

const { DataTypes } = require('sequelize')

const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
      host: dbConfig.HOST,
      dialect: dbConfig.dialect,
      // operatorAliases: false,
      // pool: {
      //     max: dbConfig.pool.max
      // }
  });

  try {
sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


const db = {}


db.Sequelize = Sequelize
db.sequelize = sequelize


db.bookingDetails = require('./bookingDetails.js')(sequelize, DataTypes)
db.mobileVerification = require('./mobileVerification.js')(sequelize, DataTypes)
db.stationDetails = require('./stationDetails.js')(sequelize, DataTypes)
db.userDetails = require('./userDetails.js')(sequelize, DataTypes)
db.vehicleDetails = require('./vehicleDetails.js')(sequelize, DataTypes)


db.sequelize.sync({force: false})
.then(() => {
    console.log('yes re-sync done!')
})


module.exports = db















