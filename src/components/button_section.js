import React from "react";
import classes from "./buttonStyles.module.css";

function ButtonSection(){
    return <div className = {classes.buttonArea}>
        <button className = {`${classes.btn} ${classes.btn1}`}>Complaints</button>
        <button className = {`${classes.btn} ${classes.btn2}`}>? Need Help</button>
        <button className = {`${classes.btn} ${classes.btn3}`}>How to use</button>
    </div>;
}

export default ButtonSection;