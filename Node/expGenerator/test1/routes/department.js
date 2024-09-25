var express = require("express");
var router = express.Router();
var data = require("../database/database");
// var mongodb = require("mongodb");

router.get("/", (req, res) => {
  data.then(async (dbase) => {
    const resl = await dbase.collection("form").find().toArray();
    const departDetails = await dbase
      .collection("department")
      .aggregate([
        { $addFields: { applicantId: { $toObjectId: "$applicantName" } } },
        {
          $lookup: {
            from: "form",
            localField: "applicantId",
            foreignField: "_id",
            as: "newForm",
          },
        },
        { $unwind: "$newForm" },
      ])
      .toArray();

    console.log(departDetails);

    res.render("department", { resl, departDetails });
  });
});

router.post("/", (req, res) => {
  let datas = {
    department: req.body.department,
    job: req.body.job,
    applicantName: req.body.applicantName,
  };
  data.then((dbase) => {
    dbase
      .collection("department")
      .insertOne(datas)
      .then((reslt) => {
        console.log(reslt);
        res.redirect("/department");
      });
  });
});

module.exports = router;
