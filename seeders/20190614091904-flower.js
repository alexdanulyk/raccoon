'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('flowers', [
      {
        iFlowerID: 1,
        sFlowerTitle: "Пион",
      },
      {
        iFlowerID: 2,
        sFlowerTitle: "Орхидея",
      },
      {
        iFlowerID: 3,
        sFlowerTitle: "Сирень",
      },
      {
        iFlowerID: 4,
        sFlowerTitle: "Лизиантус",
      },
      {
        iFlowerID: 5,
        sFlowerTitle: "Роза",
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('flowers', null, {});
  }
};
