const express = require("express");
const router = express.Router();
const { createQuestion, getQuestions } = require("../controllers/question");
const authentication = require("../middleware/auth");

router.post("/createQuestion", authentication, createQuestion);
router.post("/getQuestion", getQuestions);

module.exports = router;
