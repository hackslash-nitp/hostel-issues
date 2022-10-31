import React,{useState} from "react";
import Log_pic from "../images/login_pic.jpg"
import "./styles/signup.css"
import { NavLink,useNavigate } from 'react-router-dom'

function Login(){
     const navigate=useNavigate();

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');


    const loginUser= async(e)=>{
       e.preventDefault();

       const res= await fetch("/signin",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({email,password})
       })

       const data= res.json();
       if(email=="admin@gmail.com" && password=="admin"){
        window.alert("Login Successfully")
        navigate("/adminStatus");
       }


      else if(res.status===422 || !data){
        window.alert("Invalid Credential")
       }else{
        window.alert("Login Successfully")
        navigate("/")
       }
    }

    return (
        <>
        <div className="body">
<div className="container3">
      <forrm method="POST">
        <div className="row">
            <div className=" log_cont col-md-6">
                <div>
                <img className='log_pic' src={Log_pic} alt="" />
                </div>
                <NavLink className='already_acc' to='/signup'>Don't have an account?</NavLink>
            </div>
            <div className=" login register col-md-6">
                <br/>
                <h3>Login</h3>
                <br/>
                <input type="email" placeholder='Your Email' name='email' id='email' autoComplete='off'
                value={email}
               onChange={(e)=>setEmail(e.target.value)}
                />
                <input type="password" placeholder='Password' name="password" id="password" autoComplete="off"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
               
                <br/>
                <br/>
                <div className="form-group form-button">
               <input type="submit" name="signup" id="signup" className='form-submit loginbtn' value='Register' onClick={loginUser} />
               </div>
            </div>
        </div>
      </forrm>
  </div>
  </div>
        </>
    )
}

export default Login;