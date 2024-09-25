var express = require("express");
var router = express.Router();
var firstController = require("../controller/first.controller");
router.get("/first", firstController.FirstIndex);

router.get("/register", firstController.register);
router.post("/postregister", firstController.postregister);
router.post("/products", firstController.product);
router.get("/GetProduct", firstController.GetProduct);
router.post("/productDelete", firstController.delete);
router.post("/editProduct", firstController.edit);
router.post("/updateProduct", firstController.update);
module.exports = router;
