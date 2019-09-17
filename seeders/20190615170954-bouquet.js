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
      {
        iBouquetID: 4,
        sBouquetTitle: 'Четвертый букет',
      },
      {
        iBouquetID: 5,
        sBouquetTitle: 'Пятый букет',
      },
      {
        iBouquetID: 6,
        sBouquetTitle: 'Шестой букет',
      },
      {
        iBouquetID: 7,
        sBouquetTitle: 'Седьмой букет',
      },
      {
        iBouquetID: 8,
        sBouquetTitle: 'Восьмой букет',
      },
      {
        iBouquetID: 9,
        sBouquetTitle: 'Девятый букет',
      },
      {
        iBouquetID: 10,
        sBouquetTitle: 'Десятый букет',
      },
      {
        iBouquetID: 11,
        sBouquetTitle: 'Одинадцатый букет',
      },
      {
        iBouquetID: 12,
        sBouquetTitle: 'Двенадцатый букет',
      },
      {
        iBouquetID: 13,
        sBouquetTitle: 'Тренадцатый букет',
      },
      {
        iBouquetID: 14,
        sBouquetTitle: 'Четырнадцатый букет',
      },
      {
        iBouquetID: 15,
        sBouquetTitle: 'Пятнадцатый букет',
      },
      {
        iBouquetID: 16,
        sBouquetTitle: 'Шестнадцатый букет',
      },
      {
        iBouquetID: 17,
        sBouquetTitle: 'Семьнадцатый букет',
      },
      {
        iBouquetID: 18,
        sBouquetTitle: 'Восемнадцатый букет',
      },
      {
        iBouquetID: 19,
        sBouquetTitle: 'Девятнадцатый букет',
      },
      {
        iBouquetID: 20,
        sBouquetTitle: 'Двадцатый букет',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('bouquets', null, {});
  }
};
