require("express-async-errors");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const error = require("./server/middlewares/error");

//connect to database
mongoose
  .connect("mongodb://localhost/shop")
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log(err));

const app = express();

app.get("/", async (req, res) => {
  try {
    res.send("hello");
  } catch (ex) {
    next(ex);
  }
});

//Parse the body of a request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(error);

// Assign port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
