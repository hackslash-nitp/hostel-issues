import React,{useEffect,useState} from 'react'
import StatusBox from './statusBox'
import "./styles/admStatus.css"
import { useNavigate } from 'react-router-dom'

const AdminStatus = () => {
 
  const [userData,setUserData]=useState([]);
      
  const navigate=useNavigate();
 const adminComplain= async()=>{
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
       setUserData(data);
    } catch (error) {
     navigate("/login")
        console.log(error);
    }
 }


     console.log(userData)
      var b1=[];
     for(var i=0;i<(userData.length);i++){
        b1.push(userData[i].complain)
      }

    const flattened = b1.flatMap(num => num);
         console.log(flattened)    


     useEffect(()=>{
   
       adminComplain();
  },[])

  return (
    <div>
      {flattened?.map((data) => (
        <StatusBox
        hostel_name={data.hostel_name}
        room_no={data.room_no}
        issue={data.issue}
        message={data.message}
        />
      ))}
      </div>
  )
}

export default AdminStatus
