const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userDetails', {
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    fullName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mobileNumber: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    emailId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: true
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'userDetails',
    schema: 'otg',
    timestamps: false
  });
};
