import React from "react";
import classes from './home.module.css';
import Carousel from "./carousel";
import ButtonSection from "./button_section";

function Home(){
    return (
        <div className={classes.home}>
           <h1 className = {classes.welcome}>Welcome Shazeb Khan</h1>
          <Carousel/>
          <ButtonSection/>
        </div>
    );
}

export default Home;