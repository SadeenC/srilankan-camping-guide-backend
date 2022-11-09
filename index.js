require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const authRouter = require('./route/authRoute')


const app = express()

app.use("/auth",authRouter)

app.get('/',(req,res)=>{
    res.send("Hello World")
})

const dbURL = process.env.DATABASE_URL

mongoose.connect(dbURL,{ useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    app.listen(3000,()=>{
        console.log("database connected!");
        console.log('server runing....');
    })
})
.catch(err=>{
    console.log({error:err.message});
})




