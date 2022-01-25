const express = require("express");
const router = express.Router();
const customerService=require("../services/customerService")

router.get("/:id",customerService.getACustomer)

router.post("/",customerService.createACustomer)

module.exports=router;