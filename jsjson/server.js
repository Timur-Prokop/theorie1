const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(__dirname));

const questions = require('./upload.js');

app.get('/api/questions', (req, res) => {
  res.json(questions);
});

const PORT = process.env.PORT || 7777;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server gestart on the port: ${PORT}`);
});


