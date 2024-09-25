const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("jn");
});

app.post("/signup", (req, res) => {
  let signupData = {
    name: req.body.names,
    contact: req.body.number,
  };
  console.log(signupData);
  
});

app.listen(3500);
