const express =  require('express');
const router = express.Router();
const {getContact,getContacts,createContacts,updateContacts,deleteContacts}=require("../Controler/contactControler");
const validatejwt = require("../Middleware/validateTocken");

//Since we are authenticating all our routes we are not passing in any particular routes like this router.route("/:id").get(validatejwt,getContact);

router.use(validatejwt);
router.route("/:id").get(getContact);
router.route("/").get(getContacts);
router.route("/").post(createContacts);
router.route("/:id").put(updateContacts);
router.route("/:id").delete(deleteContacts);

module.exports=router;