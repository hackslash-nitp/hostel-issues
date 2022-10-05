import React from "react";
import "./card.css";

function Card(props){
    var text = props.text;
    var num = props.num;
    var col = props.col;
   return <div className = "box">
     <h3>{text}</h3>
     <div className = "boxStatus" style = {{color:col}}>{num}</div>
   </div>
}

export default Card;