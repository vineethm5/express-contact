const express =  require('express');
const errorhandler = require('./Middleware/errorHandler');
const connectDb= require("./config/dbConnection");
const app = express();

const PORT=3030;
connectDb();
app.use(express.json());
app.use("/contact/api",require("./router/contactRouter"));
app.use(errorhandler);

app.listen(PORT,(err)=>{
    if(!err) console.log("Connected Successfully")
})