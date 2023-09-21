const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
app.use(express.json())
app.set("view engine", "ejs")
const studentapi = require("./routes/student");

app.use("/student", studentapi);

app.get("/", (req, res)=>{
    res.render(__dirname+'/views/index.ejs')
})

mongoose.connect("mongodb://127.0.0.1:27017/StudentForm").then((res)=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log(err.message)
})

app.listen(port, ()=>{
    console.log('Server is running...')
})
