require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Подключение к MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Роуты
app.use('/api/auth', require('./routes/auth'));

// Запуск сервера
const PORT = process.env.PORT || 7777;
app.listen(PORT, () => console.log(`🚀 Server gestart op http://localhost:${PORT}`));
