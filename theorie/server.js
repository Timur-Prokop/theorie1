require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Статические файлы (test.html, стили и т.п.)
app.use(express.static(path.join(__dirname, 'public')));

// Подключение к MongoDB
mongoose.connect(process.env.MONGO_URI)

.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Модель Question
const Question = require('./models_Question');

// 🔥 Роут: Получить 20 случайных вопросов
app.get('/api/questions', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    console.error('❌ Ошибка при получении вопросов:', err);
    res.status(500).json({ error: 'Ошибка при получении вопросов' });
  }
});

// Дополнительные роуты (например, auth)
app.use('/api/auth', require('./routes/auth'));

// Старт сервера
const PORT = process.env.PORT || 7777;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server gestart op портe ${PORT}`);
});


