const mongoose=require("mongoose")
const ObjectId = mongoose.Types.ObjectId
const employeeSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    userId:{
        type:ObjectId,
        required:true,
        ref:"User"
    },
    lastName:{
        type:String,
        required:true
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
    address:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
},{timestamps:true})

module.exports=new mongoose.model("Employee",employeeSchema)