//@ desc user registration
//@ route POST user/api/register
//@ access public
const register=(req,res)=>
{
    res.status(200).json({message:"user signup"});
}

//@ desc user registration
//@ route POST user/api/login
//@ access public 

const login= (req,res)=>{
    res.status(200).json({message:"user login"});
}

//@ desc user detail
//@ route POST user/api/userdetail
//@ access public 

const userdetail=(req,res)=>{
    res.status(200).json({message:"user Detail"});
}
module.exports={register,login,userdetail}