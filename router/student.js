const express = require("express");
const router = express.Router();
const ctrl = require("../controller/student");


router.post("/post/data",ctrl.studentPostData);


module.exports = router;



