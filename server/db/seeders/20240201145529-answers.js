"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Answers",
      [
        {
          user_id: 1, // ID пользователя "Иван"
          question_id: 1, // ID вопроса
          correct: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2, // ID пользователя "Мария"
          question_id: 1, // ID вопроса
          correct: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Добавьте остальные полные записи здесь
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Answers", null, {});
  },
};
