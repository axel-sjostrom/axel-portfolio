import React from "react";
import { Container, Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function ProjectsView (props){
    const overClassName = props.overClassName;
    const underClassName = props.underClassName;
    const titles = ["Digital Projects", "Physical Projects", "Other Projects"];

    return (
        <div  className={overClassName}>
            <Container>
                
            <Row>
                <Col className={underClassName}>
                    <Image src="../pictures/awyeah.PNG" thumbnail />
                    App Prototypes
                </Col>
                
                <Col className={underClassName}>
                    Physical Projects
                </Col>
            </Row>
            </Container>
        </div>
    );
}

export default ProjectsView;