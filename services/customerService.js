exports.getACustomer = (req,res)=>{

console.log(`this route gives customer with id ${req.params.id}`)
}


exports.createACustomer=(req,res)=>{
console.log(`The request to create is here${req.body}`)
}