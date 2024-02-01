'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Themes', [{
      id: 1,
      name: 'История',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: 'География',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      name: 'Биология',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Themes', null, {});
  }
};
