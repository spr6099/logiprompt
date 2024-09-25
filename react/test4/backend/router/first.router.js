var express = require("express");
var router = express.Router();
const FirstController = require("../controller/first.controller");

router.post("/register", FirstController.register);
router.post("/login", FirstController.login);
router.get("/view", FirstController.view);
router.post("/files",FirstController.files)
router.get("/getFiles",FirstController.getfiles)

module.exports = router;
