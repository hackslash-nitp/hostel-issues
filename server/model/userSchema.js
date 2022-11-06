const mongoose=require("mongoose");
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

// defining schema
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
      type:Number,
      required:true,
      min:10,
    },
    work:{
        type:String,
        
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[
        {
        token:{
            type:String,
        required:true
        }
    }
    ],
    date:{
        type:Date,
        default:Date.now
    },
    complain:[
        {
          hostel_name:{
            type:String,
            requierd:true
          },
          room_no:{
            type:String,
            required:true
          },
       issue:{
        type:String,
        require:true
       },
       message:{
        type:String,
        required:true
       }
        }
    ],
    total_complains:Number

})

 //hashing the password 
userSchema.pre('save',async function (next){
    if(this.isModified('password')){
        this.password= await bcrypt.hash(this.password,12);
        this.cpassword= await bcrypt.hash(this.cpassword,12);
    }
    next();
 })


 // generate token 
  userSchema.methods.generateAuthToken=async function(){
    try {
        let token =jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error)
    }
  }

  // store the complains 
   userSchema.methods.addComplain= async  function(hostel_name,room_no,issue,message){
    try {
        this.complain=this.complain.concat({hostel_name,room_no,issue,message});
        // saving the update part on database
       
        await this.save();
        return this.message


    } catch (error) {
        console.log(error)
    }
   }


const User= mongoose.model('USER',userSchema);
 module.exports=User;



 