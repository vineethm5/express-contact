const mongoose = require('mongoose');

const connectDb= async ()=>{

    try{
        const connect = await process.env.CONNECTION_STRING;
        console.log("Database Connected Successfully");
    }
    catch(err)
    {
        console.log(err);
        process.exit(1);
    }
};
module.exports=connectDb;