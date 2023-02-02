const mongoose=require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const userinfoSchema=new mongoose.Schema({
    fatherName:{
        type:String,
        required:true
    },
    motherName:{
        type:String,
        required:true
    },
    userId:{
        type:ObjectId,
        required:true,
        ref:"User"
    },
    permanentAddress:{
        type:String,
        required:true
    },
    maritalStatus:{
        type:String,
        enum:["married","unmarried"],
        required:true
    },
    spouseName:{
        type:String
    }
},{timestamps:true},{strictPopulate: false})

module.exports=new mongoose.model('userInfo',userinfoSchema)