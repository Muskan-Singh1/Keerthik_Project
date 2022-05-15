const db = require("../models");

const studentPostQuery = async(obj1) => {
    return await db.students.create(obj1);
}

const getAllStudentQuery = async()=>{
    return await db.students.findAll();
}

module.exports={
    studentPostQuery,
    getAllStudentQuery
};




