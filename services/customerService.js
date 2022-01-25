const customerModel=require("../models/customerModel.js")


exports.getACustomer = (req,res)=>{
    customerModel.findById(req.params.id)
    .then((customers)=>
    {
        res.json(customers);
    })
    .catch((err)=>
    {
        res.json({"ERROR":err})
    })
}
    
    
exports.createACustomer=(req,res)=>{
    const customer=new customerModel(req.body);

    customer.save()
    .then((newCustomer)=>{
        res.json({
            data:newCustomer
        })
    })
    .catch(err=>{
         console.log(`Error: ${err}`);
    })
}