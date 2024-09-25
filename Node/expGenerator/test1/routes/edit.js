var express = require("express");
var router = express.Router();
var data = require("../database/database");
var mongodb = require("mongodb");

router.get("/:id", (req, res) => {
  let editId = req.params.id;
  data.then((dbase) => {
    dbase
      .collection("form")
      .findOne({ _id: new mongodb.ObjectId(editId) })
      .then((reslt) => {
        res.render("edit", { reslt });
        // console.log(reslt);
      });
  });
});

router.post("/:id", (req, res) => {
  let updtId = req.params.id;
  let detailss = {
    firstname: req.body.fname,
    lastname: req.body.lname,
    email: req.body.email,
  };
  data.then((dbase) => {
    dbase
      .collection("form")
      .updateOne({ _id: new mongodb.ObjectId(updtId) }, { $set: detailss })
      .then((resl) => {
        console.log(resl);
      });
  });
  res.redirect("/form");
});

module.exports = router;
