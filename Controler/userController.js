const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
//@ desc user registration
//@ route POST user/api/register
//@ access public
const register= asyncHandler( async (req,res)=>
{
    const {username,email,password} = req.body;
    if(!username || !email || !password)
    {
        res.status(400);
        throw new Error("All fileds are mandatory");
    }
    const userAvailable = User.findOne({email});
    if(!userAvailable)
    {
        res.status(400);
        throw new Error("Email id is alreday exists");
    }
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