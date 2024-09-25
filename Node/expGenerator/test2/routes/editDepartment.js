var express = require("express");
var router = express.Router();
var database = require("../backend/database");
var mongodb = require("mongodb");

router.get("/:id", (req, res) => {
  let depId = req.params.id;

  database.then(async (dbas) => {
    const department = await dbas
      .collection("department")
      .findOne({ _id: new mongodb.ObjectId(depId) });
    const forms = await dbas.collection("forms").find().toArray();

    res.render("editDepartment", { department, forms });
  });
});

router.post("/:id", (req, res) => {
  let depId = req.params.id;
  console.log("depid", depId);
  let details = {
    department: req.body.department,
    job: req.body.job,
    applicantName:req.body.applicantName
  };
  database.then((dbase) => {
    dbase
      .collection("department")
      .updateOne({ _id: new mongodb.ObjectId(depId) }, { $set: details })
      .then((res) => {
        console.log(res);
      });
  });
  res.redirect("/department");
});

module.exports = router;
