const userModel = require("../models/userModel.js");
const employeeModel = require("../models/employeeModel.js");
// const jwt=

const createEmployee = async (req, res) => {
  //   const userId = req.params.userid;
  let requestbody = req.body;
  // if(!finduser) return res.status(404).send({message:"user is not foun
  let { email, phone, userId } = requestbody;
  const finduser = await userModel.findById({ _id: userId });
  console.log(finduser.level);
  if (!finduser) return res.status(404).send({ msg: "user is not found" });
  let findMail = await employeeModel.findOne({ email: email });
  if (findMail) {
    return res
      .status(400)
      .send({ status: false, message: "email is already exist" });
  }
  let findPhone = await employeeModel.findOne({ phone: phone });
  if (findPhone) {
    return res
      .status(400)
      .send({ status: false, message: "phone already exist" });
  }
  if (finduser.level === 1) {
    let addemployee = await employeeModel.create(requestbody);
    return res.status(201).send({
      status: true,
      message: "user create successfully",
      data: addemployee,
    });
  } else if (finduser.level === 2) {
    return res.status(401).send({
      status: true,
      message: "not authorised",
    });
  }
};

const getEmployee = async function (req, res) {
  const query = req.query;
  let findemployee = await employeeModel.find(query);

  return res
    .status(200)
    .send({ staus: false, msg: "employee list", data: findemployee });
};

const updateEmployee = async function (req, res) {
  const requestbody = req.body;
  let employeeId = req.params.id;
  const findemployee = await employeeModel.findById(employeeId);
  if (!findemployee)
    return res
      .status(400)
      .send({ sttaus: false, msg: "employee is not found" });

  const updateemployee = await employeeModel.findByIdAndUpdate(
    { _id: employeeId },
    requestbody,
    { new: true }
  );
  return res
    .status(200)
    .send({ status: true, msg: "employee is updated", data: updateemployee });
};

// const deleteEmployee=async function(req,res){

//   let employeeid=req.params.id
//   const findemployee=await employeeModel.findById(employeeid)
//   if(!findemployee) return res.status(400).send({status:false,message:"employee is not found"})
//   // if(req.userId !==findemployee.userId)return res.status(401).send({msg:"unauthorised"})

//     let deleteEmployee=await employeeModel.findByIdAndDelete({_id:employeeid})
//     return res.status(200).send({status:true,message:"employee is delete successfully",data:deleteEmployee})

// }

const deleteEmployee = async function (req, res) {
  req.userId;
  let finduser = await userModel.findById(req.userId);
  if (!finduser)
    return res
      .status(404)
      .send({ status: false, message: "user is not found" });
  if (finduser.level === 1) {
    let employeeid = req.params.id;
    const findemployee = await employeeModel.findById(employeeid);
    if (!findemployee)
      return res
        .status(400)
        .send({ status: false, message: "employee is not found" });
    // if(req.userId !==findemployee.userId)return res.status(401).send({msg:"unauthorised"})

    let deleteEmployee = await employeeModel.findByIdAndDelete({
      _id: employeeid,
    });
    return res
      .status(200)
      .send({
        status: true,
        message: "employee is delete successfully",
        data: deleteEmployee,
      });
  }else{
    return res
      .status(200)
      .send({
        status: false,
        message: "unautrorized user",
        
      });
  }
};

module.exports = {
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
};
