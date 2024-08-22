import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Collapse from 'react-bootstrap/Collapse';
import { Nav } from "react-bootstrap";

function AppPrototypesView(props){
    const [show1, setShow1] = useState(false);

    const openShow1 = () => setShow1(true);
    const closeShow1 = () => setShow1(false);

    const [show2, setShow2] = useState(false);

    const openShow2 = () => setShow2(true);
    const closeShow2 = () => setShow2(false);

    const [show3, setShow3] = useState(false);

    const openShow3 = () => setShow3(true);
    const closeShow3 = () => setShow3(false);


    return(
    <div style={{"background-color":"#fffbec"}}>
    {
        //CHANGE BACKGROUND COLOR HERE ^^ ^^ ^^ 
    }   
            <Container className="App-project-under">
                {
                    //Just exploring how this should work
                } 
                <Row style={{"margin-top":"100px"}}>
                    <Col>
                    <h1 className="inter-h1" style={{"text-align":"center"}}>App Prototypes</h1>
                    <p >During my master's program in Interactive Media Technology at KTH Royal Institute of Technology, I had the opportunity to take the course User Experience Design and Evaluation. As a group project together with three other students, prototypes were developed in figma according to challenging design briefs given by external industry professionals. The best of those projects are presented here.</p>
                    </Col>
                    <Col>
                    <img src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/nya-projects/src/pictures/PortfolioPNGs/QRforappprototypes.png"></img>
                    &lt;-- Check them out live on figma!
                    </Col>
                </Row>


                {//Project 1 start
                }
                <Row xs={1} md={2} style={{"margin-top":"100px" }}>
                    <Col style={{}}>
                        <Nav.Link onClick={()=>{openShow1();}}>
                            <Image className="App-project-thumbnail-image"src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/nya-projects/src/pictures/PortfolioThumbnails/spotifythumbnail.png"/>                        
                        </Nav.Link>
                    </Col>

                    <Col style={{}}>
                        <h1 className="App-project-thumbnail-header-right">Spotify Discovery Challenge</h1>
                    </Col>
                </Row>
                <Collapse in={show1}>
                    <Row>
                        <div style={{"position":"relative"}}>    
                            <div className="App-project-close" style={{"border-color":"black", "text-align": "center"}}>
                                        <Nav.Link  onClick={()=>{closeShow1();}}><h1>X</h1></Nav.Link>                                        
                            </div>
                            <img className="App-project-content" style={{"border-color":"#1ed760"}} src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/nya-projects/src/pictures/PortfolioPNGs/SpotifyChallengeContent.png"></img>
                        </div>
                    </Row>      
                </Collapse>
                {//Project 1 end, Project 2 start
                }
                <Row xs={1} md={2} style={{"margin-top":"100px"}}>
                    <Col>
                        <h1 className="App-project-thumbnail-header-left">Bank Gamification Challenge</h1>
                    </Col>

                    <Col>
                        <Nav.Link onClick={()=>{openShow2();}}>
                            <Image className="App-project-thumbnail-image"src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/nya-projects/src/pictures/PortfolioThumbnails/bankappthumbnail.png"/>
                        </Nav.Link>.
                    </Col>
                </Row>
                <Collapse in={show2}>
                    <Row>
                        <div style={{"position":"relative"}}> 
                            <div className="App-project-close" style={{"border-color": "white"}}>                      
                                <Nav.Link onClick={()=>{closeShow2();}}><h1 style={{"color":"white", "text-align": "center"}}>X</h1></Nav.Link>
                            </div> 
                            <img className="App-project-content" style={{"border-color":"#2c64e3"}}src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/nya-projects/src/pictures/PortfolioPNGs/BankAppChallengeContent.png"></img>
                        </div>
                    </Row>
                </Collapse>

                {//Project 2 end, Project 3 start
                }
                <Row xs={1} md={2} style={{"margin-top":"100px"}}>
                    <Col style={{}}>
                        <Nav.Link onClick={()=>{openShow3();}}>
                            <Image className="App-project-thumbnail-image"src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/nya-projects/src/pictures/PortfolioThumbnails/tinderthumbnail.png"/>                        
                        </Nav.Link>
                    </Col>

                    <Col style={{}}>
                        <h1 className="App-project-thumbnail-header-right">Tinder Nudging Challenge</h1>
                    </Col>
                </Row>

                <Collapse in={show3} style={{}}>
                    <Row>
                        <div style={{"position":"relative"}}> 
                            <div className="App-project-close" style={{"border-color": "white"}}>                      
                                <Nav.Link onClick={()=>{closeShow3();}}><h1 style={{"color":"white", "text-align": "center"}}>X</h1></Nav.Link>
                                </div>
                            <img className="App-project-content" style={{"border-color":"#ea457d"}}src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/nya-projects/src/pictures/PortfolioPNGs/TinderChallengeContent.png "></img>

                        </div>
                    </Row>
                </Collapse>
            </Container>
    </div>)
}

export default AppPrototypesView;