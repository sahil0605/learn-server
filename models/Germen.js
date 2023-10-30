const mongoose = require('mongoose')

const germenSchema = new mongoose.Schema({
    que:{
        type:String,
        required :true,
    },
    options:{
        type:[String],
        required:true,
    },
    rightAnsIndex:{
        type :Number,
    }
})

module.exports = mongoose.model('Germen',germenSchema)