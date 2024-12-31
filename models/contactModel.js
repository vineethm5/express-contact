const mongoose = require("mongoose");

const contactschema = mongoose.Schema({
    name:{
        type: String,
        required:[True,"Please add name"]
    },
    phone:{
        type: String,
        required:[True,"Please add name"]
    },
    address:{
        type: String,
        required:[True,"Please add name"]
    }
});