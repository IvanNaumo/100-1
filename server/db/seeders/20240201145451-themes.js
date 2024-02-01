/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Themes',
      [
        {
          name: 'Спортивные события и достижения',
        },
      ],
      [
        {
          name: 'Спортивные события и достижения',
        },
      ],
      [
        {
          name: 'Спортивные события и достижения',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
