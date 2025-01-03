const mongoose = require("mongoose");

const userdetail_schema=mongoose.Schema({
    username : {
        type: String,
        required:[true,"Please enter the username"]
    },
    useremail : {
        type : String,
        required : [true,"Please enter the Email Id"],
        unique : [true,"Email id already taken"]
    },
    passwword : {
        type : String,
        required : [true,"Please enter the password"]
    }
},
{
    timestamp: true
});

module.exports= mongoose.model("User",userdetail_schema);