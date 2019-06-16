'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sizes', {
      iSizeID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sSizeTitle: {
        allowNull: false,
        type: Sequelize.STRING,        
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sizes');
  }
};
