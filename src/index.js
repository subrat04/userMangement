const express=require("express")
const bodyparser=require("body-parser")
const mongoose=require("mongoose")
const route=require("../src/routes/route.js")
const cors=require("cors")
const cookieparser=require("cookie-parser")
const app=express()

app.use(bodyparser.json())
app.use(cookieparser())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/demo",{
    useNewUrlParser:true
})
.then(()=>console.log("mongodb is connected"))
.catch((err)=>console.log(err))

app.use("/",route)
let port=process.env.PORT||5000
app.listen(port,()=>console.log(`express running on ${port}`))