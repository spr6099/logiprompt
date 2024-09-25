var express = require("express");
var router = express.Router();
var data = require("../database/database");
var mongodb = require("mongodb");

/* GET home page. */
router.get("/", function (req, res, next) {
  data.then((dbase) => {
    dbase
      .collection("form")
      .find()
      .toArray()
      .then((resu) => {
        // console.log(resu);
        res.render("form", { resu });
      });
  });
});

router.post("/", (req, res) => {
  let details = {
    firstname: req.body.fname,
    lastname: req.body.lname,
    email: req.body.email,
  };
  data.then((dbase) => {
    dbase
      .collection("form")
      .insertOne(details)
      .then((result) => {
        console.log(result);
      });
  });
  res.redirect("/form");
});

/* Delete */

router.get("/:id", (req, res) => {
  let delId = req.params.id;
  data.then((dbase) => {
    dbase
      .collection("form")
      .deleteOne({ _id: new mongodb.ObjectId(delId) })
      .then((result) => {
        console.log(result);
      });
  });
  res.redirect("/form")
});


module.exports = router;
