

const e = require('express');
const express=require('express');
const { estimatedDocumentCount } = require('../model/userSchema');
const User = require('../model/userSchema');
const router=express.Router();
const jwt= require ("jsonwebtoken")
const bcrypt=require("bcryptjs");
const cookie=require ('cookie-parser')
require("../model/userSchema")
const authenticate =require("../middleware/authenticate");
const cookieParser = require('cookie-parser');

router.get('/',(req,res)=>{ 
    res.send(`hello world from the server router js by using the router part on our website`)
});


//// using promises
// router.post('/register',(req,res)=>{
//    const{name,email,phone,work,password,cpassword}=req.body;
//    if(!name || !email){
//     return res.status(422).json({error:"plz filled the field properly"});
//    }
//    //check the user already exist or not
//    User.findOne({email:email}).then((userExist)=>{
//     if(userExist){
//         return res.status(422).json({error:"user already exist"});
//     }
//     const user =new User({name,email,phone,work,password,cpassword});
//     user.save().then(()=>{
//         res.status(201).json({Message:"User registration successfull"});
//     }).catch((e)=>{console.log(e);});
//    }).catch(err=>{console.log(err)});
   
    
// })


//// using async and await

router.post('/register',async (req,res)=>{
   const{name,email,phone,work,password,cpassword}=req.body;
   if(!name || !email){
    return res.status(422).json({error:"plz filled the field properly"});
   }
   if(password != cpassword){
    return res.status(422).json({error:"plz filled the field properly"});
   }
   try {
   const userExist=await User.findOne({name:name});
        if(userExist){
            return res.status(422).json({error:"user already exist"});
        }
        const user =new User({name,email,phone,work,password,cpassword});
       const userRegistered= await user.save();
       if(userRegistered){
            res.status(201).json({Message:"User registration successfull"});
       }else{
        res.status(422).json({Message:"User registration unsuccessfull"});
       } 
   } catch (err) {
    console.log(err);
   }
   //check the user already exist or not
})


//login route
router.post("/signin",async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(422).json({error:"Plz fill the field"});
    }
try {
    const userLogin= await User.findOne({email:email});  // findone return the complete schema
    if(userLogin){
        const isMatch=await bcrypt.compare(password,userLogin.password)
        const token=await userLogin.generateAuthToken();
         res.cookie("jwtoken",token,{
            expires:new Date(Date.now()+2589200000),
            httpOnly:true
         });
      
        if(!isMatch){
            res.status(422).json({error:"invalid credential"})
        }else{
            res.json({message:"user login succesfully"})
        }
    }else{
        res.status(422).json({error:"invalid credential"})
    }
    
    
} catch (error) {
    console.log(error);
}

})

// for the contact form where we find our inforamation for our neeed
router.post("/contact",(req,res)=>{
    const {name,email,phone,work,password,cpassword}=req.body;
    console.log(name,email)
})

// about page
 router.use(cookieParser());
router.get('/about',authenticate,(req,res)=>{
        console.log("Now we are on our about section")
        res.send(req.rootUser);
    })
    
module.exports=router