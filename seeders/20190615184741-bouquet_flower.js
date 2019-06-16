'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('bouquet_flowers', [
      {
        iBouquetFlowerID: 1,
        iBouquetSizeID: 2,
        iFlowerID: 2,
        iColorID: 7,
        iCount: 5
      },
      {
        iBouquetFlowerID: 2,
        iBouquetSizeID: 2,
        iFlowerID: 4,
        iColorID: 6,
        iCount: 2
      },
      {
        iBouquetFlowerID: 3,
        iBouquetSizeID: 2,
        iFlowerID: 5,
        iColorID: 1,
        iCount: 10
      },
      {
        iBouquetFlowerID: 4,
        iBouquetSizeID: 1,
        iFlowerID: 5,
        iColorID: 6,
        iCount: 1
      },
      {
        iBouquetFlowerID: 5,
        iBouquetSizeID: 6,
        iFlowerID: 5,
        iColorID: 6,
        iCount: 1
      },
      {
        iBouquetFlowerID: 6,
        iBouquetSizeID: 11,
        iFlowerID: 5,
        iColorID: 6,
        iCount: 1
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('bouquet_flowers', null, {});
  }
};
