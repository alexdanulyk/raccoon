'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('color_schemes', {
      iColorSchemeID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sColorSchemeTitle: {
        allowNull: false,
        type: Sequelize.STRING,        
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('color_schemes');
  }
};