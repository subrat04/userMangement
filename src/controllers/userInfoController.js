const userInfoModel = require("../models/userInfoModel");
const userModel = require("../models/userModel");

const isValidStatus= function (value){
    return ["married","unmarried"].indexOf(value) !==-1
}

const createuserInfo = async (req, res) => {
  try {
    let requestbody = req.body;
    let { fatherName, motherName, userId, permanentAddress, maritalStatus } =
      requestbody;
    if (!fatherName) {
      return res
        .status(400)
        .send({ status: false, message: "Father Name is required" });
    }
    if (!motherName) {
      return res
        .status(400)
        .send({ status: false, message: "Mother Name is required" });
    }
    if (!permanentAddress) {
      return res
        .status(400)
        .send({ status: false, message: "Permanenet is required" });
    }
    if (!maritalStatus) {
      return res
        .status(400)
        .send({ status: false, message: "Marital Status is required" });
    }
    if (!isValidStatus(maritalStatus)) {
      return res
        .status(400)
        .send({ status: false, message: "please choose properly" });
    }
    if(!userId){
        return res
        .status(400)
        .send({ status: false, message: "UserId is required" });
    }
    const finduser = await userModel.findById(userId);
    if (!finduser) {
      return res
        .status(404)
        .send({ status: false, message: "user is not found" });
    }

    let createUser = await userInfoModel.create(requestbody);
    
    return res.status(201).send({
      status: true,
      message: "userInfo created successfully",
      data: createUser,
    });
  
  } catch (error) {
    return res.status(500).send({ status: true, message: error.message });
  }
};

const getUserInfo=async (req,res)=>{
    try {
        const userId=req.query
        console.log(userId)
        const finduserInfo=await userInfoModel.find(userId).populate('userId')
        return res.status(200).send({data:finduserInfo})

    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
}
module.exports = { createuserInfo,getUserInfo };
