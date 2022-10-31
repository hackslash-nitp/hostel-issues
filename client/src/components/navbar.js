<<<<<<< HEAD
import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import Logo from "../images/logo.png"
import { NavLink } from 'react-router-dom'
import "./styles/navbar.css"


// import React,{useState} from 'react';
// import { Link, useLocation, NavLink } from 'react-router-dom';
// import logo from "../images/logo.png";
// import "./styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <img className='logo' id='logo' src={Logo} alt="Logo" />
  < NavLink className="navbar-brand" to="/"> HOSTEL_ISSUES</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

    
=======
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../images/logo.png";
import "./styles/navbar.css";

function Navbar(){
   var location = useLocation().pathname;
   var active = 1;
   
   if(location==='/')
   active = 1;
   else if(location==="/status")
   active = 2;
   else if(location==="/complain")
   active = 3;
   else if(location==="/profile")
   active = 4;
   else 
   active = 5;
>>>>>>> 3b5f22738ecd0d947b99e995f2f0f196ca585515

   return (
    <nav className="navbar navbar-expand-lg bg-primary">
    <Link to = "/"><img className = "logo" src = {logo} alt = "logo"/></Link>
  <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse navLinks" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <div className={active===1?'activeLink':'nonActive'}><h3><Link to = "/">Home</Link></h3></div>
      </li>
      <li className="nav-item">
      <div className={active===2?'activeLink':'nonActive'}><h3><Link to = "/status">Status</Link></h3></div>
      </li>
      <li className="nav-item">
      <div className={active===3?'activeLink':'nonActive'}><h3><Link to = "/complain">Complain</Link></h3></div>
      </li>
      <li className="nav-item">
      <div className={active===4?'activeLink':'nonActive'}><h3><Link to = "/profile">Profile</Link></h3></div>
      </li>
      <li className="nav-item">
      <div className={active===5?'activeLink':'nonActive'}><h3><Link to = "/help">Help</Link></h3></div>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src = "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" alt = "user-avatar"/>
        </Link>
        <div className="dropDownMenu dropdown-menu" aria-labelledby="navbarDropdown">
        <h3><Link to = "/login">Account</Link></h3>
        <h3><Link to = "/login">Settings</Link></h3>
        <h3><Link to = "/login">History</Link></h3>
        <h3><Link to = "/login">Logout</Link></h3>
        </div>
      </li>
<<<<<<< HEAD
      <li className='nav-item'>
        <NavLink className="nav-link" to="/adminStatus">AdmStatus</NavLink>
      </li>
      
    </ul>
  </div>
  </nav>
  </>
 )
=======
    </ul>
  </div>
</nav>
   );
>>>>>>> 3b5f22738ecd0d947b99e995f2f0f196ca585515
}
 export default Navbar;
