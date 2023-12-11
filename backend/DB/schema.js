const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const Employee = mongoose.model('Users',userschema);
module.exports = Employee;