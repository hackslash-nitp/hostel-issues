const express=require("express")
const app=express();
const dotenv=require("dotenv")
const mongoose=require("mongoose");
dotenv.config({path:'./config.env'})
require('./db/conn');
const PORT=process.env.PORT;
const User= require('./model/userSchema')


app.use(express.json());

// we link the router file to make our route easy
app.use(require('./router/auth'));

// middleware
const middleware=(req,res,next)=>{c
    console.log(`hello my middleware`);
    next();
}

app.get('/',(req,res)=>{
    res.send("hello world from the server");
});

app.get('/about',middleware,(req,res)=>{
    console.log("hello we are on the about")
    res.send(`<h1>hello world from the server on about</h>`);
})

app.get('/contact',(req,res)=>{
    res.cookie("jwtoken","bhai")
    res.send(`<h1>hello world from the server on contact</h>`);
})

app.get('/signin',(req,res)=>{
    res.send(`<h1>hello world from the server on Login</h>`);
})

app.get('/signup',(req,res)=>{
    res.send(`<h1>hello world from the server on Registration</h>`);

})

app.listen(PORT,(req,res)=>{
    console.log(`Server is running at PORT ${PORT}`)
});