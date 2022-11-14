

const express=require('express');
const User = require('../model/userSchema');
const router=express.Router();
const jwt= require ("jsonwebtoken")
const bcrypt=require("bcryptjs");
const cookie=require ('cookie-parser')
require("../model/userSchema")
const authenticate =require("../middleware/authenticate");
const cookieParser = require('cookie-parser');
const authenticate2= require("../middleware/authenticate2")

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
   const{name,email,phone,branch_name,roll_no,hostel_name,room_no,password,cpassword}=req.body;
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
        const user =new User({name,email,phone,branch_name,roll_no,hostel_name,room_no,password,cpassword});
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
// router.post("/contact",(req,res)=>{
//     const {name,email,phone,work,password,cpassword}=req.body;
//     console.log(name,email)
// })

// about page
 router.use(cookieParser());
router.get('/about',authenticate,(req,res)=>{
        console.log("Now we are on our about section")
        res.send(req.rootUser);
    
    })

    // getting userdata
    router.get('/getData',authenticate,(req,res)=>{
        console.log("Now we are on our about section")
        res.send(req.rootUser);
    })

    router.post("/complain",authenticate, async(req,res)=>{
      try {
        const {name,roll_no,hostel_name,room_no,issue,message}=req.body;
        console.log(name,roll_no,hostel_name,room_no,issue,message)
        if(!hostel_name || !message || !room_no || !issue){
            console.log("error in the complain server part")
            return res.json({error:"Please fill the complain form"})
        }
        const userComplain= await User.findOne({_id:req.userID});
        if(userComplain){
            const userMessage= await userComplain.addComplain(name,roll_no,hostel_name,room_no,issue,message);
            await userComplain.save();
            res.status(201).json("user complain successfully submitted")
        }


      } catch (error) {
        console.log(error);
      } 
    })

    //status page for both user and admin
    router.use(cookieParser());
    router.get("/status",authenticate2,(req,res)=>{
        console.log("now we are on the status section")
        res.send(req.rootUser);
    })

    //logout page
    router.use(cookieParser());
    router.get('/logout',(req,res)=>{
            console.log("Hello my logout page")
            res.clearCookie("jwtoken",{path:"/"})
            res.status(200).send("User logout");
        
        })

        // COMPLAIN RESPONSE FOR ADMIN
        router.post("/adminResponse",authenticate, async(req,res)=>{
            try {
                const {complain_status,roll_no,_id}=req.body;
                console.log(complain_status,roll_no)
                if(!complain_status || !roll_no || !_id){
                    console.log("error in response part of the page")
                    return res.json({error:"Please fill the staus carefully"})
                }
               // const id="Object"+"('"+_id+"')";
                console.log(_id)
                //try to update the value
                const userComplain= await User.findOne({roll_no});
                console.log("this is "+userComplain)
                if(userComplain){
                    
                    const userMessage= await userComplain.addComplainStatus(complain_status,_id,roll_no);
                    await userComplain.save();
                    res.status(201).json("admin response successfully submitted")
                }
        
              } catch (error) {
                console.log(error);
              } 
          })


    
module.exports=router