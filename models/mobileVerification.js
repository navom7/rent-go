const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mobileVerification', {
    verificationId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    mobileNumber: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    otp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    createdOn: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mobileVerification',
    schema: 'otg',
    timestamps: false,
    indexes: [
      {
        name: "mobileVerification_pkey",
        unique: true,
        fields: [
          { name: "verificationId" },
        ]
      },
    ]
  });
};
