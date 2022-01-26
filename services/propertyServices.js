const PropertyModel=require("../models/propertyModels.js")

exports.getallproperty=(req,res)=>
{
   PropertyModel.find().then((property)=>
   {
        if(property)
        {
            res.json({
                message: "The property list requested is below",
                data: property
            })
        }
        else
        {
            res.json({Error: "No data found"})
        }
   })
}

exports.getallpropertytypes=(req,res)=>
{
    PropertyModel.find({},"type").then((propertyTypes)=>
    {
        if(propertyTypes)
        {
            res.json({
                message: "The PropertyTypes for the properties are as follows",
                data: propertyTypes
           })
        }
        else
        {
            res.json({Error: "No data found"})
        }
    })
    .catch((err)=>
    {
        res.json({Error:err});
    })
}

exports.getApropertytype=(req,res)=>
{
    PropertyModel.find({type:req.params.type}).then((propertyType)=>
    {
        res.json({
            message: `The Properties with the type ${req.params.type} are:`,
            data: propertyType
       })
    })
    .catch((err)=>
    {
        res.json({Error:err});
    })
}

exports.getApropertylocation=(req,res)=>
{
    PropertyModel.find({location:req.params.location}).then((propertyType)=>
    {
        res.json({
            message: `The Properties with the location ${req.params.location} are:`,
            data: propertyType
       })
    })
    .catch((err)=>
    {
        res.json({Error:err});
    })
}

exports.getApropertyvalue=(req,res)=>
{
    PropertyModel.find({value:req.params.value}).then((propertyType)=>
    {
        res.json({
            message: `The Properties with the value ${req.params.value} are:`,
            data: propertyType
       })
    })
    .catch((err)=>
    {
        res.json({Error:err});
    })
}

exports.getApropertyid=(req,res)=>
{
    PropertyModel.findById(req.params.id).then((propertyType)=>
    {
        res.json({
            message: `The Properties with the id ${req.params.id} is:`,
            data: propertyType
       })
    })
    .catch((err)=>
    {
        res.json({Error:err});
    })
}

exports.createAProperty=(req,res)=>
{
    const property = new PropertyModel(req.body)

    property.save().then((property)=>
    {
        res.json({data: property})
    })
    .catch((err)=>
    {
        res.json({Error: err})
    })
}

exports.updateAproperty=(req,res)=>
{
    PropertyModel.findByIdAndUpdate(req.params.id,req.body).then(()=>
    {
        res.json({message:`The property with id ${req.params.id} has been updated`,
        })
    })
    .catch((err)=>
    {
        res.json({Error:err})
    })
}

exports.deleteAproperty=(req,res)=>
{
    PropertyModel.findByIdAndRemove(req.params.id)
    .then(()=>
    {
        res.json({message:`The property with id ${req.params.id} has been deleted`,
        })
    })
    .catch((err)=>
    {
        res.json({Error:err})
    })
}

