import React, { useEffect, useState } from 'react'
import Profilepic from "../images/profilephoto.png"
import "./styles/about.css"
import "bootstrap/dist/css/bootstrap.css";
import {useNavigate} from "react-router-dom";

const Profile = () => {
     const [userData,setUserData]=useState({});
      
   const navigate=useNavigate();
  const callAboutPage= async()=>{
     try {
       const res= await fetch('/about',{
           method:"GET",
           headers:{
            Accept:"appllication/json",
            "Content-Type":"application/json"
           },
           credentials:"include"
       });
       const data= await res.json();
        console.log(data);
      
        if(!res.status===200){
          const error=new Error(res.error);
          throw error;
        }
        setUserData(data);
     } catch (error) {
      navigate("/login")
         console.log(error);
     }
  }

   useEffect(()=>{
    
      callAboutPage();
   },[])

    
  return (
    <>
     <div className="container emp-profile mb-5">
      <form method="GET">
        <div className="row">
          <div className="col-md-4">
            <img src={Profilepic} alt="shashank" />
          </div>
          <div className="col-md-5 mt-5">
            <h5>{userData.name}</h5>
            <h6>{userData.work}</h6>
          </div>
          <div className="col-md-1 mt-1">
          <input type="submit" className='profile-edit-btn' name='btnAddMore' value="Edit Profile"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-2">
          <p><b>BRANCH:</b> Electronics and Communication Engineering</p>
          </div>
          <div className="col-md-6 mt-1">
          <p><b>ROLL NO:</b> 2104125</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-2">
          <p><b>HOSTEL:</b> Brahmaputra Hostel</p>
          </div>
          <div className="col-md-6 mt-1">
          <p><b>ROOM NO:</b> E-403</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-2">
          <p><b>PHONE NO:</b> {userData.phone}</p>
          </div>
          <div className="col-md-6 mt-1">
          <p><b>EMAIL :</b>{userData.email}</p>
          </div>
        </div>
      </form>
    
     </div>
    </>
  )
}

export default Profile;