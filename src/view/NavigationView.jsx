import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function NavigationView(props){

    return (
        <Navbar className="App-header">
          <Container>
          
          <Nav className="me-auto" >
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Nav.Link onClick={()=>{props.clickedMyName();}}><h4>It's Axel Sjöström.</h4></Nav.Link>
              <Nav.Link onClick={()=>{props.clickedContact();}}><h4>Contact</h4></Nav.Link>
              <Nav.Link onClick={()=>{props.clickedAbout();}}><h4>About Me</h4></Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      );
}

export default NavigationView;