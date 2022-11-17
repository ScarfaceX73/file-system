const express = require("express");
const router = express.Router();
const filesModule = require("../modules/index");

router.get("/read", filesModule.readFile);

router.post("/write", filesModule.createFile);

module.exports = router;