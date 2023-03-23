const contactModel=require("../models/contactModel.js")
const userModel=require("../models/userModel")
const nodemailer=require("nodemailer")

const createMeassge=async (req,res)=>{
const requestbody=req.body
const {Name,userId,email,phone,services,description}=requestbody

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'subrat.eminenceinnovation@gmail.com',
      pass: 'xyetwhxehnjkztdb',
    },
  });
  const mailOptions = {
    from: email,
    to: 'subrat.eminenceinnovation@gmail.com',
    subject: 'Contact Form Submission',
    text: 'You have a new contact form submission: Name: '+ Name+'' +'phoneNumber'+phone+'useremail'+email+"service"+services+"message"+description
  }
  await transporter.sendMail(mailOptions)
 return  res.send({status:true})
}

module.exports={createMeassge}