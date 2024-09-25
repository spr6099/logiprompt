var mongodb = require("mongodb");
var database = require("../../database/databse");

exports.doctorHome = (req, res) => {
  database.then((dbase) => {
    dbase
      .collection("doctorData")
      .find()
      .toArray()
      .then((docData) => {
        res.render("doctor/home", { docData });
      });
  });
};

exports.doctorDelete = (req, res) => {
  let delId = req.params.id;
  database.then((dbase) => {
    dbase
      .collection("doctorData")
      .deleteOne({ _id: new mongodb.ObjectId(delId) })
      .then((reslt) => {
        res.redirect("/doctor");
      });
  });
};



exports.editDoctor = (req, res) => {
  let edit_id = req.params.id;
  // console.log(edit_id);
  database.then((db) => {
    db.collection("doctorData")
      .findOne({ _id: new mongodb.ObjectId(edit_id) })
      .then((editData) => {
        console.log(editData);
        res.render("doctor/edit", { editData });
      });
  });
};
