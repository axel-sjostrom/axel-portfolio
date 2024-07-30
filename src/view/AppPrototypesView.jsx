import React from "react";
import { Container, Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Collapse from 'react-bootstrap/Collapse';

function AppPrototypesView(props){
    return(

     

  <div style={{"background-color":"#fffbec"}}>
    {
        //CHANGE BACKGROUND COLOR HERE ^^ ^^ ^^ 
    }   
            <Container className="App-project-under">
                {
                    //Just exploring how this should work
                } 
                <Row>
                    <h1>App Prototypes</h1>
                </Row>
                <Row>
                    <Col>
                        <Image className="App-project-thumbnail-image"src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/master/src/pictures/awyeah.PNG"/>
                    </Col>
                    <Col>
                        <h1 className="App-project-thumbnail-header-right">Project 1</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 className="App-project-thumbnail-header-left">Project 2</h1>
                    </Col>
                    <Col>
                        <Image className="App-project-thumbnail-image"src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/master/src/pictures/awyeah.PNG"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AppPrototypesView;