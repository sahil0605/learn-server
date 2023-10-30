const { Router } = require("express");
const router = Router();
const germenModel = require("../models/question");
const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const user = userModel.findOne({ email });
  // if(user){
  //   console.log("user already exist");
  //   res.status(500).json({ error: 'user already exist' });
  //   return ;
  // }
  const hashedPassword = await bcrypt.hash(password, 10);
  userModel
    .create({ name, email, password: hashedPassword })
    .then((data) => {
      console.log("saved");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
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
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Sign-in failed" });
  }
});
