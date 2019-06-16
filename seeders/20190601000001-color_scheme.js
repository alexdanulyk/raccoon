'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('color_schemes', [
      {
        iColorSchemeID: 1,
        sColorSchemeTitle: "Светлая",
      },
      {
        iColorSchemeID: 2,
        sColorSchemeTitle: "Яркая",
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('color_schemes', null, {});
  }
};
