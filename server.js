/*

Name: Praneeth Kumar Reddy Punreddy
Std No: 130828205
Subject: Web4222
Date: 01/02/2022
GitHub link: https://github.com/PraneethKR/WebApplication
Heroku Link: https://pacific-springs-96106.herokuapp.com/

*/






const express = require("express");
require("dotenv").config({ path: "./config/data.env" });
const app = express();
const mongoose = require("mongoose");

// Controllers imports

const customerController = require("./controllers/customerControllers.js")
const propertyController = require("./controllers/propertyControllers.js")


app.use(express.json());
app.use((req,res,next)=>{
	res.header("Access-Control-Allow-Origin",'*');
	res.header("Access-Control-Allow-Meathods",'GET,POST,PUT,DELETE');
	res.header("Access-Control-Allow-Headers",'content-type');
	
	
	next();
});

app.use("/customers", customerController);

app.use("/property", propertyController);

app.use((req, res) => {
    res.status(404).json({message:"No Page Found"})
})

app.listen(process.env.PORT, async () => {
    console.log(`Server Running on Port: ${process.env.PORT}`);
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("Sucessfully connected to mongoDB")
    }
    catch (err) {
        res.status(404).json({ ERROR: err });
    }
})