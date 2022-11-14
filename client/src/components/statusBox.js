import React from 'react'
import Profilepic from "../images/profilephoto.png"
import "./styles/admStatus.css";


const StatusBox = (props) => {

 // send the update to the backend
  const std={_id:props.issue};
  const acceptComplain=async (e)=>{
    console.log(props.id)
    const _id=props.id;
    const complain_status="accepted";
    const roll_no=props.roll_no;
    e.preventDefault();
    const res= await fetch("/adminResponse",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        complain_status,roll_no,_id
      })
     })
     const data=await res.json();
  if(res.status!=201 || !data){
    window.alert("Something wrong");
    console.log("Something wrong");
  }else{
    window.alert("Response send Successfully");
    console.log("Reaction send Successfully");
  }

}



const rejectComplain=async (e)=>{
  console.log(props.id)
  const _id=props.id;
  const complain_status="rejected";
  const roll_no=props.roll_no;
  e.preventDefault();
  const res= await fetch("/adminResponse",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      complain_status,roll_no,_id
    })
   })
   const data=await res.json();
if(res.status!=201 || !data){
  window.alert("Something wrong");
  console.log("Something wrong");
}else{
  window.alert("Response send Successfully");
  console.log("Reaction send Successfully");
}

}




const completeComplain=async (e)=>{
  console.log(props.id)
  const _id=props.id;
  const complain_status="completed";
  const roll_no=props.roll_no;
  e.preventDefault();
  const res= await fetch("/adminResponse",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      complain_status,roll_no,_id
    })
   })
   const data=await res.json();
if(res.status!=201 || !data){
  window.alert("Something wrong");
  console.log("Something wrong");
}else{
  window.alert("Response send Successfully");
  console.log("Reaction send Successfully");
}

}
   
  

  return (
    <>
    <div className='status-main-box mt-5 mb-5'>
      <div className='row status-block-cover'>
        <div className="col-md-3">
        <img src={Profilepic} alt="shashank"  className='pro-pictue'/>  
        <div className='std-info'>
        <p className='info'>{props.name}</p>
        <p className='info'>HOSTEL:{props.hostel_name}</p>
        <p className='info'>ROOM NO.:{props.room_no}</p>
        <p className='info'></p>
        </div>
        </div>
        <div className="col-md-6">
            <h5>Complain:{props.issue}</h5>
         <p><b>Description:</b>{props.message}</p>
        </div>
        <div className="col-md-3">
        <div className="status-buttons">
               <input type="submit" name="signup" id="signup" className='status-accept mr-1' value='Accept' onClick={acceptComplain} />
               <br/>
               <input type="submit" name="signup" id="signup" className='status-reject mr-1' value='Reject' onClick={rejectComplain} />
                <br/>
               <input type="submit" name="signup" id="signup" className='status-complete mr-1 p' value='Complete' onClick={completeComplain}/>
               </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default StatusBox
