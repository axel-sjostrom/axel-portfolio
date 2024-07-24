import React from "react";
import NavigationView from "../view/NavigationView";

function NavigationPresenter(props){
    return (
        <NavigationView 
            clickedMyName={()=>{window.location.hash="#projects";}}
            clickedAbout={()=>{window.location.hash="#about";}}            
            clickedContact={()=>{ window.location.hash="#contact";}}
        
        />
    )
}
export default NavigationPresenter;