var express = require("express");
var router = express.Router();
var fileController = require("../controller/file.controller");

router.post("/productFile", fileController.productFile);
router.get("/getProductFile", fileController.getProductFile);
router.post("/productDelete", fileController.delete);
router.post("/productEdit", fileController.edit);
router.post("/productUpdate", fileController.update);


module.exports = router;
