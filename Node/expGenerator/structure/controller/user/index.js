var express = require('express');
var router = express.Router();
var controller= require('./controller')

/* GET home page. */
router.get('/',controller.indexpage); 
router.get('/register',controller.registerPage)
router.get('/login',controller.Loginpage)

module.exports = router;
