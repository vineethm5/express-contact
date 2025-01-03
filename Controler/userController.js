const asyncHandler = require("express-async-handler");

//@ desc user registration
//@ route POST user/api/register
//@ access public
const register= asyncHandler( async (req,res)=>
{
    res.status(200).json({message:"user signup"});
});

//@ desc user registration
//@ route POST user/api/login
//@ access public 

const login= asyncHandler(async(req,res)=>{
    res.status(200).json({message:"user login"});
});

//@ desc user detail
//@ route POST user/api/userdetail
//@ access private 

const userdetail=asyncHandler( async (req,res)=>{
    res.status(200).json({message:"user Detail"});
});
module.exports={register,login,userdetail}