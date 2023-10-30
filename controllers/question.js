const Question = require("../models/question");

exports.createQuestion = async (req, res) => {
  try {
    const { language, question, answer, difficulty, options } =
      req.body.formData;

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
  }
};

exports.getQuestions = async (req, res) => {
  try {
    const { language, difficulty } = req.body;

    const sampledQuestions = await Question.aggregate([
      { $match: { language, difficulty } },
      { $sample: { size: 10 } },
    ]);

    return res.status(200).json({
      success: true,
      questions: sampledQuestions,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};
