const db = require("../models");

const parentPostQuery = async(obj) => {
    return await db.Parents.create(obj);
}

module.exports={
    parentPostQuery,
};

