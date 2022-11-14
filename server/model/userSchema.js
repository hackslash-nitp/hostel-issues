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

    branch_name:{
        type:String,
        
    },
    roll_no:{
        type:String,
        
    },
    hostel_name:{
        type:String,
        
    },
    room_no:{
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
            name:{
                type:String
            },
            roll_no:{
                type:String
            },
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
       },
      complain_status:{
        type:String
      }

    // type: mongoose.Schema.Types.ObjectId,
    // ref: "Complain"
        }
    ]
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
   userSchema.methods.addComplain= async  function(name,roll_no,hostel_name,room_no,issue,message){
    try {
        this.complain=this.complain.concat({name,roll_no,hostel_name,room_no,issue,message,complain_status:"pending"}); // hostel_name:"hostel_name"        // saving the update part on database
       
        await this.save();
        return this.message

    } catch (error) {
        console.log(error)
    }
   }

   // add accept response of user
   userSchema.methods.addComplainStatus= async function(complain_status,_id,roll_no){
    try {
        console.log("now we are on destinaltion"+" "+complain_status,_id);
     
        const id="ObjectId"+"('"+_id+"')";
        console.log(id)
     //updateMany({_id:5},{$set:{ skills:["Sales Tax"]}})
     //const check=this.complain.findOne({"_id":id})
     
     const user= await User.findOne({roll_no: roll_no})

    //  const  complaint = user.complain.find((el) => {
    //     const sid = JSON.parse(JSON.stringify(el._id))
    //     console.log(sid.toString(), _id)
    //     return sid === _id;
    //  })

     let ctr = 0;
     for(let cmp of user.complain) {
        if(JSON.parse(JSON.stringify(cmp._id)) === _id) {
            user.complain[ctr].complain_status = complain_status;
            user.save();
            break;
        }
        ctr++;
     }

     if(ctr == user.complain.length) {
        //err not found
     }
    
    //  console.log("this is cmp" , complaint);

    //  complaint.complain_status = complain_status;

     console.log(user)
       // saving the update part on database  
        //await this.save();
        // return this.message
    

    } catch (error) {
        console.log(error)
    }
   }


const User= mongoose.model('USER',userSchema);
 module.exports=User;



 