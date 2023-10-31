const express = require("express");
const router = express.Router();
const { createQuestion, getQuestions } = require("../controllers/question");
const authentication = require("../middleware/auth");

router.post("/createQuestion", createQuestion);
router.post("/getQuestion", authentication, getQuestions);

module.exports = router;
