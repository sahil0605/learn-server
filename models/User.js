const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    level:{
        type :Number,
        default:0,
    },
    points:{
        type:Number,
        default:0,
    }
    
})
module.exports = mongoose.model('User',userSchema)
