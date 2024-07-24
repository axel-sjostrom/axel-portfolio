import React from "react";
import ProjectsView from "../view/ProjectsView";

function ProjectsPresenter(props){
    return(
        <ProjectsView 
        overClassName={"App-project-over"}
        projectStyleName={"App-project-under"}/>
    )
}

export default ProjectsPresenter;