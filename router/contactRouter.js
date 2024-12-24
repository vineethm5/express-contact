const express =  require('express');
const router = express.Router();
const {getContact,getContacts,createContacts,updateContacts,deleteContacts}=require("../Controler/contactControler");

router.route("/:id").get(getContact);
router.route("/").get(getContacts);
router.route("/").post(createContacts);
router.route("/:id").put(updateContacts);
router.route("/:id").delete(deleteContacts);

module.exports=router;