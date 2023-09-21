const studentrouter = require('express').Router();
const student = require("../models/studentm")


studentrouter.get("/",async (req,res)=>{
await student.create(req.query)
    res.send('Welcome')
})

studentrouter.get("/records", async (req,res)=>{
    var record =await student.find();
    res.json(record)
})

studentrouter.put("/", async (req,res)=>{
    await student.findByIdAndUpdate(req.query.id,{$set:req.body})
    res.send("Updated")
})

studentrouter.delete("/", async (req,res)=>{
    await student.findByIdAndDelete(req.query.id)
    res.send("Deleted")
})

module.exports = studentrouter