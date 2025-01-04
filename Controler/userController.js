const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
//@ desc user registration
//@ route POST user/api/register
//@ access public
const register= asyncHandler( async (req,res)=>
{

    const {username,useremail,password} = req.body;
    if(!username || !useremail || !password)
    {
        // res.status(400);
        throw new Error("All fileds are mandatory");
    }
    // console.log("enmailsdsd",useremail);
    const userAvailable = await User.findOne({useremail});
    if(userAvailable)
    {
        res.status(400);
        throw Error("Email id is alreday exists");
    }

    const hashpasswword = await bcrypt.hash(password,10);
    // console.log("hash password is ",hashpasswword);
    const createuser= await User.create({
        "username":username,
        "useremail":useremail,
        "passwword":hashpasswword,
    });

    res.status(200).json({"Name":createuser.username,"Email":createuser.useremail});
});

//@ desc user registration
//@ route POST user/api/login
//@ access public 

const login= asyncHandler(async(req,res)=>{
    const {username,password}=req.body;
    const finduser= await User.findOne({username});
    if(!finduser)
    {
        res.status(404);
        throw new Error("User Doesnot exitst");
    }
    else
    {
        res.status(200).send(`Hi ${username}`);
    }
});

//@ desc user detail
//@ route POST user/api/userdetail
//@ access private 

const userdetail=asyncHandler( async (req,res)=>{
    res.status(200).json({message:"user Detail"});
});
module.exports={register,login,userdetail}