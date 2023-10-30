const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    score: Number,
    language: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("score", scoreSchema);
