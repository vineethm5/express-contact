const asyncHandler= require("express-async-handler");
const Contact=require("../models/contactModel")


//@ desc Get contact
//@ route GET contact/api/:id
//@ access public

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

//@ desc Get contacts
//@ route GET contact/api/:id
//@ access public

const getContacts = asyncHandler(async (req,res)=>{
    const contact= await Contact.find();
    res.header("Content-type","text/html");
    res.status(200).json({contact});
} );

//@ desc create contacts
//@ route GET contact/api/
//@ access public


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

//@ desc update contact
//@ route UPDATE contact/api/:id
//@ access public

const updateContacts = asyncHandler(async (req,res)=>{
    res.header("Content-type","text/html");
    const contact=  await Contact.findById(req.params.id);
    console.log(contact);
    if(!contact)
    {
        res.status(404);
        throw new Error("Contact Not found");
    }
    const updatedcontact= await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true} //This is an option to ensure that the updated document is returned by the method.
                   //Without this option, Mongoose would return the document as it was before the update
    )

    
    res.status(200).json(updatedcontact);
} );

//@ desc delete contact
//@ route DELETE contact/api/:id
//@ access public
const deleteContacts = asyncHandler(async (req,res)=>{
    res.header("Content-type","text/html");
    const contact = await Contact.findById(req.params.id);
    console.log("delete",contact);
    if(!contact)
    {
        res.status(404);
        throw new Error("Contact Not found");
    }
    await Contact.remove();
    res.status(200).json(contact);
} );

module.exports={getContact,getContacts,createContacts,updateContacts,deleteContacts}