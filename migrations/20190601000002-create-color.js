'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('colors', {
      iColorID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sColorTitle: {
        allowNull: false,
        type: Sequelize.STRING,        
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('colors');
  }
};