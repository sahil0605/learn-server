const Score = require("../models/score");

exports.addScore = async (req, res) => {
  try {
    const user = req.user;
    const { score, language } = req.body;
    await Score.create({ userId: user._id, score, language });
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

exports.getScores = async (req, res) => {
  try {
    const testUser = req.user;
    const { language } = req.params;

    const allTest = await Score.find({
      userId: testUser._id,
      language,
    }).populate("testUser");

    return res.status(200).json({
      score: allTest,
    });
  } catch {
    return res.status(500).json({
      message: "Internal server Error",
    });
  }
};
