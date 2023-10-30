const express = require("express");
const router = express.Router();
const { createQuestion } = require("../controllers/question");
const authentication = require("../middleware/auth");

router.post("/createQuestion", authentication, createQuestion);

module.exports = router;
