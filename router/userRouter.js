const express = require("express");
const router=express.Router();
const {register,login,userdetail} = require("../Controler/userController");
const validatejwt=require("../Middleware/validateTocken");

router.post("/register",register);
router.post("/login",login);
router.get("/userdetail",validatejwt,userdetail);

module.exports=router;