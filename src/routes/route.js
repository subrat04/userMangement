const express=require("express")
const { createUser, loginUser, getUser, updateuser, deleteUser } = require("../controllers/userController")
const {createEmployee, getEmployee, updateEmployee, deleteEmployee}=require("../controllers/employeeController")
const { decode } = require("jsonwebtoken")
const { authenticate } = require("../middlewire/auth")
const { createuserInfo, getUserInfo } = require("../controllers/userInfoController")

let router=express.Router()

router.post("/register",createUser)
router.post("/login",loginUser)
router.get("/getUser",getUser)
router.put("/updateUser/:id",updateuser)
router.delete("/deleteUser/:id",deleteUser)


router.post("/createUserInfo",createuserInfo)
router.get("/getuserInfo",getUserInfo)

router.post("/createEmployee",createEmployee)
router.get("/employee",getEmployee)
router.put("/updateEmployee/:id",authenticate,updateEmployee)
router.delete("/deleteEmployee/:id",authenticate,deleteEmployee)
module.exports=router