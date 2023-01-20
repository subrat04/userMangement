const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    userId:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    level:{
        type:Number
    }
},{timestamps:true})

module.exports=new mongoose.model("User",userSchema)