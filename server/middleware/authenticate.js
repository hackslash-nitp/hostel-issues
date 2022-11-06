
const jwt=require("jsonwebtoken")
const User= require("../model/userSchema")
const Authenticate= async(req,res,next)=>{
    try {
        
        // getting the token form the cookie
        const token= req.cookies.jwtoken;
        
        // verified token
        const verifyToken=jwt.verify(token,process.env.SECRET_KEY);

        
        const rootUser=await User.findOne({_id:verifyToken._id,"tokens.token":token});


        if(!rootUser){throw new Error("User not found")}
        req.token=token;
        req.rootUser=rootUser;
        req.userID=rootUser._id;
        next();



    } catch (err) {
        res.status(422).send(("Unauthorized no. of token"))
        console.log(err);
    }

}

module.exports =Authenticate;