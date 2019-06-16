'use strict';
module.exports = (sequelize, DataTypes) => {
  const bouquets = sequelize.define('bouquets', {
    iBouquetID: { allowNull: false, type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    sBouquetTitle: { type: DataTypes.STRING, allowNull: false },
  }, {
    timestamps: false,
    tableName: 'bouquets'
  });
  bouquets.associate = function(models) {
    bouquets.hasMany(models.bouquet_sizes, {
      foreignKey: 'iBouquetID'
    })
  };
  return bouquets;
};