import React from "react";
import NavigationView from "../view/NavigationView";

function NavigationPresenter(props){
    return (
        <NavigationView 
            clickedMyName={()=>{window.location.hash="#mainpage";}}     
            clickedContact={()=>{ window.location.hash="#contact";}}
            clickedAbout={()=>{window.location.hash="#about";}}       
        
        />
    )
}
export default NavigationPresenter;