const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes/allRoutes");
require("dotenv").config();

const cors = require("cors");

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DataBase connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/v1/question", require("./routes/question"));
app.use("/api/v1/score", require("./routes/score"));
app.use("/api/v1/user", require("./routes/user"));

app.listen(PORT, () => {
  console.log("server started " + PORT);
});
