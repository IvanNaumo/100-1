'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Questions', [{
      theme_id: 1, // ID темы "История"
      name: 'Кто первым пришел к власти в России?',
      answer: 'Рюрик',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      theme_id: 1, // ID темы "История"
      name: 'В каком году началась Великая Отечественная война?',
      answer: '1941',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      theme_id: 2, // ID темы "География"
      name: 'Какая река самая длинная в мире?',
      answer: 'Амазонка',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      theme_id: 3, // ID темы "Биология"
      name: 'Какая клетка является основной единицей живых организмов?',
      answer: 'Клетка',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
