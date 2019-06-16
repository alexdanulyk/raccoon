'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('costs', [
      {
        iCostID: 1,
        iCostFrom: null,
        iCostTo: 5000,
      },
      {
        iCostID: 2,
        iCostFrom: 5000,
        iCostTo: 10000,
      },
      {
        iCostID: 3,
        iCostFrom: 10000,
        iCostTo: 18500,
      },
      {
        iCostID: 4,
        iCostFrom: 18500,
        iCostTo: null,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('costs', null, {});
  }
};
