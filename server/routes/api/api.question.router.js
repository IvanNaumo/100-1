const router = require('express').Router();
const { Question, User, Theme } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const themes = await Theme.findAll({ 
      include: { 
        model: Question 
      } ,
    });
    console.log(themes);
    res.json({ themes });
  } catch ({ message }) {
    res.json({ message });
  }
});

// router.get('/:index/theme/:theme_id', async (req, res) => {
//   try {
//     const { index, theme_id } = req.params;
//     const questions = await Question.findAll({ where: { theme_id } });
//     if (questions[index]) {
//       const html = res.renderComponent(Questions, {
//         question: questions[index],
//         index: Number(index) + 1,
//       });
//       res.send(html);
//     } else {
//       res.redirect('/theme');
//     }
//   } catch (error) {
//     console.log(error.message);
//   }
// });

router.post('/', async (req, res) => {
  console.log(res.locals.user);
  try {
    const user = await User.findOne({ where: { id: res.locals.user.id } });
    const { answer, id } = req.body;
    const question = await Question.findOne({ where: { id } });
    if (answer.toLowerCase() === question.answer.toLowerCase()) {
      console.log('1233');
      user.score = Number(user.score) + 100;
      await user.save();
      res.app.locals.user.score = user.score;
      res.json({ message: 'Правильный ответ' });
    } else {
      user.score = Number(user.score) - 100;
      await user.save();
       res.json(user.score);
      res.json({ message: `Не верный ответ ${question.answer}`, user });
    }
  } catch ({ message }) {
    console.log(message);
  }
});
module.exports = router;
