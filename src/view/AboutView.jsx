import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function AboutView(props){
    return(
        <div style={{"background-color":"#fffbec"}}>
        <Container className="App-project-under">

            <Row style={{"marginTop":"10vh"}}>
                <Col>
                <h1>About Axel</h1>
                <p>
                    I am a newly graduated engineer in media technology from KTH Royal Institute of Technology in Stockholm Sweden and I love working with HCI! In the many different projects I have been a part of at university, I have learnt so much about designing in teams - identifying user needs, exploring solutions, prototyping and evaluating. I will fit in well in any design team!
                </p>
                </Col>

                <Col>
                    <img style={{"max-width":"100%"}} src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/nya-projects/src/pictures/me.jpg"></img>
                </Col>
            </Row>

        </Container>
        </div>
    )
}

export default AboutView;