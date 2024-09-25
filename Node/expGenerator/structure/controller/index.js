var express = require("express");
var router = express.Router();
var users = require("./user");
var admin = require("./admin");

router.use("/", users);
router.use("/admin", admin);

module.exports = router;
