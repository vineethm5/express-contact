const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt= require("jsonwebtoken");
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
    const {useremail,password}=req.body;
    const finduser= await User.findOne({useremail});
    if(finduser && (await bcrypt.compare(password,finduser.passwword)))
    {
        const AccessToken= jwt.sign({
            user:{
                username:finduser.username,
                email:finduser.useremail,
                id:finduser.id
            }
        },process.env.ACCESS_TOKEN_SECRET,{expiresIn:"1m"});
        res.status(200).json({AccessToken})
    }
    else
    {
        res.status(401);
        throw new Error("User Doesnot exitst");
    }
});

//@ desc user detail
//@ route POST user/api/userdetail
//@ access private 

const userdetail=asyncHandler( async (req,res)=>{
    res.status(200).json({message:"user Detail"});
});
module.exports={register,login,userdetail}