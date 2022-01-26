const express = require("express");
const router = express.Router();
const propertyService=require("../services/propertyServices.js")

router.get("/",propertyService.getallproperty)

router.get("/types",propertyService.getallpropertytypes)

router.get("/type/:type",propertyService.getApropertytype)

router.get("/location/:location",propertyService.getApropertylocation)

router.get("/value/:value",propertyService.getApropertyvalue)

router.get("/:id",propertyService.getApropertyid)

router.post("/",propertyService.createAProperty)

router.put("/:id",propertyService.updateAproperty)

router.delete("/:id",propertyService.deleteAproperty)

module.exports = router;