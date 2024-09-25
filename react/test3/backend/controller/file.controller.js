const { productFile } = require("../model/file.model");

exports.productFile = async (req, res) => {
  let datas = {
    product: req.body.product,
    category: req.body.category,
    price: req.body.price,
    description: req.body.description,
    image: req.files.image.name,
  };
  // console.log(datas);
  try {
    let fileUp = req.files.image;
    await fileUp.mv("public/productImages/" + datas.image);
    await productFile.create(datas);
    res.json("success");
  } catch (err) {
    console.log(err);
  }
};

exports.getProductFile = async (req, res) => {
  try {
    let data = await productFile.find();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

exports.delete = async (req, res) => {
  try {
    await productFile.findByIdAndDelete(req.body.Delid);
    res.json("deleted");
  } catch (err) {
    console.log(err);
  }
};

exports.edit = async (req, res) => {
  try {
    let data = await productFile.findById(req.body.id);
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (req, res) => {
  let datas = "";
  // let id = req.body.id;
  try {
    if (req.files?.image) {
      datas = {
        product: req.body.product,
        category: req.body.category,
        price: req.body.price,
        description: req.body.description,
        image: req.files.image.name,
      };
      const fileUp = req.files.image;
      fileUp.mv("public/productImages/" + datas.image);
    } else {
      datas = {
        product: req.body.product,
        category: req.body.category,
        price: req.body.price,
        description: req.body.description,
      };
    }
    console.log("qqqq", datas);
    console.log("id",req.body);

    let updateProducts = await productFile.findByIdAndUpdate(
      req.body.id,
      datas
    );
    res.json("updateProducts");
    // console.log(updateProducts);
  } catch (err) {
    console.log(err);
  }
};
