'use strict';
module.exports = (sequelize, DataTypes) => {
  const flowers = sequelize.define('flowers', {
    iFlowerID: { allowNull: false, type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    sFlowerTitle: { type: DataTypes.STRING, allowNull: false },
  }, {
    timestamps: false,
    tableName: 'flowers'
  });
  flowers.associate = function(models) {
    // associations can be defined here
  };
  return flowers;
};