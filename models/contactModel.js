const mongoose = require("mongoose");

const contactschema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"users"
    },

    name:{
        type: String,
        required:[true,"Please add name"]
    },
    phone:{
        type: String,
        required:[true,"Please add Phone number"]
    },
    email:{
        type: String,
        required:[true,"Please add Email"]
    }
},
{
timestamps: true
}
);

module.exports=mongoose.model("contact",contactschema);