var express = require("express");
var router = express.Router();
var database = require("../backend/database");
var mongodb = require("mongodb");

/* GET form page. */
router.get("/", function (req, res, next) {
  database.then((dbase) => {
    dbase
      .collection("forms")
      .find()
      .toArray()
      .then((resl) => {
        // console.log(resl);
        res.render("form", { resl });
      });
  });
});

/* POST form page. */
router.post("/", function (req, res, next) {
  let details = {
    email: req.body.email,
    name: req.body.name,
    district: req.body.district,
  };
  database.then((dbase) => {
    dbase
      .collection("forms")
      .insertOne(details)
      .then((res) => {
        // console.log(res);
      });
  });
  res.redirect("/form");
});

router.get("/:id", (req, res) => {
  let delId = req.params.id;
  // console.log("delId",delId);
  database.then((dbase) => {
    dbase
      .collection("forms")
      .deleteOne({ _id: new mongodb.ObjectId(delId) })
      .then((result) => {
        console.log(result);
      });
  });
  res.redirect("/form");
});

module.exports = router;
