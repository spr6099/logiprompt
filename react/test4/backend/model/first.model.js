const mongoose = require("mongoose");

const RegisterSchema = mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});
const registerData = mongoose.model("register", RegisterSchema);

const LoginSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  userStatus: { type: Number },
  regId: { type: mongoose.Schema.Types.ObjectId, ref: "register" },
  createdAt: { type: Date, default: Date.now() },
});
const LoginData = mongoose.model("Login", LoginSchema);

const FileSchema = mongoose.Schema({
  image: [String],
  name: [String],

  createdAt: { type: Date, default: Date.now() },
});
const fileData = mongoose.model("Files", FileSchema);
module.exports = { registerData, LoginData, fileData };
