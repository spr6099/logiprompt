var express = require("express");
var router = express.Router();
var database = require("../backend/database");
var mongodb = require("mongodb");

router.get("/", (req, res) => {
  database.then(async (dbase) => {
    const formdb = await dbase.collection("forms").find().toArray();
    const deprtmnt = await dbase
      .collection("department")
      .aggregate([
        { $addFields: { applicantsId: { $toObjectId: "$applicantName" } } },
        {
          $lookup: {
            from: "forms",
            localField: "applicantsId",
            foreignField: "_id",
            as: "lookupDatas",
          },
        },
        { $unwind: "$lookupDatas" },
      ])
      .toArray();
    // console.log(deprtmnt);
    res.render("department", { formdb, deprtmnt });
  });
});

router.post("/", (req, res) => {
  let datas = {
    department: req.body.department,
    job: req.body.job,
    applicantName: req.body.applicantName,
  };
  database.then((dbase) => {
    dbase
      .collection("department")
      .insertOne(datas)
      .then((result) => {});
  });
  res.redirect("/department");
});

module.exports = router;
