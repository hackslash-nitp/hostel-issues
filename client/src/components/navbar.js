import React,{useState} from "react";
import { Link,useLocation } from "react-router-dom";
import "./styles/navbar.css";

function Navbar(){
   var location = useLocation().pathname;

   const [isVisible,setIsVisible] = useState(false);
   
   var active = 1;
   if(location==='/')
   active = 1;
   else if(location==="/status")
   active = 2;
   else if(location==="/complain")
   active = 3;
   else
   active = 4;

   function handleClick(){
    setIsVisible(!isVisible);
    if(isVisible)
     document.getElementById("dropDownMenu").style.display = "none";
    else
    document.getElementById("dropDownMenu").style.display = "block";
   }

   return <div className="nav">
     <h1><Link to = "/">Hostel Issues</Link></h1>
     <div className = "navLinks">
     <div className={active===1?'activeLink':'nonActive'}><h3><Link to = "/">Home</Link></h3></div>
     <div className={active===2?'activeLink':'nonActive'}><h3><Link to = "/status">Status</Link></h3></div>
     <div className={active===3?'activeLink':'nonActive'}><h3><Link to = "/complain">Complain</Link></h3></div>
     <div className={active===4?'activeLink':'nonActive'}><h3><Link to = "/help">Help</Link></h3></div>
     </div>
     <div className = "account" onClick = {handleClick}>
      <img src = "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" alt = "user-avatar"/>
     </div>
     <div id = "dropDownMenu" className = "dropDownMenu">
      <h3><Link to = "/login">Account</Link></h3>
      <h3><Link to = "/login">Settings</Link></h3>
      <h3><Link to = "/login">History</Link></h3>
      <h3><Link to = "/login">Logout</Link></h3>
     </div>
     </div>
}

export default Navbar;