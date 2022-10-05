import React from "react";
import Navbar from "./navbar.js";
import Home from "./home";
import Status from "./status.js";
import Complain from "./complain.js";
import Help from "./help.js";
import Login from "./login.js";

import { BrowserRouter,Routes,Route} from "react-router-dom";

function App(){
    return <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/status" element = {<Status/>}/>
        <Route path = "/complain" element = {<Complain/>}/>
        <Route path = "/help" element = {<Help/>}/>
        <Route path = "/login" element = {<Login/>}/>
    </Routes>
    </BrowserRouter>

}

export default App;