const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bookingDetails', {
    bookingId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    vehicleNumber: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    vehicleType: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    isRented: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    lastStationId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    nextStationId: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    tripStartingTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tripEndingTIme: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bookingDetails',
    schema: 'otg',
    timestamps: false,
    indexes: [
      {
        name: "bookingDetails_pkey",
        unique: true,
        fields: [
          { name: "bookingId" },
        ]
      },
    ]
  });
};
