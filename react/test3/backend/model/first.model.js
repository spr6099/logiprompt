const mongoose = require("mongoose");

const regSchema = mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});
const signup = mongoose.model("signup", regSchema);

const productSchema = mongoose.Schema({
  product: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const product = mongoose.model("products", productSchema);



module.exports = { signup, product };
