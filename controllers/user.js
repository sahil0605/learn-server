const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = User.findOne({ email });
  if (user) {
    res.status(500).json({
      message: "user already exist",
    });
    return;
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  User.create({ name, email, password: hashedPassword })
    .then((data) => {
      console.log("saved");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ error: "Invalid email or password" });
      return;
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(401).json({ error: "Invalid email or password" });
      return;
    }
    // Create and send a JWT token
    const token = jwt.sign({ userId: user._id }, "secret_key", {
      expiresIn: "1h",
    });

    return res.status(200).json({
      success: true,
      token,
    });
  } catch (error) {
    return res.status(500).json({ error: "Sign-in failed" });
  }
};
