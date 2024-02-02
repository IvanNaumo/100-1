"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Answers",
      [
        // Ответы пользователя 1
        { user_id: 1, question_id: 1, correct: true, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 1, question_id: 2, correct: false, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 1, question_id: 3, correct: true, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 1, question_id: 4, correct: true, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 1, question_id: 5, correct: false, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 1, question_id: 6, correct: true, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 1, question_id: 7, correct: true, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 1, question_id: 8, correct: true, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 1, question_id: 9, correct: true, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 1, question_id: 10, correct: true, createdAt: new Date(), updatedAt: new Date() },

        // Ответы пользователя 2
        { user_id: 2, question_id: 1, correct: false, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 2, question_id: 2, correct: false, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 2, question_id: 3, correct: false, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 2, question_id: 4, correct: false, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 2, question_id: 5, correct: false, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 2, question_id: 6, correct: false, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 2, question_id: 7, correct: false, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 2, question_id: 8, correct: false, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 2, question_id: 9, correct: false, createdAt: new Date(), updatedAt: new Date() },
        { user_id: 2, question_id: 10, correct: false, createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Answers", null, {});
  },
};
