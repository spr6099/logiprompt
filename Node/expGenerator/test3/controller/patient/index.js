var express = require("express");
var router = express.Router();
var database = require("../../database/databse");
var controller = require("./controller");
var mongodb = require("mongodb");

router.get("/", controller.patientIndex);

router.post("/", (req, res) => {
  let datas = {
    name: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    phNo: req.body.phno,
  };
  database.then((dbase) => {
    dbase
      .collection("formData")
      .insertOne(datas)
      .then((result) => {
        // console.log(result);
      });
    res.redirect("/");
  });
});

      // Delete
router.get("/delete/:id",controller.patientDelete);

//          Edit
router.get("/edit/:id", (req, res) => {
  let editId = req.params.id;
  database.then((dbase) => {
    dbase
      .collection("formData")
      .findOne({ _id: new mongodb.ObjectId(editId) })
      .then((editData) => {
        res.render("patient/edit", { editData });
      });
  });
});
router.post("/edit/:id", (req, res) => {
  let updateId = req.params.id;
  let updatedatas = {
    name: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    phNo: req.body.phno,
  };
  database.then((dbase) => {
    dbase
      .collection("formData")
      .updateOne({ _id: new mongodb.ObjectId(updateId) }, { $set: updatedatas })
      .then((reslt) => {});
  });
  res.redirect("/");
});

module.exports = router;
