'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bouquet_flowers', {
      iBouquetFlowerID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      iBouquetSizeID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'bouquet_sizes',
          key: 'iBouquetSizeID',
        },
        onUpdate: 'NO ACTION',
        onDelete: 'CASCADE',
      },
      iFlowerID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'flowers',
          key: 'iFlowerID',
        },
        onUpdate: 'NO ACTION',
        onDelete: 'CASCADE',
      },
      iColorID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'colors',
          key: 'iColorID',
        },
        onUpdate: 'NO ACTION',
        onDelete: 'CASCADE',
      },
      iCount: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    })
    .then(() => queryInterface.addIndex('bouquet_flowers',['iBouquetSizeID']))
    .then(() => queryInterface.addIndex('bouquet_flowers',['iFlowerID']))
    .then(() => queryInterface.addIndex('bouquet_flowers',['iColorID']))
    .then(() => queryInterface.addIndex('bouquet_flowers',['iBouquetSizeID', 'iFlowerID', 'iColorID'], { indicesType: 'UNIQUE' }))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('bouquet_flowers');
  }
};