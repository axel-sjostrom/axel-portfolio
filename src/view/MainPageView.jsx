import React from "react";
import { Container, Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

//väldigt viktigt ifall bildernas förvaringsplats ändras att rätta till github-url:en
function MainPageView (props){
    const overClassName = props.overClassName;
    const underClassName = props.projectStyleName;
    {
    //    const titles = ["Digital Projects", "Physical Projects", "Other Projects"];
    }

    return (
        <div  className={overClassName}>
            <h1 className="inter-h1" style={{"text-align":"left"}}>UX and Interaction Design from Stockholm, Sweden.</h1>
            <Container>
                <Row>
                <Navbar>
                    <Col>
                        <Nav.Link onClick={()=>{props.clickedApps();}} >
                            <Image src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/nya-projects/src/pictures/PortfolioThumbnails/bankappthumbnail.png" /> 
                            <h2>App Prototypes</h2>
                        </Nav.Link>
                    </Col>
                    
                    <Col>
                        <Nav.Link onClick={()=>{props.clickedPhysicals();}}>
                            <Image src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/nya-projects/src/pictures/PortfolioThumbnails/tobiiThumbnail.png" alt="Source: https://gaming.tobii.com/onboarding/how-to-tobii-eye-tracker-4c/"/> 
                            <h2>Physical Projects</h2>
                        </Nav.Link>
                    </Col>
                    </Navbar>
                </Row>
            </Container>
        </div>
    );
}

export default MainPageView;