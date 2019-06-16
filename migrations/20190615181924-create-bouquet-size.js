'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bouquet_sizes', {
      iBouquetSizeID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      iBouquetID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'bouquets',
          key: 'iBouquetID',
        },
        onUpdate: 'NO ACTION',
        onDelete: 'CASCADE',
      },
      iSizeID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'sizes',
          key: 'iSizeID',
        },
        onUpdate: 'NO ACTION',
        onDelete: 'CASCADE',
      },
      iCost: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
    })
    .then(() => queryInterface.addIndex('bouquet_sizes',['iBouquetID']))
    .then(() => queryInterface.addIndex('bouquet_sizes',['iSizeID']))
    .then(() => queryInterface.addIndex('bouquet_sizes',['iBouquetID', 'iSizeID'], { indicesType: 'UNIQUE' }))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('bouquet_sizes');
  }
};