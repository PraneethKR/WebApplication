const customerModel=require("../models/customerModel.js")
const bcrypt=require("bcrypt")

// This function is used to get the data from the databse for the given ID

exports.getACustomer = (req,res)=>{
    customerModel.findById(req.params.id)
    .then((customers)=>
    {
        if(customers)
        {
           res.json(customers);
        }
        else
        {
            res.json({message:`No customer with id: ${req.params.id} found`})
        }
    })
    .catch((err)=>
    {
        res.json({"ERROR":err})
    })
}


// This is a function used to create an object in the database

exports.createACustomer=(req,res)=>{
    const data = req.body;
    bcrypt.hash(data.password,10).then((hash)=>
    {
        data.password = hash;
        const customer=new customerModel(data);
        customer.save()
        .then((newCustomer)=>{
            res.json({
                data:newCustomer
            })
        })
        .catch(err=>{
             console.log(`Error: ${err}`);
        })
    })
    .catch((err)=>
    {
        console.log(`Error: ${err}`)
    })
}


















/* Functions that are used for validation */


exports.checkdataforcreate=(req,res,next)=>
{
    if(req.body.firstName && req.body.lastName)
    {
        if(req.body.email && req.body.password)
        {
            next();
        }
        else
        {
           res.json({Errorq: "UserId and password must be entered"})
        }
    }
    else
    {
        res.json({Error: "firstName and lastName must be entered"})
    }
}