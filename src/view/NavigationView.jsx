import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//länkarna ska hända med "show", fixa senare.
function NavigationView(props){

    return (
        <Navbar className="App-header">
          <Container>
            <Nav.Link onClick={()=>{props.clickedMyName();}}>It's Axel Sjöström.</Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={()=>{props.clickedContact();}}>Contact</Nav.Link>
                <Nav.Link onClick={()=>{props.clickedAbout();}}>About Me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavigationView;