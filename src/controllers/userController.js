const bcrypt = require("bcrypt");
const userModel = require("../models/userModel.js");
const jwt=require("jsonwebtoken")

const createUser = async function (req, res) {
  try {
    let requestbody = req.body;

    let { email, userId, password } = requestbody;

    let findMail = await userModel.findOne({ email: email });
    if (findMail) {
      return res
        .status(400)
        .send({ status: false, message: "email is already exist" });
    }
    let findUser = await userModel.findOne({ userId: userId });
    if (findUser) {
      return res
        .status(400)
        .send({ status: false, message: "userId already exist" });
    }

    const salt = await bcrypt.genSalt(10);
    requestbody.password = await bcrypt.hash(password, salt);
    let finduser = await userModel.find().lean();
    if (finduser.length > 0) {
      req.body.level = 2;
    } else {
      req.body.level = 1;
    }

    let addUser = await userModel.create(requestbody);
    res.status(201).send({
      status: true,
      message: "user create successfully",
      data: addUser,
    });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const loginUser = async function (req, res) {
  try {
    let requestbody = req.body;
    let { userId, password } = requestbody;

    let finduser = await userModel.findOne({ userId: userId });
    if (!finduser) {
      return res
        .status(400)
        .send({ status: false, message: "invalid credential" });
    }
    let checkpass = await bcrypt.compare(password, finduser.password);
    if (!checkpass) {
      return res
        .status(400)
        .send({ status: false, message: "invalid credential" });
    }
const token=jwt.sign({userId:finduser._id.toString()},"Adminsahab",{expiresIn:"10d"})
res.setHeader("x-api-key",token)
    return res
      .status(201)
      .send({
        status: true,
        message: "user login successfully",
        userid: finduser._id,
        token:token
      });
  } catch (error) {
    return res.status(500).send({status:false,message:error.message})
  }
};

const getUser=async function(req,res){
  const query=req.query
  const finduser=await userModel.find(query)
  return res.status(200).send({status:true,message:"user list",data:finduser})
}


const updateuser=async function(req,res){
  const userid=req.params.id
  const requestbody=req.body

  const finduser=await userModel.findById(userid)
  if(!finduser){
    return res.status(400).send({status:false,msg:"user is not found"})

  }
  

  let {Name,email,userId,password}=requestbody
  if(Name===""){
    return res.status(400).send({status:false,msg:"name is required"})
  }
 

  if(email===""){
    return res.status(400).send({status:false,msg:"email is required"})
  }
  if(email){
    let findmail=await userModel.findOne({email:email})
    if(findmail){
      return res.status(400).send({status:false,msg:"email is already exist"})
    }
  }
  if(userId===""){
    return res.status(400).send({status:false,msg:"userId is required"})
  }
  if(userId){
    let finduser=await userModel.findOne({userId:userId})
    if(finduser){
      return res.status(400).send({status:false,msg:"userId is already exist"})
    }
  }

  if(password===""){
    return res.status(400).send({status:false,msg:"password is required"})
  }
  if(password){
    const salt = await bcrypt.genSalt(10);
    requestbody.password = await bcrypt.hash(password, salt); 
  }

  const updateuser=await userModel.findByIdAndUpdate({_id:userid},{Name:Name,email:email,userId:userId,password:requestbody.password},{new:true})
  return res.status(200).send({status:true,message:"user is update",data:updateuser})

}

module.exports = { createUser, loginUser,getUser ,updateuser};
