const mongoose=require("mongoose")
const ObjectId = mongoose.Types.ObjectId
const ContactSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    userId:{
        type:ObjectId,
        required:true,
        ref:"User"
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    phone:{
        type:String,
        unique:true,
        required:true
    },
    services:{
        type:String,
        enum:["Managed It Service","It Project Mangement","Business Software","Cloud Servers","Website Design","Cyber Security","It Consulting","Digital Marketing","Increase Quality Traffic"],
        required:true
    },
    description:{
        type:String,
        required:true
    },
},{timestamps:true})

module.exports=new mongoose.model("Contact",ContactSchema)