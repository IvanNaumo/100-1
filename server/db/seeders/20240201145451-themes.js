'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Themes', [{
      id: 1,
      name: "Почему коты правят миром",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: "Тайные жизни садовых гномов",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      name: "Истории из жизни супергероев на пенсии",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      name: "Приключения в мире пиццы",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      name: "Загадочные события в офисной жизни",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Удалите только темы с id от 4 до 8
    await queryInterface.bulkDelete('Themes', { id: { [Sequelize.Op.between]: [4, 8] } });
  }
};
