'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('sizes', [
      {
        iSizeID: 1,
        sSizeTitle: "XS",
      },
      {
        iSizeID: 2,
        sSizeTitle: "S",
      },
      {
        iSizeID: 3,
        sSizeTitle: "M",
      },
      {
        iSizeID: 4,
        sSizeTitle: "L",
      },
      {
        iSizeID: 5,
        sSizeTitle: "XL",
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('sizes', null, {});
  }
};
