const mongoose=require("mongoose");
const  Schema =mongoose.Schema;

const propertySchema = new Schema({
    title:
    {
        type:String,
        required:true
    },
    "rentalPrice(pernight)":
    {
        type:Number,
        required:true
    },
    description:
    {
        type:String
    },
    type:
    {
        type:String,
        required:true
    },
    location:
    {
        type:String,
        required:true
    },
    photo:
    {
        type:String
    }
})

propertySchema.add({ houseRules: [{ type:String }] })
propertySchema.add({ amenities: [{ type:String }] , required:true })

const property = mongoose.model("property",propertySchema);

module.exports=property;