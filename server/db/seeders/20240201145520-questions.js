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
          answer: "Планы по захвату кресла хозяина",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 1,
          name: "Чем занимаются коты, когда смотрят в пустоту?",
          answer: "Обсуждают котировки на рынке кошачьего корма",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 1,
          name: "Как коты устраивают свои тайные вечеринки?",
          answer: "Переключают режим лазерного указки на дискотечный",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 1,
          name: "Какова главная миссия котов в интернете?",
          answer: "Захватить все мемы",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 1,
          name: "Что делают коты, когда притворяются спящими?",
          answer: "Планируют, как захватить мир после обеда",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Вопросы для темы "Тайные жизни садовых гномов"
        {
          theme_id: 2,
          name: "Как садовые гномы проводят время, когда никто не смотрит?",
          answer: "Устраивают турниры по мини-гольфу",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 2,
          name: "Какое любимое блюдо у всех садовых гномов?",
          answer: "Гномический пирог с ягодной начинкой",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 2,
          name: "Как садовые гномы выбирают своего лидера?",
          answer:
            "Соревнование в скрытности - кто дольше останется незамеченным",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 2,
          name: "Какова основная причина ссор между садовыми гномами?",
          answer: "Конкуренция за лучшую газонную траву",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 2,
          name: "Как садовые гномы общаются с домашними питомцами?",
          answer: "Через письма, оставленные под камнями",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Вопросы для темы "Истории из жизни супергероев на пенсии"
        {
          theme_id: 3,
          name: "Как супергерой на пенсии проводит выходные?",
          answer: "Пытается поймать удаленный пульт без использования суперсил",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 3,
          name: "Какой самый популярный курс в Университете Супергероев на пенсии?",
          answer: "Тайна вязания на спицах и крючком",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 3,
          name: "Как супергерои на пенсии сохраняют форму?",
          answer: "Тренировки по поднятию телевизионного пульта",
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
          answer: "По самому удобному доступу к карманам для очков",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Вопросы для темы "Приключения в мире пиццы"
        {
          theme_id: 4,
          name: "Что делает пицца, когда никто не смотрит?",
          answer: "Устраивает танцевальные батлы с роллами",
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
          answer: "Медитация в печи",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 4,
          name: "Какие секретные ингредиенты используют пиццы для повышения своих сил?",
          answer: "Магические специи из неведомого края",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 4,
          name: "Как пицца решает свои конфликты?",
          answer: "Дуэль на вилках",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Вопросы для темы "Загадочные события в офисной жизни"
        {
          theme_id: 5,
          name: "Кто на самом деле управляет всеми делами в офисе?",
          answer: "Машина кофе, подключенная к искусственному интеллекту",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 5,
          name: "Какое заклинание используют офисные работники, чтобы вызвать выходные?",
          answer: 'Формула "Ctrl+Alt+Диван"',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 5,
          name: "Как офисные работники сражаются с понедельником?",
          answer: 'Магическим зельем под названием "Кофе"',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 5,
          name: "Каков главный атрибут для успешных переговоров в офисе?",
          answer: "Магический мячик для стресса",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          theme_id: 5,
          name: "Какой самый эффективный способ убедить босса в своей правоте?",
          answer: "Диаграммы, составленные феями данных",
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
