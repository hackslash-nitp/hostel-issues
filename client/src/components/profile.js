import React from 'react'
import Profilepic from "../images/profilephoto.png"
import "./styles/about.css"
import "bootstrap/dist/css/bootstrap.css";

const Profile = () => {
  return (
    <>
     <div className="container emp-profile mb-5">
      <form method="">
        <div className="row">
          <div className="col-md-4">
            <img src={Profilepic} alt="shashank" />
          </div>
          <div className="col-md-5 mt-5">
            <h5>SHASHANK YADAV</h5>
            <h6>Student</h6>
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
          <p><b>PHONE NO:</b> 1245XXXXXXXXX</p>
          </div>
          <div className="col-md-6 mt-1">
          <p><b>EMAIL :</b> abcd@gmail.com</p>
          </div>
        </div>
      </form>
    
     </div>
    </>
  )
}

export default Profile;
