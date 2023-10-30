const express = require("express");
const router = express.Router();
const { addScore, getScores } = require("../controllers/score");
const authentication = require("../middleware/auth");

router.post("/addScore", authentication, addScore);
router.post("/getScores/:language", authentication, getScores);

module.exports = router;
