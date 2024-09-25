const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  product: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const productFile = mongoose.model("prodFile", productSchema);

module.exports = { productFile };
