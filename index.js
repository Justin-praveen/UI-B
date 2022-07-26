const express = require("express");
const mongo = require("mongoose");
const rout = require("./rout")
const cors = require("cors")
const app = express();


app.use(express.static("./photos"))
app.use(express.json())
app.use(cors())
app.use("/",rout)

app.listen("5002",()=>{
    mongo.connect("mongodb://localhost:27017/test",()=>{
        console.log("db connected...!")
    })
    console.log("yep...!")
})      