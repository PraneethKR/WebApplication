const express = require("express");
const router = express.Router();
const customerService=require("../services/customerService")


// This is a get request with ID parameters

router.get("/:id",customerService.getACustomer)


// This is a post request to add the data object to the collection

router.post("/",customerService.checkdataforcreate,customerService.createACustomer)

module.exports=router;