import React from "react";
import { Container, Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

//väldigt viktigt ifall bildernas förvaringsplats ändras att rätta till github-url:en
function ProjectsHeaderView (props){
    const overClassName = props.overClassName;
    const underClassName = props.underClassName;
    const titles = ["Digital Projects", "Physical Projects", "Other Projects"];

    return (
        <div  className={overClassName}>

            <Container>
                
            <Row>
                <Col className={underClassName}>
                    <Image src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/master/src/pictures/awyeah.PNG" thumbnail /> 
                    App Prototypes
                </Col>
                
                <Col className={underClassName}>
                    <Image src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/master/src/pictures/awyeah.PNG" thumbnail /> 
                    Physical Projects
                </Col>
            </Row>
            </Container>

        </div>
    );
}

export default ProjectsHeaderView;