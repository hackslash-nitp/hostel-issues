import React,{useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../images/logo.png";
import "./styles/navbar.css";

function Navbar(){
   const [isVisible,setIsVisible] = useState(false);
   var location = useLocation().pathname;
   var active = 1;

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
      
    </ul>
  </div>
}

export default Navbar;
