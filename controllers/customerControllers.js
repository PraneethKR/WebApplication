const express = require("express");
const router = express.Router();
const customerService=require("../services/customerService")
const Validation=require("../middleware/validation.js")

// This is a get request with ID parameters

router.get("/:id",Validation.validateCustomerid,customerService.getACustomer)


// This is a post request to add the data object to the collection

router.post("/",Validation.createcustomerValidation,customerService.createACustomer)

module.exports=router;