var express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const database = require("./database");
const firstRouter = require("./router/first.router");
var session = require("express-session");
const path = require("path");   //multer 

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use("/uploads",express.static("public"));
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); //multer

database();

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  })
);

app.use("/first", firstRouter);

app.listen(4000);
