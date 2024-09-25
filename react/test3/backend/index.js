const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const firstRouter = require("./router/first.router");
const fileRouter = require("./router/file.router");
const database = require("./database");
const fileUpload = require("express-fileupload");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
database();

app.use(express.static("public"));
app.use(fileUpload());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/index", firstRouter);
app.use("/indexFile", fileRouter);
app.listen(2000);
