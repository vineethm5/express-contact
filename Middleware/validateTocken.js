const asynchandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validatejwt= asynchandler( async(req,res,next)=>{
    const authheader = req.headers.authorization || req.headers.Authorization; //we will get access token in header auth field as Bearer
    // next step we are make sure that we got access token and it's start with Bearer key

    if(authheader && authheader.startsWith("Bearer"))
    {
        // usually access token look like this Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiZ3JlZXQiLCJlbWFpbCI6Imdy
        let accesstocken = authheader.split(" ")[1]; // we fetching token by its position 

        jwt.verify(accesstocken,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
            if(err)
            {
                res.status(401);
                throw new Error("Unauthorised user");
            }
            else
            {
                // console.log(decoded);
                req.user = decoded.user //appending user info on req.user property, not on req body
                next();
            }
        });

    } 
    if(!accesstocken)
    {
        res.status(401);
        throw new Error("Token is missing");
    }
});


module.exports= validatejwt;