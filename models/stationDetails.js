const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stationDetails', {
    stationId: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    stationName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    stationAddress: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bikeCapacity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sedanCapacity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    suvCapacity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stationDetails',
    schema: 'otg',
    timestamps: false,
    indexes: [
      {
        name: "stationDetails_pkey",
        unique: true,
        fields: [
          { name: "stationId" },
        ]
      },
    ]
  });
};
