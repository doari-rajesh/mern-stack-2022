// const express = require('express')     // older version of express
import express from "express";             // new version of express
import mongoose from "mongoose";
import cors from 'cors';


const PORT = 4000;
const app = express()

await mongoose.connect('mongodb+srv://doari_rajesh:Rajesh1234@cluster0.zguoizz.mongodb.net/?retryWrites=true&w=majority')
console.log("MongoDb Connection Successfull");
// .catch((err)=>{console.log(err);})


app.use(cors);
app.get('/',(req,res)=>{
    res.send("Hello World, Everyone");
});




app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:4000`);
})