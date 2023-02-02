const bcrypt = require("bcrypt");
const userModel = require("../models/userModel.js");
const jwt = require("jsonwebtoken");

const createUser = async function (req, res) {
  try {
    let requestbody = req.body;

    let { email, userId, password} = requestbody;
    requestbody.slag = requestbody.password

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
    const token = jwt.sign(
      { userId: finduser._id.toString(), level: finduser.level },
      "Adminsahab",
      { expiresIn: "10d" }
    );
    res.setHeader("x-api-key", token);
    return res.status(201).send({
      status: true,
      message: "User Login Successfully",
      userid: finduser._id,
      level: finduser.level,
      token: token,
    });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const getUser = async function (req, res) {
  try {
    const query = req.query;
    const finduser = await userModel.find(query);
    return res
      .status(200)
      .send({ status: true, message: "user list", data: finduser });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const updateuser = async function (req, res) {
  try {
    console.log("req is ", req.body);
    const userid = req.params.id;
    const requestbody = req.body;
requestbody.slag=requestbody.password
    const finduser = await userModel.findById(userid);
    console.log("find user is", finduser);
    if (!finduser) {
      return res.status(400).send({ status: false, msg: "user is not found" });
    }

    let { Name, email, userId, password } = requestbody;
    console.log("requestbody", requestbody, userId, Name, email, password);
    if (Name === "") {
      return res.status(400).send({ status: false, msg: "Name Is Required" });
    }

    if (email === "") {
      return res.status(400).send({ status: false, msg: "Email Is Required" });
    }
    if (userId === "") {
      return res.status(400).send({ status: false, msg: "UserId Is Required" });
    }
    console.log("userid is", userId);

    if (password === "") {
      return res
        .status(400)
        .send({ status: false, msg: "Password Is Required" });
    }
    if (password) {
      const salt = await bcrypt.genSalt(10);
      requestbody.password = await bcrypt.hash(password, salt);
    }

    const updateuser = await userModel.findByIdAndUpdate(
      { _id: userid },
      {
        Name: Name,
        email: email,
        userId: userId,
        password: requestbody.password,
        slag:requestbody.slag
      },
      { new: true }
    );
    console.log("update user is", updateuser);
    return res
      .status(200)
      .send({ status: true, message: "User Update Successfully", data: updateuser });
  } catch (error) {
    console.log("error is", error.message);
    return res.status(500).send({ status: false, message: error.message });
  }
};

const deleteUser = async function (req, res) {
  try {
    let userId = req.params.id;
    let finduser = await userModel.findById(userId);
    if (!finduser) {
      return res
        .status(400)
        .send({ status: false, message: "User Not Found" });
    }
    const deleteUser = await userModel.findByIdAndDelete({
      _id: userId,
    });
    return res.status(200).send({
      status: true,
      message: "User Deleted Successfully",
      data: deleteUser,
    });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { createUser, loginUser, getUser, updateuser, deleteUser };
