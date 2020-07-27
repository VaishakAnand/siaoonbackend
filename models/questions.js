const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optionSchema = new Schema({
    optionA: String,
    optionB: String,
    optionC: String,
    optionD: String,
});

const questionSchema = new Schema({
    question: { type: String, unique: true },
    options: optionSchema,
    correct_answer: String,
    topic : String,
    explanation: String
})

module.exports = mongoose.model('Question', questionSchema);