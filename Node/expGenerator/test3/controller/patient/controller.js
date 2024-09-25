var database = require("../../database/databse");
var mongodb = require("mongodb")

exports.patientIndex = (req, res) => {
  database.then((dbase) => {
    dbase
      .collection("formData")
      .find()
      .toArray()
      .then((formdata) => {
        // console.log(formdata);
        res.render("patient/home", { formdata });
      });
  });
};

exports.patientDelete = (req, res) => {
  let delId = req.params.id;
  database.then((dbase) => {
    dbase
      .collection("formData")
      .deleteOne({ _id: new mongodb.ObjectId(delId) })
      .then((result) => {
        res.redirect("/");
      });
  });
};
