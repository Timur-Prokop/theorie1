// const mongoose = require('mongoose');

// const questionSchema = new mongoose.Schema({
//   id: Number,
//   question: String,
//   imageUrl: String,
//   answers: [
//     {
//       text: String,
//       isCorrect: Boolean
//     }
//   ],
//   Why: String,
//   topic: String
// });

// module.exports = mongoose.model('Question', questionSchema);


const mongoose = require('mongoose');

const translationSchema = new mongoose.Schema({
  question: String,
  answers: [String],
  why: String
}, { _id: false });

const answerSchema = new mongoose.Schema({
  text: String,
  isCorrect: Boolean
}, { _id: false });

const questionSchema = new mongoose.Schema({
  id: Number,
  question: String,            // оригинал — нидерландский
  imageUrl: String,
  answers: [answerSchema],
  why: String,
  topic: String,
  ruTranslation: translationSchema,
  enTranslation: translationSchema
});

module.exports = mongoose.model('Question', questionSchema);
