var express = require("express");
var router = express.Router();
var controller = require("./controller");
var database = require("../../database/databse");
var mongodb = require("mongodb");

router.get("/", controller.doctorHome);

router.post("/", (req, res) => {
  let doctorDatas = {
    docId: req.body.doctorId,
    docName: req.body.doctorName,
    docImage: req.files.image.name,
  };
  console.log(doctorDatas.docImage);
  database.then((dbase) => {
    dbase
      .collection("doctorData")
      .insertOne(doctorDatas)
      .then((reslt) => {
        const fileUp = req.files.image;
        fileUp.mv("public/images/" + doctorDatas.docImage).then((resltImg) => {
          console.log(resltImg);
        });
        res.redirect("/doctor");
      });
  });
});

router.get("/delete/:id", controller.doctorDelete);

// Edit
router.post("/edit/:id", (req, res) => {
  let updateId = req.params.id;
  let updateDatas = {
    docId: req.body.doctorId,
    docName: req.body.doctorName,
    docImage: req.files?.image.name,
  };

  let newData = "";
  if (req.files?.image) {
    newData = {
      docId: updateDatas.docId,
      docName: updateDatas.docName,
      docImage: updateDatas.docImage,
    };
    const fileup = req.files.image;
    fileup.mv("public/images/" + updateDatas.docImage).then((resltImg) => {});
  } else {
    newData = {
      docId: updateDatas.docId,
      docName: updateDatas.docName,
    };
  }
  database.then((dbase) => {
    dbase
      .collection("doctorData")
      .updateOne({ _id: new mongodb.ObjectId(updateId) }, { $set: newData });
    res.redirect("/doctor");
  });
});

router.get("/edit/:id", controller.editDoctor);

module.exports = router;
