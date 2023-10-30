const Question = require("../models/question");

exports.createQuestion = async (req, res) => {
  try {
    const user = req.user;
    const { language, question, answer, difficulty, options } = req.body;

    await Question.create({ language, question, answer, difficulty, options });

    return res.status(200).json({
      success: true,
      message: "question created succesfully!",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error,
    });
    b;
  }
};
