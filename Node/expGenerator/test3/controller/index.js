var express = require("express");
var router = express.Router();
var patient = require('./patient')
var doctor = require('./doctor')

router.use('/',patient)
router.use('/doctor',doctor)



module.exports = router;
