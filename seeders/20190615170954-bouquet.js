'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('bouquets', [
      {
        iBouquetID: 1,
        sBouquetTitle: 'Первый букет',
      },
      {
        iBouquetID: 2,
        sBouquetTitle: 'Второй букет',
      },
      {
        iBouquetID: 3,
        sBouquetTitle: 'Третий букет',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('bouquets', null, {});
  }
};
