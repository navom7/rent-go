const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vehicleDetails', {
    vehicleId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    vehicleNumber: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    vehicleType: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    presentStationId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lastStationId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isRented: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vehicleDetails',
    schema: 'otg',
    timestamps: false,
    indexes: [
      {
        name: "vehicleDetails_pkey",
        unique: true,
        fields: [
          { name: "vehicleId" },
        ]
      },
    ]
  });
};
