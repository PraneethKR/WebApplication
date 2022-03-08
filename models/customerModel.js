const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    firstName:
    {
        type: String,
        require: true
    },
    lastName:
    {
        type: String,
        require: true
    },
    email:
    {
        type: String,
        require: true
    },
    password:
    {
        type: String,
        required: true
    }
})

customerSchema.add({ phone: [{ type: Number }] })

const customers = mongoose.model('customers', customerSchema);

module.exports = customers;