'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('bouquet_sizes', [
      {
        iBouquetSizeID: 1,
        iBouquetID: 1,
        iSizeID: 1,
        iCost: 1000
      },
      {
        iBouquetSizeID: 2,
        iBouquetID: 1,
        iSizeID: 2,
        iCost: 2000
      },
      {
        iBouquetSizeID: 3,
        iBouquetID: 1,
        iSizeID: 3,
        iCost: 3000
      },
      {
        iBouquetSizeID: 4,
        iBouquetID: 1,
        iSizeID: 4,
        iCost: 4000
      },
      {
        iBouquetSizeID: 5,
        iBouquetID: 1,
        iSizeID: 5,
        iCost: 5000
      },
      {
        iBouquetSizeID: 6,
        iBouquetID: 2,
        iSizeID: 1,
        iCost: 25000
      },
      {
        iBouquetSizeID: 7,
        iBouquetID: 2,
        iSizeID: 2,
        iCost: 12000
      },
      {
        iBouquetSizeID: 8,
        iBouquetID: 2,
        iSizeID: 3,
        iCost: 13000
      },
      {
        iBouquetSizeID: 9,
        iBouquetID: 2,
        iSizeID: 4,
        iCost: 14000
      },
      {
        iBouquetSizeID: 10,
        iBouquetID: 2,
        iSizeID: 5,
        iCost: 20000
      },
      {
        iBouquetSizeID: 11,
        iBouquetID: 3,
        iSizeID: 1,
        iCost: 7000
      },
      {
        iBouquetSizeID: 12,
        iBouquetID: 3,
        iSizeID: 2,
        iCost: 8000
      },
      {
        iBouquetSizeID: 13,
        iBouquetID: 3,
        iSizeID: 3,
        iCost: 15000
      },
      {
        iBouquetSizeID: 14,
        iBouquetID: 4,
        iSizeID: 1,
        iCost: 1234
      },
      {
        iBouquetSizeID: 15,
        iBouquetID: 5,
        iSizeID: 1,
        iCost: 1234
      },
      {
        iBouquetSizeID: 16,
        iBouquetID: 6,
        iSizeID: 1,
        iCost: 1234
      },
      {
        iBouquetSizeID: 17,
        iBouquetID: 7,
        iSizeID: 1,
        iCost: 1234
      },
      {
        iBouquetSizeID: 18,
        iBouquetID: 8,
        iSizeID: 1,
        iCost: 1234
      },
      {
        iBouquetSizeID: 19,
        iBouquetID: 9,
        iSizeID: 1,
        iCost: 1234
      },
      {
        iBouquetSizeID: 20,
        iBouquetID: 10,
        iSizeID: 1,
        iCost: 1234
      },
      {
        iBouquetSizeID: 21,
        iBouquetID: 11,
        iSizeID: 1,
        iCost: 1234
      },
      {
        iBouquetSizeID: 22,
        iBouquetID: 12,
        iSizeID: 1,
        iCost: 1234
      },
      {
        iBouquetSizeID: 23,
        iBouquetID: 13,
        iSizeID: 1,
        iCost: 1234
      },
      {
        iBouquetSizeID: 24,
        iBouquetID: 14,
        iSizeID: 1,
        iCost: 1234
      },
      {
        iBouquetSizeID: 25,
        iBouquetID: 15,
        iSizeID: 1,
        iCost: 1234
      },
      {
        iBouquetSizeID: 26,
        iBouquetID: 16,
        iSizeID: 1,
        iCost: 1234
      },
      {
        iBouquetSizeID: 27,
        iBouquetID: 17,
        iSizeID: 1,
        iCost: 1234
      },
      {
        iBouquetSizeID: 28,
        iBouquetID: 18,
        iSizeID: 1,
        iCost: 1234
      },
      {
        iBouquetSizeID: 29,
        iBouquetID: 19,
        iSizeID: 1,
        iCost: 1234
      },
      {
        iBouquetSizeID: 30,
        iBouquetID: 20,
        iSizeID: 1,
        iCost: 1234
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('bouquet_sizes', null, {});
  }
};
