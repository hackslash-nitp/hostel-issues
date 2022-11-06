import React,{useState,useEffect} from "react";
import Card from "./card.js";
import "./styles/homeBody.css";
import {useNavigate} from "react-router-dom";

function Home(){
   
   const [userData,setUserData]=useState({});
      
   const navigate=useNavigate();
  const homeInfo= async()=>{
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
    
      homeInfo();
   },[])


   return <div>
      <div className = "profile">
         <h1>Welcome <br/>{userData.name} !!!</h1>
         <div className = "avatar">
            <img src = "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" alt = "user-avatar"/>
         </div>
      </div>
      <div className="status">
      <Card text = "Number of complains filed" num = "5" col = "purple"/> 
      <Card text = "Number of complains resolved" num = "3" col = "green"/>
      <Card text = "Number of complains rejected" num = "2" col = "red"/>
      <Card text = "Number of complains pending" num = "0" col = "blue"/>
      </div>
   </div>
}

export default Home;