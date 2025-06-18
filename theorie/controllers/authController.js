const User = require('../Users'); // или '../models/User' если у тебя другая папка
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// ✅ Регистрация
exports.register = async (req, res) => {
  const { login, password, confirmPassword } = req.body;

  if (!login || !password || !confirmPassword) {
    return res.status(400).json({ msg: 'Alle velden zijn verplicht' }); // Все поля обязательны
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ msg: 'Wachtwoorden komen niet overeen' }); // Пароли не совпадают
  }

  try {
    const existingUser = await User.findOne({ login });
    if (existingUser) {
      return res.status(400).json({ msg: 'Login bestaat al' }); // Такой пользователь уже есть
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ login, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ msg: 'Gebruiker geregistreerd' }); // Успешно зарегистрирован
  } catch (err) {
    console.error('❌ Fout bij registratie:', err);
    res.status(500).json({ msg: 'Serverfout' });
  }
};

// ✅ Авторизация
exports.login = async (req, res) => {
  const { login, password } = req.body;

  if (!login || !password) {
    return res.status(400).json({ msg: 'Login en wachtwoord zijn verplicht' }); // Поля обязательны
  }

  try {
    const user = await User.findOne({ login });
    if (!user) return res.status(400).json({ msg: 'Gebruiker niet gevonden' }); // Пользователь не найден

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Onjuist wachtwoord' }); // Пароль неверный

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ msg: 'Ingelogd', token }); // Успешный логин
  } catch (err) {
    console.error('❌ Fout bij login:', err);
    res.status(500).json({ msg: 'Serverfout' });
  }
};
