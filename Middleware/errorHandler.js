const {CONSTANTS} = require("../constants");
const errorhandler = (err,req,res,next)=>{
    const statuscode = res.statusCode ? res.statusCode : 500;
    //If res.statusCode is truthy (i.e., a non-zero and valid value is already set), then it uses res.statusCode.
    //If res.statusCode is falsy (e.g., 0, undefined, null, etc.), it defaults to 500.
    // console.log(statuscode);
    // console.log(CONSTANTS.CONSTANTS.VALIDATION_ERROR);
    switch(statuscode)
    {
    
    case  CONSTANTS.VALIDATION_ERROR: 
        res.json({title:"Validation error",message:err.message,stacktrace:err.stack});
    case  CONSTANTS.UNAUTHORIZED: 
        res.json({title:"Un authorized",message:err.message,stacktrace:err.stack});
    case  CONSTANTS.FORBIDDEN: 
        res.json({title:"forbidden",message:err.message,stacktrace:err.stack});
    case  CONSTANTS.NOT_FOUND: 
        res.json({title:"Not found",message:err.message,stacktrace:err.stack});
    case  CONSTANTS.SERVER_ERROR: 
        res.json({title:"Server error",message:err.message,stacktrace:err.stack});
    // default:
    //     res.json({message:"No error all good"});
    }
    
}

module.exports=errorhandler;