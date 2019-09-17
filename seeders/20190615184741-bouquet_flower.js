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
      {
        iBouquetFlowerID: 7,
        iBouquetSizeID: 14,
        iFlowerID: 1,
        iColorID: 1,
        iCount: 1
      },
      {
        iBouquetFlowerID: 8,
        iBouquetSizeID: 15,
        iFlowerID: 1,
        iColorID: 1,
        iCount: 1
      },
      {
        iBouquetFlowerID: 9,
        iBouquetSizeID: 16,
        iFlowerID: 1,
        iColorID: 1,
        iCount: 1
      },
      {
        iBouquetFlowerID: 10,
        iBouquetSizeID: 17,
        iFlowerID: 1,
        iColorID: 1,
        iCount: 1
      },
      {
        iBouquetFlowerID: 11,
        iBouquetSizeID: 18,
        iFlowerID: 1,
        iColorID: 1,
        iCount: 1
      },
      {
        iBouquetFlowerID: 12,
        iBouquetSizeID: 19,
        iFlowerID: 1,
        iColorID: 1,
        iCount: 1
      },
      {
        iBouquetFlowerID: 13,
        iBouquetSizeID: 20,
        iFlowerID: 1,
        iColorID: 1,
        iCount: 1
      },
      {
        iBouquetFlowerID: 14,
        iBouquetSizeID: 21,
        iFlowerID: 1,
        iColorID: 1,
        iCount: 1
      },
      {
        iBouquetFlowerID: 15,
        iBouquetSizeID: 22,
        iFlowerID: 1,
        iColorID: 1,
        iCount: 1
      },
      {
        iBouquetFlowerID: 16,
        iBouquetSizeID: 23,
        iFlowerID: 1,
        iColorID: 1,
        iCount: 1
      },
      {
        iBouquetFlowerID: 17,
        iBouquetSizeID: 24,
        iFlowerID: 1,
        iColorID: 1,
        iCount: 1
      },
      {
        iBouquetFlowerID: 18,
        iBouquetSizeID: 25,
        iFlowerID: 1,
        iColorID: 1,
        iCount: 1
      },
      {
        iBouquetFlowerID: 19,
        iBouquetSizeID: 26,
        iFlowerID: 1,
        iColorID: 1,
        iCount: 1
      },
      {
        iBouquetFlowerID: 20,
        iBouquetSizeID: 27,
        iFlowerID: 1,
        iColorID: 1,
        iCount: 1
      },
      {
        iBouquetFlowerID: 21,
        iBouquetSizeID: 28,
        iFlowerID: 1,
        iColorID: 1,
        iCount: 1
      },
      {
        iBouquetFlowerID: 22,
        iBouquetSizeID: 29,
        iFlowerID: 1,
        iColorID: 1,
        iCount: 1
      },
      {
        iBouquetFlowerID: 23,
        iBouquetSizeID: 30,
        iFlowerID: 1,
        iColorID: 1,
        iCount: 1
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('bouquet_flowers', null, {});
  }
};
