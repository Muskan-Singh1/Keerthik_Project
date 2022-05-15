const express = require("express");
const router = express.Router();
const ctrl = require("../controller/student");


router.post("/post/data",ctrl.studentPostData);

router.get("/get/all/student/data",ctrl.getAllStudentData);


module.exports = router;



