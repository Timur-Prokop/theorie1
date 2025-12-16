const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// CORS + JSON
app.use(cors());
app.use(express.json());

app.use(express.static(__dirname));

// Локальный массив вопросов (файл рядом с сервером)
const questions = require('./upload.js');

// Роут: получить все вопросы (frontend делает fetch('/api/questions'))
app.get('/api/questions', (req, res) => {
  res.json(questions);
});

// Старт сервера
const PORT = process.env.PORT || 7777;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server gestart op портe ${PORT}`);
});
