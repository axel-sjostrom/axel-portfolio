import React from "react";
import MainPageView from "../view/MainPageView";

function MainPagePresenter(props){
    return(
        <MainPageView 
        overClassName={"App-project-over"}
        projectStyleName={"App-project-under"}
        clickedApps={()=>{window.location.hash="#apps";}}
        clickedPhysicals={()=>{window.location.hash="#physicals";}}
        
        />

    )
}

export default MainPagePresenter;