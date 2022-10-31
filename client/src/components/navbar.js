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

    

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/complain">Complain</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/help">Help Seeking</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/profile">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Registration</NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className="nav-link" to="/adminStatus">AdmStatus</NavLink>
      </li>
      
    </ul>
  </div>
  </nav>
  </>
 )
}
 export default Navbar;
