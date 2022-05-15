const db = require("../models");

const parentPostQuery = async(obj) => {
    return await db.Parents.create(obj);
}

const getAllParentQuery = async()=>{
    return await db.Parents.findAll();
}


module.exports={
    parentPostQuery,
    getAllParentQuery
};

