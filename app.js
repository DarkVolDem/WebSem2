const express = require('express');
const app = express();
const router = require('./main');

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
  });