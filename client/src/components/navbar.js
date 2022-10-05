import React from "react";
import { Link,useLocation } from "react-router-dom";
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
   else
   active = 4;

   return <div className="nav">
     <h1><Link to = "/">Hostel Issues</Link></h1>
     <div className = "navLinks">
     <div className={active===1?'activeLink':''}><h3><Link to = "/">Home</Link></h3></div>
     <div className={active===2?'activeLink':''}><h3><Link to = "/status">Status</Link></h3></div>
     <div className={active===3?'activeLink':''}><h3><Link to = "/complain">Complain</Link></h3></div>
     <div className={active===4?'activeLink':''}><h3><Link to = "/help">Help</Link></h3></div>
     </div>
     </div>
}

export default Navbar;