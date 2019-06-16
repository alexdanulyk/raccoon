'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('colors', [
      {
        iColorID: 1,
        sColorTitle: "Красный",
      },
      {
        iColorID: 2,
        sColorTitle: "Синий",
      },
      {
        iColorID: 3,
        sColorTitle: "Черный",
      },
      {
        iColorID: 4,
        sColorTitle: "Оранжевый",
      },
      {
        iColorID: 5,
        sColorTitle: "Зеленый",
      },
      {
        iColorID: 6,
        sColorTitle: "Белый",
      },
      {
        iColorID: 7,
        sColorTitle: "Голубой",
      },
      {
        iColorID: 8,
        sColorTitle: "Фиолетовый",
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('colors', null, {});
  }
};
