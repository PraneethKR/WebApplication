const express = require("express");
const res = require("express/lib/response");
require("dotenv").config({path: "./config/data.env"});
const app = express();
const mongoose=require("mongoose");

// Controllers imports

const customerController=require("./controllers/customerControllers.js")
const propertyController=require("./controllers/propertyControllers.js")


app.use(express.json());


app.use("/customers",customerController);

app.use("/property",propertyController);

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
        res.status(404).json({ERROR: err});
    }
})