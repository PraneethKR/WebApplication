const express = require("express");
const router = express.Router();
const propertyService=require("../services/propertyServices.js")
const Validation=require("../middleware/validation.js");
const { validate } = require("../models/customerModel.js");

router.get("/",propertyService.getallproperty)

router.get("/types",propertyService.getallpropertytypes)

router.get("/:id",propertyService.getApropertyid)

router.post("/",Validation.validateCreateProperty,propertyService.createAProperty)

router.put("/:id",Validation.validatePutData,propertyService.updateAproperty)

router.delete("/:id",propertyService.deleteAproperty)

module.exports = router;