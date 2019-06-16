'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('costs', {
      iCostID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      iCostFrom: {
        allowNull: true,
        type: Sequelize.INTEGER,        
      },
      iCostTo: {
        allowNull: true,
        type: Sequelize.INTEGER,        
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('costs');
  }
};