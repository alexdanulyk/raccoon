'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('flowers', {
      iFlowerID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sFlowerTitle: {
        allowNull: false,
        type: Sequelize.STRING,        
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('flowers');
  }
};