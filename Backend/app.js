
require("dotenv").config();
const express =require('express')
const app=express();
app.use(express.json())


const {multer,storage}=require("./MiddleWare/MulterConfigure")

const uplaod =multer({storage:storage})

const User=require('./Model/UserModel')

app.use(express.static('./storage'))

const fs= require('fs');

const connectToDatabase = require("./Databse/Databse");
 connectToDatabase();


 
 




app.listen(process.env.PORT,()=>{
    console.log("Backend started building")
})


// register api //

