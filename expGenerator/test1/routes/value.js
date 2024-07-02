var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var arr = [1,2,3,4]
  res.render('value',{name:'ammu',age:8,arr});
});


module.exports = router;
