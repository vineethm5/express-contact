require("dotenv").config();
const express =  require('express');
const errorhandler = require('./Middleware/errorHandler');
const connectDb = require("./config/dbConnection");
const app = express();

const PORT= process.env.PORT || 3030;
connectDb();
app.use(express.json());
app.use("/contact/api",require("./router/contactRouter"));
app.use("/user/api",require("./router/userRouter"));
app.use(errorhandler);

app.listen(PORT,(err)=>{
    if(!err) console.log(`Connected Successfully to the ${PORT}`)
})