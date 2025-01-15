const asynchandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validatejwt= asynchandler( async(req,res,next)=>{
    const authheader = req.header.Auth || req.header.auth; //we will get access token in header auth field as Bearer
    // next step we are make sure that we got access token and it's start with Bearer key

    if(authheader && authheader.startsWith("Bearer"))
    {
        // usually access token look like this Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiZ3JlZXQiLCJlbWFpbCI6Imdy
        let accesstocken = authheader.split(" ")[1]; // we fetching token by its position 

    } 
})