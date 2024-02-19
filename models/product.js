const mongoose =require('mongoose');

// Schema for the Mongoose Database.
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    ram:{
        type:Number,
        required:true
    },
    camera:{
        type:String,
        required:true
    },
    network:{
        type:String,
        required:true
    },
    fingerprint:{
        type:Boolean,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
})

module.exports=mongoose.model('Product',productSchema)