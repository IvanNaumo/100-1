"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Questions",
      [
        // Вопросы для темы "Почему коты правят миром"
        {
          theme_id: 1,
          name: "Какой секретный приказ коты передают друг другу во время мяукания?",
          answer: "Мяу",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 1,
          name: "Чем занимаются коты, когда смотрят в пустоту?",
          answer: "Мур-мур",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 1,
          name: "Как коты устраивают свои тайные вечеринки?",
          answer: "Никак",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 1,
          name: "Какова главная миссия котов в интернете?",
          answer: "Мемы",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 1,
          name: "Что делают коты, когда притворяются спящими?",
          answer: "Спят",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Вопросы для темы "Тайные жизни садовых гномов"
        {
          theme_id: 2,
          name: "Как садовые гномы проводят время, когда никто не смотрит?",
          answer: "Спят",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 2,
          name: "Какое любимое блюдо у всех садовых гномов?",
          answer: "Дошик",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 2,
          name: "Как садовые гномы выбирают своего лидера?",
          answer:
            "Тыыыыыы",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 2,
          name: "Какова основная причина ссор между садовыми гномами?",
          answer: "Рост",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 2,
          name: "Как садовые гномы общаются с домашними питомцами?",
          answer: "Танцем",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Вопросы для темы "Истории из жизни супергероев на пенсии"
        {
          theme_id: 3,
          name: "Как супергерой на пенсии проводит выходные?",
          answer: "Пьют лекарства",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 3,
          name: "Какой самый популярный курс в Университете Супергероев на пенсии?",
          answer: "Левитация",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 3,
          name: "Как супергерои на пенсии сохраняют форму?",
          answer: "никак ониж супергерои",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 3,
          name: "Какой главный предмет на обеде у супергероев на пенсии?",
          answer: "Суперкаши",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 3,
          name: "Как супергерои на пенсии выбирают новые костюмы?",
          answer: "По красоте",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Вопросы для темы "Приключения в мире пиццы"
        {
          theme_id: 4,
          name: "Что делает пицца, когда никто не смотрит?",
          answer: "Остывает",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 4,
          name: "Как называется самый известный супергерой в мире пиццы?",
          answer: "Капитан Моцарелла",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 4,
          name: "Как пицца справляется со стрессом?",
          answer: "Медитация",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 4,
          name: "Какие секретные ингредиенты используют пиццы для повышения своих сил?",
          answer: "Их нет",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 4,
          name: "Как пицца решает свои конфликты?",
          answer: "Кто вкуснее тот и победил",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Вопросы для темы "Загадочные события в офисной жизни"
        {
          theme_id: 5,
          name: "Кто на самом деле управляет всеми делами в офисе?",
          answer: "Марина",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 5,
          name: "Какое заклинание используют офисные работники, чтобы вызвать выходные?",
          answer: 'Пицца дэй"',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 5,
          name: "Как офисные работники сражаются с понедельником?",
          answer: 'Стендапом"',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 5,
          name: "Каков главный атрибут для успешных переговоров в офисе?",
          answer: "Лайк и подписка",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 5,
          name: "Какой самый эффективный способ убедить босса в своей правоте?",
          answer: "Выиграть в пинг понг",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
