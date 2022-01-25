const express = require("express")
require("dotenv").config({path: "./config/data.env"});
const app = express();
const customerController=require("./controllers/customerControllers.js")





app.use("/customers",customerController);



app.listen(process.env.PORT,(req,res)=>
{
    console.log(`Server Running on Port: ${process.env.PORT}`);
})