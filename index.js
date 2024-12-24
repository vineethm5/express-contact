const express =  require('express');
const app = express();

const PORT=3030;
app.use(express.json());
app.use("/contact/api",require("./router/contactRouter"));

app.listen(PORT,(err)=>{
    if(!err) console.log("Connected Successfully")
})