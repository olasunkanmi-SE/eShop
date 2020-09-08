const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res) => res.send("hello"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
