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
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('bouquet_sizes', null, {});
  }
};
