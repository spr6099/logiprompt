const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

let mongodb = require("mongodb").MongoClient;
let client = new mongodb("mongodb://localhost:27017");

app.get("/", (req, res) => {
  res.json(" Hello, Node!");
});

app.post("/form", (req, res) => {
  let data = {
    fname: req.body.first,
    lname: req.body.lname,
    email: req.body.password,
    password: req.body.password,
    contact: req.body.contact,
  };
  client
    .connect()
    .then((dbase) => {
      let databse = dbase.db("test2");
      databse
        .collection("logdata")
        .insertOne(data)
        .then((result) => {
          console.log(result);
          res.json("success");
        });
    })
    .catch((err) => console.log(err));
});

app.listen(4000, () => {
  console.log(`Server is listening at http://localhost:4000`);
});
