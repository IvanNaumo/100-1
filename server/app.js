require('@babel/register');

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const path = require('path');
const indexRouter = require('./routes/index.router');
const { verifyAccessToken } = require('./middleware/verifyJWT');
const ssr = require('./middleware/ssr');

app.use(cookieParser());
app.use(express.urlencoded({ extended: 'true' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(ssr);
app.use(verifyAccessToken);

app.use('/', indexRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Сервер запустился на ${PORT}`);
});
//