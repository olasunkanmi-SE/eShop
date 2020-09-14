const config = require("config");
require("express-async-errors");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const error = require("./server/middlewares/error");
const morgan = require("morgan");
const winston = require("./server/config/winston");
const auth = require("./server/routes/api/auth");
const user = require("./server/routes/api/user");

//connect to database
mongoose
  .connect("mongodb://localhost/shop")
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log(err));

const app = express();

//Parse the body of a request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Specify API locations
app.use("/api/login", auth);
app.use("/api/users", user);

//Routes error handling and logging
app.use(error);
app.use(morgan("combined", { stream: winston.stream }));

// Assign port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
