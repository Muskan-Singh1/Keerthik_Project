const express = require("express");
const router = express.Router();
const ctrl = require("../controller/parent");


router.post("/post/parent/data",ctrl.parentPostData);


module.exports = router;
