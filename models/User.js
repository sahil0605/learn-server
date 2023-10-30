const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    proficientLanguage: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
