const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  id: Number,
  question: String,
  imageUrl: String,
  answers: [
    {
      text: String,
      isCorrect: Boolean
    }
  ],
  topic: String
});

module.exports = mongoose.model('Question', questionSchema);
