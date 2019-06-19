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

  bouquets.getBouquets = async function () {
    let bouquets = await bouquets.findAll()
    return bouquets
  }

  bouquets.getBouquet = async function (iBouquetID) {
    let bouquet = await bouquets.findByPk(iBouquetID, {
      include: [
        {
          model: sequelize.models.bouquet_sizes,
          include: [
            {
              model: sequelize.models.bouquet_flowers
            }
          ]
        }
      ]
    })
    return bouquet
  }

  return bouquets;
};