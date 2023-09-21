const mongoose = require('mongoose');

var student= mongoose.model("Registration", new mongoose.Schema({
    Name:String,
    Fathername:String,
    age:Number
}))

module.exports= student