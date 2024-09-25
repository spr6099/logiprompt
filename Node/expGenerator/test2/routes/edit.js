var express = require("express");
var router = express.Router();
var database = require("../backend/database");
var mongodb = require("mongodb");

/* GET edit page. */
router.get("/:id", function (req, res, next) {
  let editId = req.params.id;
  database.then((dbas) => {
    dbas  
      .collection("forms")
      .findOne({ _id: new mongodb.ObjectId(editId) })
      .then((resu) => {
        res.render("edit", { resu });
      });
  });
});

router.post("/:id", (req, res) => {
  let upId = req.params.id;
  let details = {
    email: req.body.email,
    name: req.body.name,
    district: req.body.district,
  };
  database.then((dbase) => {
    dbase
      .collection("forms")
      .updateOne({ _id: new mongodb.ObjectId(upId) }, { $set: details })
      .then((res) => {
        console.log(res);
      });
  });
  res.redirect("/form");
});

module.exports = router;
