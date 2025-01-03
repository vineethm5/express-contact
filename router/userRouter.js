const express = require("express");
const router=express.Router();
const {register,login,userdetail} = require("../Controler/userController");

router.post("/register",register);
router.post("/login",login);
router.get("/userdetail",userdetail);

module.exports=router;