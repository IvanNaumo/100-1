const router = require('express').Router();


const apiQuestionsRouter = require('./api/api.question.router');


router.use('/api/questions', apiQuestionsRouter);

// router.use('/', );

module.exports = router;
