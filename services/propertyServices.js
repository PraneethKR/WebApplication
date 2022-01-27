const PropertyModel=require("../models/propertyModels.js")

exports.getallproperty=(req,res)=>
{
   PropertyModel.find().then((property)=>
   {
        if(property.length>0)
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
   .catch((err)=>
    {
       res.status(400).json({Error:err})
    })
}

exports.getallpropertytypes=(req,res)=>
{
    PropertyModel.find({},"type").then((propertyTypes)=>
    {
        if(propertyTypes.length>0)
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
        res.status(400).json({Error:err});
    })
}

exports.getApropertytype=(req,res)=>
{
    PropertyModel.find({type:req.params.type}).then((propertyType)=>
    {
        if(propertyType.length > 0)
        res.json({
            message: `The Properties with the type ${req.params.type} are:`,
            data: propertyType
       })
       else
       {
           res.json({Error:`There is no property with type ${req.params.type}`})
       }
    })
    .catch((err)=>
    {
        res.status(400).json({Error:err});
    })
}

exports.getApropertylocation=(req,res)=>
{
    PropertyModel.find({location:req.params.location}).then((propertyType)=>
    {
        if(propertyType.length>0)
        {        
            res.json({
            message: `The Properties with the location ${req.params.location} are:`,
            data: propertyType
            })
        }
        else
        {
            res.json({Error:`There is no property with location ${req.params.location}`})
        }
    })
    .catch((err)=>
    {
        res.status(400).json({Error:err});
    })
}

exports.getApropertyvalue=(req,res)=>
{
    PropertyModel.find({bestSeller:req.params.value}).then((propertyType)=>
    {
        if(propertyType.length>0)
        {
            res.json({
            message: `The Properties with the value ${req.params.value} are:`,
            data: propertyType
            })
        }
        else
        {
            res.json({Error:`There is no property with bestseller ${req.params.value}`})   
        }
    })
    .catch((err)=>
    {
        res.status(400).json({Error:err});
    })
}

exports.getApropertyid=(req,res)=>
{
    PropertyModel.findById(req.params.id).then((propertyType)=>
    {
        if(propertyType)
       {
            res.json({
            message: `The Properties with the id ${req.params.id} is:`,
            data: propertyType
            })
        }
        else
        {
            res.json({Error:`There is no property with id ${req.params.id}`})
        }
    })
    .catch((err)=>
    {
        res.status(400).json({Error:err});
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
        res.staus(400).json({Error: err})
    })
}

exports.updateAproperty=(req,res)=>
{
    PropertyModel.findByIdAndUpdate(req.params.id,req.body).then((property)=>
    {
        if(property)
        {
            res.json({
            message:`The property with id ${req.params.id} has been updated`,
            })
        }
        else
        {
            res.json({Error:`There is no property with id ${req.params.id}`})
        }
    })
    .catch((err)=>
    {
        res.status(400).json({Error:err})
    })
}

exports.deleteAproperty=(req,res)=>
{
    PropertyModel.findByIdAndRemove(req.params.id)
    .then((property)=>
    {   
        if(property)
        {
            res.json({
            message:`The property with id ${req.params.id} has been deleted`
            })
        }
        else
        {
            res.json({Error:`There is no property with id ${req.params.id}`})
        }
    })
    .catch((err)=>
    {
        res.status(400).json({Error:err})
    })
}








// Validation functions

exports.validateCreateProperty=(req,res,next)=>
{
    if(req.body.title && req.body.rentalPrice)
    {
        if(req.body.type && req.body.location)
        {
            if(req.body.bestSeller && req.body.amenities)
            {
                next();
            }
            else
            {
                res.json({Errorq: "BestSeller and amenities must be entered"})
            }
        }
        else
        {
            res.json({Errorq: "type and location must be entered"})
        }
    }
    else
    {
        res.json({Errorq: "title and rentalPrice must be entered"})
    }
}

