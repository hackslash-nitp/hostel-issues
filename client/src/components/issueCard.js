import React from "react";
import "./styles/issueCard.css";

function IssueCard(props){
    return <div className = "issue">
    <h3>{props.text}</h3>
    </div>
}

export default IssueCard;