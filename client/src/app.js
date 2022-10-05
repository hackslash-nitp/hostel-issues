import React from "react";
import Navbar from "./components/navbar.js";
import Home from "./components/home.js";
import Status from "./components/status.js";
import Complain from "./components/complain.js";
import Help from "./components/help.js";
import Login from "./components/login.js";

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