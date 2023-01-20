const express=require("express")
const { createUser, loginUser, getUser, updateuser } = require("../controllers/userController")
const {createEmployee, getEmployee, updateEmployee, deleteEmployee}=require("../controllers/employeeController")
const { decode } = require("jsonwebtoken")
const { authenticate } = require("../middlewire/auth")

let router=express.Router()

router.post("/register",createUser)
router.post("/login",loginUser)
router.get("/getUser",getUser)
router.put("/updateUser/:id",updateuser)

router.post("/employee",createEmployee)
router.get("/employee",getEmployee)
router.put("/employee/:id",authenticate,updateEmployee)
router.delete("/employee/:id",authenticate,deleteEmployee)
module.exports=router