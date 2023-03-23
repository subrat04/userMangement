const userModel = require("../models/userModel.js");
const employeeModel = require("../models/employeeModel.js");
const createEmployee = async (req, res) => {
try {
  let requestbody = req.body;
  let { email, phone, userId } = requestbody;
  const finduser = await userModel.findById({ _id: userId });
  console.log(finduser.level);
  if (!finduser) return res.status(404).send({ msg: "User Not Found" });
  let findMail = await employeeModel.findOne({ email: email });
  if (findMail) {
    return res
      .status(400)
      .send({ status: false, message: "Email Already Exist" });
  }
  let findPhone = await employeeModel.findOne({ phone: phone });
  if (findPhone) {
    return res
      .status(400)
      .send({ status: false, message: "Phone Already Exist" });
  }
  if (finduser.level === 1) {
    let addemployee = await employeeModel.create(requestbody);
    return res.status(201).send({
      status: true,
      message: "User Create Successfully",
      data: addemployee,
    });
  } else if (finduser.level === 2) {
    return res.status(401).send({
      status: true,
      message: "Not Authorised",
    });
  }
} catch (error) {
  return res.status(500).send({status:false,message:error.message})
}
 
};

const getEmployee = async function (req, res) {
  try {
    const query = req.query;
  let findemployee = await employeeModel.find(query);

  return res
    .status(200)
    .send({ staus: true, msg: "Employee List", data: findemployee });
  } catch (error) {
    return res.status(500).send({status:false,message:error.message})
  }
  
};

const updateEmployee = async function (req, res) {
  const requestbody = req.body;
  let employeeId = req.params.id;
  const findemployee = await employeeModel.findById(employeeId);
  if (!findemployee)
    return res
      .status(404)
      .send({ sttaus: false, msg: "Employee not Found" });

  const updateemployee = await employeeModel.findByIdAndUpdate(
    { _id: employeeId },
    requestbody,
    { new: true }
  );
  return res
    .status(200)
    .send({ status: true, msg: "Employee  Update Successfully", data: updateemployee });
};

const deleteEmployee = async function (req, res) {
  req.userId;
  let finduser = await userModel.findById(req.userId);
  if (!finduser)
    return res
      .status(404)
      .send({ status: false, message: "User Not Found" });
  if (finduser.level === 1) {
    let employeeid = req.params.id;
    const findemployee = await employeeModel.findById(employeeid);
    if (!findemployee)
      return res
        .status(400)
        .send({ status: false, message: "Employee  Not Found" });
    // if(req.userId !==findemployee.userId)return res.status(401).send({msg:"unauthorised"})

    let deleteEmployee = await employeeModel.findByIdAndDelete({
      _id: employeeid,
    });
    return res
      .status(200)
      .send({
        status: true,
        message: "Employee Deleted Successfully",
        data: deleteEmployee,
      });
  }else{
    return res
      .status(200)
      .send({
        status: false,
        message: "Unautrorized User",
        
      });
  }
};

module.exports = {
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
};
