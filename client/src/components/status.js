import React,{useState,useEffect} from "react";
import QueryMainCard from "./queryMainCard";
import {useNavigate} from "react-router-dom";
//this dummy 'dataList' will come from backend having data like below which will be further used to build <QueryMainCard>
const dataList = [
  { number: "#935680", complain: "Fan not Working", status: "Pending" },
  { number: "#236800", complain: "Water Leakage", status: "Resolved" },
  { number: "#935676", complain: "Faulty Lift", status: "Rejected" },
];



function Status() {

  const navigate=useNavigate();
  const [userData,setUserData]=useState({});
      
 const userStatus= async()=>{
    try {
      const res= await fetch('/status',{
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

       // if enter email belongs to admin then render admstatsu page
       if(data.email=="admin@gmail.com"){
        navigate("/adminStatus")
       }else{

       setUserData(data);
       }
    } catch (error) {
     navigate("/login")
        console.log(error);
    }
 }
   
  useEffect(()=>{
    userStatus();
  },[])
    
  return (
    <div>
      {userData.complain?.map((data) => (
        <QueryMainCard
          key = {data._id}
          numberText={data._id}
          complainText={data.message}
          statusText={data._id}
        ></QueryMainCard>
      ))}
      </div>
  );
}

export default Status;