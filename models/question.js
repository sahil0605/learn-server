const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    language: String,
    question: String,
    options: [String],
    answer: String,
    difficulty: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("questions", questionSchema);
