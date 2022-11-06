// const jwt=require("jsonwebtoken")
// const User= require("../model/userSchema")
// const Authenticate2= async(req,res,next)=>{
//   try{
//     // getting the token from the cookie

//     const token = req.cookies.jwtokens;

//     // verifying token
//     const verifyToken=jwt.verify(token,process.env.SECRET_KEY);

//     const rootUser= await User.findOne({_id:verifyToken._id});

//     if(!rootUser){throw new Error("User not found")}
//     req.rootUser=rootUser;
//     rew.userID=rootUser._id;
//     next();



// } catch (err) {
//     res.status(422).send(("Unauthorized no. of token"))
//     console.log(err);
// }

// }

// module.exports =Authenticate2;



const jwt=require("jsonwebtoken");
const { find } = require("../model/userSchema");
const User= require("../model/userSchema")
const Authenticate2= async(req,res,next)=>{
    try {
        
        // getting the token form the cookie
        const token= req.cookies.jwtoken;
        
        // verified token
        const verifyToken=jwt.verify(token,process.env.SECRET_KEY);

        
        const user=await User.findOne({_id:verifyToken._id,"tokens.token":token});


        if(!user){throw new Error("User not found")}
        if(user.email!="admin@gmail.com")
        {
          const rootUser=user;
        req.token=token;
        req.rootUser=rootUser;
        req.userID=rootUser._id;
        }
       
       if(user.email=="admin@gmail.com"){
        const rootUser= await User.find({},{"complain":1});
        req.token=token;
        req.rootUser=rootUser;
        req.userID=rootUser._id;
       }
       
       
       
       
        next();
    } catch (err) {
        res.status(422).send(("Unauthorized no. of token"))
        console.log(err);
    }

}

module.exports =Authenticate2;