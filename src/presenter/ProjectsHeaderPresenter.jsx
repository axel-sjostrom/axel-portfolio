import React from "react";
import ProjectsHeaderView from "../view/ProjectsHeaderView";

function ProjectsHeaderPresenter(props){
    return(
        <ProjectsHeaderView 
        overClassName={"App-project-over"}
        projectStyleName={"App-project-under"}/>
    )
}

export default ProjectsHeaderPresenter;