import React,{useState} from 'react'
import Pic from "../images/signup_pic.jpg"
import "./styles/signup.css"
import { NavLink,useNavigate} from 'react-router-dom'

const Signup = () => {

   const navigate=useNavigate();
  const [user,setUser]=useState({
    name:"",email:"",work:"",phone:"",password:"",cpassword:""});

    let name,value;
    const handleInputs=(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value});
    }

   const PostData= async(e)=>{
    e.preventDefault();
 
    // array destructuring
    const {name,email,phone,branch_name,roll_no,hostel_name,room_no,password,cpassword}=user;

   const res= await fetch("/register",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name,email,phone,branch_name,roll_no,hostel_name,room_no,password,cpassword
    })
   })
  const data=await res.json();
  if(res.status===422|| !data){
    window.alert("Invalid Registration");
    console.log("Invalid registration");
  }else{
    window.alert(" Registration Successful");
    console.log(" Registration Successful");

    navigate("/login")
  }
  }

  return (
  <>
  <div className="body">
  <div className="container2">
      <form className='register-form' id='register-form' method='POST'>
        <div className="row">
            <div className="sign_cont col-md-6">
              <div>
                <img className='signupPic' src={Pic} alt="" />
                </div>
                <NavLink className='already_acc' to='/login'>Already have an account?</NavLink>
            </div>
            <div className=" register col-md-6">
                
               
                <br/>
                <h3>Sign up</h3>
                <br/>
                <input type="text" placeholder='Your Name' name='name' id='name' autoComplete='off'
                value={user.name}
                onChange={handleInputs}
                />
                <input type="email" placeholder='Your Email' name='email' id='email' autoComplete='off'
                value={user.email}
                onChange={handleInputs}
                />
                <input type="number" placeholder='Mobile No.' name='phone' id='phone' autoComplete='off'
                value={user.phone}
                onChange={handleInputs}
                />
                

                <input type="text" placeholder='Your Branch' name='branch_name' id='branch_name' autoComplete='off'
                value={user.branch_name}
                onChange={handleInputs}
                />
                <input type="text" placeholder='Your Roll number' name='roll_no' id='roll_no' autoComplete='off'
                value={user.roll_no}
                onChange={handleInputs}
                />
                <input type="text" placeholder='Your hostel name' name='hostel_name' id='hostel_name' autoComplete='off'
                value={user.hostel_name}
                onChange={handleInputs}
                />
                <input type="text" placeholder='Your room no,' name='room_no' id='room_no' autoComplete='off'
                value={user.room_no}
                onChange={handleInputs}
                />



                <input type="password" placeholder='Password' name='password' id='password' autoComplete='off'
                value={user.password}
                onChange={handleInputs}
                />
                <input type="password" placeholder='Confirm your Password' name='cpassword' id='cpassword' autoComplete='off'
                value={user.cpassword}
                onChange={handleInputs}/>
                <br/>
                <br/>
                <div className="form-group form-button">
               <input type="submit" name="signup" id="signup" className='form-submit' value='Register'  onClick={PostData}/>
               </div>
            </div>
        </div>
      </form>
  </div>
  </div>
  </>
  )
}

export default Signup
