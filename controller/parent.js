const query = require("../queries/parent")

const parentPostData = async function(req,res){
    try{
        const body = req.body;
        const obj = {
            parentName:body.parentName,
            class:body.class,
            rollNumber:body.rollNumber,
            mobileNo:body.mobileNo,
            password:body.password    
        }
        const data = await query.parentPostQuery(obj);
        return res.send(data)
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
}


const getAllParentData =async function(req,res){
    try{
        const result = await query.getAllParentQuery();
        return res.send(result);
    }
    catch(err){
        console.log(err);
        res.send(err)
    }
}




module.exports={
    parentPostData,
    getAllParentData
};


