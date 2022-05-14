const query = require("../queries/student")

const studentPostData = async function(req,res){
    try{
        const body = req.body;
        const obj1 = {
            studentName:body.studentName,
            class:body.class,
            rollNumber:body.rollNumber,
            mobileNo:body.mobileNo,
            password:body.password    
        }
        const data = await query.studentPostQuery(obj1);
        return res.send(data)
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
}


module.exports={
    studentPostData
};




