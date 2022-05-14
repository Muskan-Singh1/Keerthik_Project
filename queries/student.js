const db = require("../models");

const studentPostQuery = async(obj1) => {
    return await db.students.create(obj1);
}

module.exports={
    studentPostQuery,
};




