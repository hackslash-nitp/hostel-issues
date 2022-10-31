import React from 'react'
import Profilepic from "../images/profilephoto.png"
import "./styles/admStatus.css";


const StatusBox = () => {
  return (
    <>
    <div className='status-main-box mt-5 mb-5'>
      <div className='row status-block-cover'>
        <div className="col-md-3">
        <img src={Profilepic} alt="shashank"  className='profile-pic'/>  
        <div className='std-info'>
        <p className='info'>Shashk yadav</p>
        <p className='info'>roll no:2104125</p>
        <p className='info'>room no.</p>
        <p className='info'>hostel</p>
        </div>
        </div>
        <div className="col-md-6">
            <h5>Complain:Electricity</h5>
         <p><b>Description:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam blanditiis, voluptatum odio itaque repellat repudiandae. Ratione sint pariatur eveniet quod.</p>
        </div>
        <div className="col-md-3">
        <div className="status-buttons">
               <input type="submit" name="signup" id="signup" className='status-accept mr-1' value='Accept'  />
               <input type="submit" name="signup" id="signup" className='status-reject mr-1' value='Reject'  />
               <input type="submit" name="signup" id="signup" className='status-complete mr-1 p' value='Complete' />
               </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default StatusBox
