var express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const database = require("./backend");
const mongodb = require("mongodb");
const fileUpload = require("express-fileupload");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(fileUpload());
app.use(express.static("image"));

app.get("/view", (req, res) => {
  database.then((dbase) => {
    dbase
      .collection("signupdata")
      .find()
      .toArray()
      .then((result) => {
        // console.log("result", result);
        res.json(result);
      });
  });
});

app.post("/", (req, res) => {
  let signupData = {
    name: req.body.names,
    contact: req.body.number,
    email: req.body.email,
    address: req.body.address,
  };
  // console.log(signupData);
  database.then((dbase) => {
    dbase
      .collection("signupdata")
      .insertOne(signupData)
      .then((result) => {
        // console.log("result", result);
        res.json("success");
      });
  });
});

app.post("/delete", (req, res) => {
  let delId = req.body.delId;
  console.log("delIdFirst", delId);

  database.then((dbase) => {
    dbase
      .collection("signupdata")
      .deleteOne({ _id: new mongodb.ObjectId(delId) })
      .then((result) => {
        console.log("deleteResult", result);
        res.json("deleted");
      });
  });
});

app.post("/edit", (req, res) => {
  let editId = req.body.id;
  database.then((dbase) => {
    dbase
      .collection("signupdata")
      .findOne({ _id: new mongodb.ObjectId(editId) })
      .then((result) => {
        // console.log(result);
        res.json(result);
      });
  });
});

app.post("/update", (req, res) => {
  let updtId = req.body.id;
  let upDatas = {
    name: req.body.Ename,
    contact: req.body.Econtact,
    email: req.body.Eemail,
    address: req.body.Eaddress,
  };
  database.then((dbase) => {
    dbase
      .collection("signupdata")
      .updateOne({ _id: new mongodb.ObjectId(updtId) }, { $set: upDatas })
      .then((result) => {
        // res.redirect("/")
        // console.log(result);
        res.json(result);
      });
  });

  // console.log("updtId", updtId);
});

app.post("/fileUpload", (req, res) => {
  let datas = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    image: req.files.image.name,
  };
  // console.log("fileUpload", datas);

  database.then((dbase) => {
    dbase
      .collection("fileUpload")
      .insertOne(datas)
      .then((result) => {
        const fileUp = req.files.image;
        fileUp.mv("image/fileUpload/" + datas.image).then((result) => {
          console.log(result);
        });
        console.log("fileUpload", "success");
        res.json(result);
      });
  });
});

app.get("/fileUploadView", (req, res) => {
  database.then((dbase) => {
    dbase
      .collection("fileUpload")
      .find()
      .toArray()
      .then((result) => {
        res.json(result);
        // console.log("fileUploadView", result);
      });
  });
});

app.post("/fileDelete", (req, res) => {
  let delId = req.body.delId;
  database.then((dbase) => {
    dbase
      .collection("fileUpload")
      .deleteOne({ _id: new mongodb.ObjectId(delId) })
      .then((result) => {
        res.json(result);
      });
  });
});

app.post("/editFile", (req, res) => {
  let editId = req.body.id;
  // console.log("editId", editId);

  database.then((dbase) => {
    dbase
      .collection("fileUpload")
      .findOne({ _id: new mongodb.ObjectId(editId) })
      .then((result) => {
        res.json(result);
      });
  });
});

app.post("/updateFile", (req, res) => {
  let updateId = req.body.id;
  // console.log("updateId", updateId);

  let datas = " ";

  if (req.files?.image) {
    datas = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      image: req.files.image.name,
    };
    const fileup = req.files.image;
    fileup.mv("image/fileUpload/" + datas.image);
  } else {
    datas = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
  }
  database.then((dbase) => {
    dbase
      .collection("fileUpload")
      .updateOne({ _id: new mongodb.ObjectId(updateId) }, { $set: datas })
      .then((result) => {
        res.json(result);
        // console.log("/updateFile", result);
      });
  });
  // console.log(datas);
});
app.listen(3500);
