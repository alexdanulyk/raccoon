'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('color_color_schemes', {
      iColorColorSchemeID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      iColorSchemeID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'color_schemes',
          key: 'iColorSchemeID',
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
    })
    .then(() => queryInterface.addIndex('color_color_schemes',['iColorSchemeID']))
    .then(() => queryInterface.addIndex('color_color_schemes',['iColorID']))
    .then(() => queryInterface.addIndex('color_color_schemes',['iColorSchemeID', 'iColorID'], { indicesType: 'UNIQUE' }))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('color_color_schemes');
  }
};