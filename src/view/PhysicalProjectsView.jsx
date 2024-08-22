import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Collapse from 'react-bootstrap/Collapse';
import { Nav } from "react-bootstrap";
import testPresenter from "../presenter/TestPresenter.jsx";

function PhysicalProjectsView(props){
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
            <Container className="App-project-under">
                {
                    //Just exploring how this should work
                } 
                <Row style={{"margin-top":"100px"}}>
                    <Col>
                    <h1 className="inter-h1" style={{"text-align":"center"}}>Physical Projects</h1>
                    <p >During my master's program in Interactive Media Technology at KTH Royal Institute of Technology, I had the opportunity to interaction design outside of app development. These following projects are more rooted in the physical world and show an understanding in finding and solving problems.</p>
                    </Col>
                </Row>
{
    //topp höger botten vänster
}

                {//Project 1 start
                }
                <Row xs={1} md={2} style={{"margin-top":"100px" }}>
                    <Col style={{}}>
                        <Nav.Link onClick={()=>{openShow1();}}>
                            <Image className="App-project-thumbnail-image"src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/nya-projects/src/pictures/awyeah.PNG"/>                        
                        </Nav.Link>
                    </Col>

                    <Col style={{}}>
                        <h1 className="App-project-thumbnail-header-right">Tobii Eye Tracker Project</h1>
                    </Col>
                </Row>
                <Collapse in={show1}>
                    <Row>
                        <div style={{"position":"relative"}}>    
                            <div className="App-project-close" style={{"border-color":"white", "text-align": "center"}}>
                                        <Nav.Link  onClick={()=>{closeShow1();}}><h1 style={{"color":"white"}}>X</h1></Nav.Link>                                        
                            </div>
                            <div style={{
                                  "position": "absolute", 
                                  "top": "6024px", 
                                  "left": "566px"

                            }}>
                                <iframe width="815" height="458" src="https://www.youtube.com/embed/2GU2fbKtsWw?si=HGXnuJOfcQ5bAgCO&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                            <img className="App-project-content" style={{"border-style": "solid solid none solid"}} src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/nya-projects/src/pictures/PortfolioPNGs/firstHalfTrapped.png"></img>
                            <img className="App-project-content" style={{"width":"100%", "border-style": "none solid none solid"}} src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/nya-projects/src/pictures/PortfolioPNGs/videoSlideTrapped.png"></img>
                            <img className="App-project-content" style={{"border-style": "none solid solid solid"}}  src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/nya-projects/src/pictures/PortfolioPNGs/secondHalfTrapped.png"></img>
                             
                        </div>
                    </Row>      
                </Collapse>
                {//Project 1 end, Project 2 start
                }
                <Row xs={1} md={2} style={{"margin-top":"100px"}}>
                    <Col>
                        <h1 className="App-project-thumbnail-header-left">Project 2</h1>
                    </Col>

                    <Col>
                        <Nav.Link onClick={()=>{openShow2();}}>
                            <Image className="App-project-thumbnail-image"src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/nya-projects/src/pictures/awyeah.PNG"/>
                        </Nav.Link>.
                    </Col>
                </Row>
                <Collapse in={show2}>
                    <Row>
                        <div style={{"position":"relative"}}> 
                            <div className="App-project-close" style={{"border-color": "white"}}>                      
                                <Nav.Link onClick={()=>{closeShow2();}}><h1 style={{"color":"white", "text-align": "center"}}>X</h1></Nav.Link>
                            </div> 
                            {//<img className="App-project-content" style={{"border-color":"#2c64e3"}}src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/nya-projects/src/pictures/PortfolioPNGs/BankAppChallengeContent.png"></img>
                            }
                        </div>
                    </Row>
                </Collapse>

                {//Project 2 end, Project 3 start
                }
                <Row xs={1} md={2} style={{"margin-top":"100px"}}>
                    <Col style={{}}>
                        <Nav.Link onClick={()=>{openShow3();}}>
                            <Image className="App-project-thumbnail-image"src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/nya-projects/src/pictures/awyeah.PNG"/>                        
                        </Nav.Link>
                    </Col>

                    <Col style={{}}>
                        <h1 className="App-project-thumbnail-header-right">Project 3</h1>
                    </Col>
                </Row>

                <Collapse in={show3} style={{}}>
                    <Row>
                        <div style={{"position":"relative"}}> 
                            <div className="App-project-close" style={{"border-color": "white"}}>                      
                                <Nav.Link onClick={()=>{closeShow3();}}><h1 style={{"color":"white", "text-align": "center"}}>X</h1></Nav.Link>
                                </div>
                            {//<img className="App-project-content" style={{"border-color":"#ea457d"}}src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/nya-projects/src/pictures/PortfolioPNGs/TinderChallengeContent.png "></img>
                            }
                        </div>
                    </Row>
                </Collapse>
            </Container>
        </div>
    )
}

export default PhysicalProjectsView;