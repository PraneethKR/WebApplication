exports.createcustomerValidation=(req,res,next)=>
{
    const errors = [];
    if(!req.body.firstName ||req.body.firstName==="")
    {
        errors.push({
            field:"firstName",
            message:"This is a mandatory field"
        })
    }
    if(!req.body.lastName ||req.body.lastName==="")
    {
        errors.push({
            field:"lastName",
            message:"This is a mandatory field"
        })
    }
    if(!req.body.email ||req.body.email==="")
    {
        errors.push({
            field:"email",
            message:"This is a mandatory field"
        })
    }
    if(!req.body.password ||req.body.password==="")
    {
        errors.push({
            field:"password",
            message:"This is a mandatory field"
        })
    }
    if(errors.length>0)
    {
        res.status(400).json({
            message:"The following are the errors found in the data",
            data:errors
        })
    }
    else
    {
        next();
    }


}

exports.validateCreateProperty=(req,res,next)=>
{
    const errors = [];
    if(!req.body.title ||req.body.title==="")
    {
        errors.push({
            field:"title",
            message:"This is a mandatory field"
        })
    }
    if(!req.body.rentalPrice ||req.body.rentalPrice==="")
    {
        errors.push({
            field:"rentalPrice",
            message:"This is a mandatory field"
        })
    }
    if(!req.body.type ||req.body.type==="")
    {
        errors.push({
            field:"type",
            message:"This is a mandatory field"
        })
    }
    if(!req.body.location ||req.body.location==="")
    {
        errors.push({
            field:"location",
            message:"This is a mandatory field"
        })
    }
    if(!req.body.bestSeller || req.body.bestSeller==="")
    {
        errors.push({
            field:"bestSeller",
            message:"This is a mandatory field"
        })
    }
    if(!req.body.amenities || req.body.amenities.length == 0)
    {        
            errors.push({
                field:"amenities",
                message:"This is a mandatory field"
            })
   }
    if(errors.length>0)
    {
        res.status(400).json({
            message:"The following are the errors found in the data",
            data:errors
        })
    }
    else
    {
        next();
    }    
}

exports.validateCustomerid=(req,res,next)=>
{
     
}

exports.validatePropertyid=(req,res,next)=>
{

}
