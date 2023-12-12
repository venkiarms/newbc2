const express =require('express')
const mongoose =require('mongoose')
const dotenv = require('dotenv').config();
const router =require('./router/userrout')
const PORT = process.env.PORT || 7000;
const app =express();

app.use(express.json())
app.use('/api',router)//http://localhost:4000/api

mongoose.connect( 'mongodb://127.0.0.1:27017/kr1?').then(()=>{
    console.log(`My Server Running in ${PORT}`)
    app.listen(PORT)
})