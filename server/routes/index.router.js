const router = require('express').Router();

const apiAuthRouter = require('./api/api.auth.router');
const apiQuestionsRouter = require('./api/api.question.router');

router.use('/api/questions', apiQuestionsRouter);
router.use('/api/auth', apiAuthRouter);



module.exports = router;
