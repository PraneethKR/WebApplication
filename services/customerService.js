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
            res.status(404).json({message:`No customer with id: ${req.params.id} found`})
        }
    })
    .catch((err)=>
    {
        if(err.name==="CastError" && err.kind==="ObjectId")
        {
            res.status(404).json({message:`No customer with id: ${req.params.id} found`})
        }
        else
        {
            res.status(400).json({"ERROR":err})
        }
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
            res.status(201).json({
                data:newCustomer
            })
        })
        .catch(err=>{
             res.status(400).json({Error:err})
        })
    })
    .catch((err)=>
    {
        res.json({Error: err})
    })
}