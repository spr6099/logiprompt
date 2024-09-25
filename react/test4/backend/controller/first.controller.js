const { registerData, LoginData, fileData } = require("../model/first.model");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

exports.register = async (req, res) => {
  try {
    let regdata = {
      name: req.body.name,
      address: req.body.address,
    };

    let newReg = await registerData.create(regdata);
    let logdata = {
      email: req.body.email,
      password: req.body.password,
      userStatus: req.body.userStatus,
      regId: newReg._id,
    };
    await LoginData.create(logdata);
    res.json("success");
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res) => {
  try {
    let logDatas = {
      email: req.body.mail,
      password: req.body.password,
    };
    console.log(logDatas);

    let dat = await LoginData.findOne({ email: logDatas.email });
    if (dat) {
      dat.password == logDatas.password;

      if (dat.userStatus == 0 || dat.userStatus == 1) {
        req.session.logs = dat;
        res.json(dat);
      } else {
        res.json("invalid session");
      }
    } else {
      console.log("incorrect Password");
    }
  } catch (err) {
    console.log(err);
  }
};

exports.view = async (req, res) => {
  try {
    let data = await LoginData.find().populate("regId");
    console.log(data);

    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

exports.files = (req, res) => {
  upload.array("files")(req, res, async (err) => {
    const fileNames = req.files.map((file) => file.originalname);
    const filepaths = req.files.map((file) => `/uploads/${file.filename}`);
    console.log("req.files", req.files);

    try {
      const newFileRecord = new fileData({
        image: fileNames,
        name: filepaths,
      });
      await newFileRecord.save();
      res.json({
        message: "Files uploaded and data saved successfully",
        filepaths,
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to save file data" });
    }
  });
};

exports.getfiles=(req,res)=>{
console.log("getFiles");

}