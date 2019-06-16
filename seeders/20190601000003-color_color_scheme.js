'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('color_color_schemes', [
      {
        iColorColorSchemeID: 1,
        iColorSchemeID: 2,
        iColorID: 1,
      },
      {
        iColorColorSchemeID: 2,
        iColorSchemeID: 1,
        iColorID: 4,
      },
      {
        iColorColorSchemeID: 3,
        iColorSchemeID: 2,
        iColorID: 4,
      },
      {
        iColorColorSchemeID: 4,
        iColorSchemeID: 1,
        iColorID: 6,
      },
      {
        iColorColorSchemeID: 5,
        iColorSchemeID: 1,
        iColorID: 7,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('color_color_schemes', null, {});
  }
};
