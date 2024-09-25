  const { signup, product } = require("../model/first.model");

exports.FirstIndex = (req, res) => {
  res.json("success mern");
};
exports.register = (req, res) => {
  res.json("registerrrrrrr");
};

exports.postregister = async (req, res) => {
  try {
    await signup.create(req.body);
    res.json(" success");
  } catch (err) {
    console.error(err);
  }
  // let datas = {
  //   name: req.body.name,
  //   contact: req.body.contact,
  //   email: req.body.email,
  //   address: req.body.address,
  // };
};

exports.product = async (req, res) => {
  try {
    await product.create(req.body);
    res.json(" success");
  } catch (err) {
    console.log(err);
  }
};

exports.GetProduct = async (req, res) => {
  try {
    let productData = await product.find();
    res.json(productData);
    // console.log(productData);
  } catch (err) {
    console.log(err);
  }
};

exports.delete = async (req, res) => {
  try {
    await product.findByIdAndDelete(req.body.Delid);
    res.json("deleted");
  } catch (err) {
    console.log(err);
  }
};

exports.edit = async (req, res) => {
  // let editId = req.body.id;
  try {
    let products = await product.findById(req.body.id);
    res.json(products);
    // console.log("products", products);
  } catch (err) {
    console.log(err);
  }
};

exports.update = async (req, res) => {
  // let data = {
  //   product: req.body.Uproduct,
  //   category: req.body.Ucategory,
  //   price: req.body.Uprice,
  //   description: req.body.Udescription,
  // };
  try {
    let updateProducts = await product.findByIdAndUpdate(req.body.id,req.body);
    res.json("updateProducts");
    console.log(updateProducts);
    
  } catch (err) {
    console.log(err);
  }
};
