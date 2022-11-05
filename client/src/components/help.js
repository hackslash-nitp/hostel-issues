import React, { useState } from "react";
import IssueCard from "./issueCard.js";
import "./styles/help.css";

function Help(){
   const [searchTerm,setSearchTerm] = useState("");

   function handleChange(event){
      const newSearchTerm = event.target.value;
      setSearchTerm(newSearchTerm);
   }

   function handleSubmit(event){
      event.preventDefault();
      console.log(searchTerm);
   }

   return <div>
   <div className = "searchArea">
      <h1>Welcome to the Hostel Student Help Community</h1>
      <form onSubmit = {handleSubmit}>
      <input type = "text" onChange = {handleChange} value = {searchTerm} placeholder="Describe your issue" autoComplete ="off"/>
      <button type="submit">
      <span className="material-symbols-outlined">search</span>
      </button>
      </form>
      </div>
      <div className = "help-content">
         <div className = "issues">
         <h4>Common issues</h4>
         <IssueCard text = "How to write a leave letter?"/>
         <IssueCard text = "How to write a leave letter?"/>
         <IssueCard text = "How to write a leave letter?"/>
         </div>
         <div className = "issues">
         <h4>Hostel hacks</h4>
         <IssueCard text = "How to write a leave letter?"/>
         <IssueCard text = "How to write a leave letter?"/>
         <IssueCard text = "How to write a leave letter?"/>
         </div>
      </div>
   </div>
}

export default Help;