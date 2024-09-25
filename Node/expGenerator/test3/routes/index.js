var express = require("express");
var router = express.Router();
var controller = require("../controller");
// var database = require("../database/databse");
/* GET home page. */
router.use("/", controller);

module.exports = router;
