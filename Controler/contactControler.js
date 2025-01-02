const asyncHandler= require("express-async-handler");
const Contact=require("../models/contactModel")

const getContact = asyncHandler(async (req,res)=>{
    res.header("Content-type","text/html");
    const contact=  await Contact.findById(req.params.id);
    console.log(contact);
    if(!contact)
    {
        res.status(404);
        throw new Error("Contact Not found");
    }

    res.status(200).json(contact);
} );

const getContacts = asyncHandler(async (req,res)=>{
    const contact= await Contact.find();
    res.header("Content-type","text/html");
    res.status(200).json({contact});
} );

const createContacts = asyncHandler(async (req,res)=>{
    console.log("Contact created "+req.body.name);
    const{name,phone,email}=req.body;
    if(!name || !phone || !email)
    {
        res.status(400);
        throw new Error("All fields are required");
    }
    const createconact = await Contact.create({
        "name":name,
        "phone":phone,
        "email":email
    }

    )
    // res.header("Content-type","text/html");
    res.status(201).json({createconact});
} );

const updateContacts = asyncHandler(async (req,res)=>{
    res.header("Content-type","text/html");
    res.status(200).json({message:"update contacts"});
} );

const deleteContacts = asyncHandler(async (req,res)=>{
    res.header("Content-type","text/html");
    res.status(200).json({message:"delete contacts"});
} );

module.exports={getContact,getContacts,createContacts,updateContacts,deleteContacts}