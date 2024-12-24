// const { Router } = require("express");

const getContact = (req,res)=>{
    res.header("Content-type","text/html");
    res.status(200).json({message:"get contact"});
} 

const getContacts = (req,res)=>{
    res.header("Content-type","text/html");
    res.status(200).json({message:"get all contacts"});
} 

const createContacts = (req,res)=>{
    console.log("Contact created "+req.body.name);
    const{name,phone,address}=req.body;
    if(!name || !phone || !address)
    {
        res.status(400);
        throw new Error("All fields are required");
    }
    res.header("Content-type","text/html");
    res.status(201).json({message:"createcontacts"});
} 

const updateContacts = (req,res)=>{
    res.header("Content-type","text/html");
    res.status(200).json({message:"update contacts"});
} 

const deleteContacts = (req,res)=>{
    res.header("Content-type","text/html");
    res.status(200).json({message:"delete contacts"});
} 

module.exports={getContact,getContacts,createContacts,updateContacts,deleteContacts}