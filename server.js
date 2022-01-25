const express = require("express")
require("dotenv").config({path: "./config/data.env"});
const app = express();
const customerController=require("./controllers/customerControllers.js")
const mongoose=require("mongoose");


app.use(express.json());

app.use("/customers",customerController);



app.listen(process.env.PORT,async()=>
{
    console.log(`Server Running on Port: ${process.env.PORT}`);
    try
    {
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("Sucessfully connected to mongoDB")
    }
    catch(err)
    {
        console.log(`ERROR: ${err}`);
    }
})