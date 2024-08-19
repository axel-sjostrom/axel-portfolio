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
                <Row style={{"border-style": "solid"}}>
                    <h1>App Prototypes</h1>
                </Row>


                {//Project 1 start
                }
                <Row xs={1} md={2} style={{"border-style": "solid"}}>
                    <Col style={{"border-style": "solid"}}>
                        <Nav.Link onClick={()=>{openShow1();}}>
                            <Image className="App-project-thumbnail-image"src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/master/src/pictures/awyeah.PNG"/>                        
                        </Nav.Link>
                    </Col>

                    <Col style={{"border-style": "solid"}}>
                        <h1 className="App-project-thumbnail-header-right">Project 1</h1>
                    </Col>

                    <Col style={{"border-style": "solid"}}>
                    <Collapse in={show1} style={{"border-style": "solid"}}>
                    <Container>    
                                    <Nav.Link onClick={()=>{closeShow1();}}>X</Nav.Link>
                                    

                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod nunc arcu. Donec fermentum vestibulum erat, nec pharetra erat venenatis at. Vestibulum eu elit massa. Nullam vitae justo est. Cras ante nisi, gravida at congue nec, imperdiet id arcu. Aliquam erat volutpat. Donec sit amet pretium turpis, a dapibus nulla. Vivamus ex tortor, sodales eu enim quis, rhoncus rutrum sapien. Aliquam ut auctor eros, sit amet luctus nibh. Mauris molestie, ligula a ornare tempus, tortor mi suscipit arcu, porttitor aliquam eros nunc eu nunc. Donec placerat auctor turpis, vel aliquam augue molestie scelerisque. Phasellus consequat rhoncus augue, sit amet commodo tortor rhoncus sed. Maecenas auctor ex eu arcu luctus egestas. Maecenas pellentesque commodo purus sed pretium.

                                    Sed a tempus quam, ut cursus dui. Donec mattis rhoncus augue vel luctus. Maecenas et porttitor purus, vitae consequat sem. Suspendisse sed justo dapibus, maximus nunc et, finibus nibh. Duis ac nibh erat. Cras ornare commodo feugiat. Mauris condimentum neque id placerat dignissim. Curabitur eleifend orci sit amet vulputate ultrices. Donec in mauris at dui euismod varius sed at odio. Sed ac finibus metus. Aliquam sodales hendrerit dui, ut pharetra libero sodales eget.

                                    Quisque commodo tellus purus, vitae interdum nisl congue sit amet. Etiam ac massa at arcu lobortis finibus. Maecenas pulvinar facilisis tortor vitae posuere. Aenean ac nunc a nulla facilisis facilisis. Integer nec eros placerat, interdum neque a, lobortis dolor. Integer mattis in urna nec vulputate. Nulla efficitur ornare tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed convallis lacus, vitae dictum metus. Donec aliquam blandit nunc ac egestas. Ut feugiat fermentum magna, eget consectetur magna feugiat ullamcorper. Pellentesque in ultrices erat. Phasellus at placerat risus. Praesent ac euismod mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et orci eu nulla dictum mollis.

                                    Sed eget arcu sed eros finibus aliquet. Duis ut ante at neque varius imperdiet vitae quis massa. Integer at nisi commodo, consequat elit at, fringilla enim. Vivamus vel erat ipsum. Morbi lobortis orci imperdiet risus lacinia hendrerit. Mauris posuere nec leo quis dignissim. Aliquam eget mi diam. Quisque quis augue viverra, iaculis arcu nec, sagittis nisl.

                                    Donec consequat erat feugiat dignissim lobortis. Nunc quam felis, elementum vitae molestie hendrerit, fringilla quis magna. Nam efficitur eleifend libero, vel pretium nibh viverra vel. Fusce congue tincidunt turpis quis semper. Nunc mollis elit ante, varius iaculis neque bibendum in. Etiam fermentum lorem in condimentum congue. Fusce pulvinar dolor erat, ac blandit enim consectetur eu. Suspendisse sit amet ex sed nibh suscipit pulvinar in at lorem. Mauris vel erat quis lorem commodo imperdiet non nec neque. Cras ligula ex, malesuada fringilla aliquam non, tincidunt a neque. Maecenas rutrum mollis accumsan. Aenean non ligula pulvinar, efficitur arcu eget, tempor nisl. Aliquam vehicula tellus quis nisl feugiat, et ultricies lacus consectetur. Duis vitae finibus orci, non porttitor nisl. 
                    </Container>
                        
                    </Collapse>
                    </Col>
                </Row>
                {//Project 1 end, Project 2 start
                }
                <Row xs={1} md={2} style={{"border-style": "solid"}}>
                    <Col>
                        <h1 className="App-project-thumbnail-header-left">Project 2</h1>
                    </Col>

                    <Col>
                        <Nav.Link onClick={()=>{openShow2();}}>
                            <Image className="App-project-thumbnail-image"src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/master/src/pictures/awyeah.PNG"/>
                        </Nav.Link>.
                    </Col>

                    <Collapse in={show2}>
                        <Col>
                        <Nav.Link onClick={()=>{closeShow2();}}>X</Nav.Link>
                            <Container>                        
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod nunc arcu. Donec fermentum vestibulum erat, nec pharetra erat venenatis at. Vestibulum eu elit massa. Nullam vitae justo est. Cras ante nisi, gravida at congue nec, imperdiet id arcu. Aliquam erat volutpat. Donec sit amet pretium turpis, a dapibus nulla. Vivamus ex tortor, sodales eu enim quis, rhoncus rutrum sapien. Aliquam ut auctor eros, sit amet luctus nibh. Mauris molestie, ligula a ornare tempus, tortor mi suscipit arcu, porttitor aliquam eros nunc eu nunc. Donec placerat auctor turpis, vel aliquam augue molestie scelerisque. Phasellus consequat rhoncus augue, sit amet commodo tortor rhoncus sed. Maecenas auctor ex eu arcu luctus egestas. Maecenas pellentesque commodo purus sed pretium.

Sed a tempus quam, ut cursus dui. Donec mattis rhoncus augue vel luctus. Maecenas et porttitor purus, vitae consequat sem. Suspendisse sed justo dapibus, maximus nunc et, finibus nibh. Duis ac nibh erat. Cras ornare commodo feugiat. Mauris condimentum neque id placerat dignissim. Curabitur eleifend orci sit amet vulputate ultrices. Donec in mauris at dui euismod varius sed at odio. Sed ac finibus metus. Aliquam sodales hendrerit dui, ut pharetra libero sodales eget.

Quisque commodo tellus purus, vitae interdum nisl congue sit amet. Etiam ac massa at arcu lobortis finibus. Maecenas pulvinar facilisis tortor vitae posuere. Aenean ac nunc a nulla facilisis facilisis. Integer nec eros placerat, interdum neque a, lobortis dolor. Integer mattis in urna nec vulputate. Nulla efficitur ornare tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed convallis lacus, vitae dictum metus. Donec aliquam blandit nunc ac egestas. Ut feugiat fermentum magna, eget consectetur magna feugiat ullamcorper. Pellentesque in ultrices erat. Phasellus at placerat risus. Praesent ac euismod mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et orci eu nulla dictum mollis.

Sed eget arcu sed eros finibus aliquet. Duis ut ante at neque varius imperdiet vitae quis massa. Integer at nisi commodo, consequat elit at, fringilla enim. Vivamus vel erat ipsum. Morbi lobortis orci imperdiet risus lacinia hendrerit. Mauris posuere nec leo quis dignissim. Aliquam eget mi diam. Quisque quis augue viverra, iaculis arcu nec, sagittis nisl.

Donec consequat erat feugiat dignissim lobortis. Nunc quam felis, elementum vitae molestie hendrerit, fringilla quis magna. Nam efficitur eleifend libero, vel pretium nibh viverra vel. Fusce congue tincidunt turpis quis semper. Nunc mollis elit ante, varius iaculis neque bibendum in. Etiam fermentum lorem in condimentum congue. Fusce pulvinar dolor erat, ac blandit enim consectetur eu. Suspendisse sit amet ex sed nibh suscipit pulvinar in at lorem. Mauris vel erat quis lorem commodo imperdiet non nec neque. Cras ligula ex, malesuada fringilla aliquam non, tincidunt a neque. Maecenas rutrum mollis accumsan. Aenean non ligula pulvinar, efficitur arcu eget, tempor nisl. Aliquam vehicula tellus quis nisl feugiat, et ultricies lacus consectetur. Duis vitae finibus orci, non porttitor nisl. 

                            </Container>
                        </Col>
                    </Collapse>
                </Row>
                {//Project 2 end, Project 3 start
                }
                <Row xs={1} md={2} style={{"border-style": "solid"}}>
                    <Col style={{"border-style": "solid"}}>
                        <Nav.Link onClick={()=>{openShow3();}}>
                            <Image className="App-project-thumbnail-image"src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/master/src/pictures/awyeah.PNG"/>                        
                        </Nav.Link>
                    </Col>

                    <Col style={{"border-style": "solid"}}>
                        <h1 className="App-project-thumbnail-header-right">Project 3</h1>
                    </Col>

                    <Collapse in={show3} style={{"border-style": "solid"}}>
                        <Col style={{"border-style": "solid"}}>
                                        <Nav.Link onClick={()=>{closeShow3();}}>X</Nav.Link>
                                        

                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod nunc arcu. Donec fermentum vestibulum erat, nec pharetra erat venenatis at. Vestibulum eu elit massa. Nullam vitae justo est. Cras ante nisi, gravida at congue nec, imperdiet id arcu. Aliquam erat volutpat. Donec sit amet pretium turpis, a dapibus nulla. Vivamus ex tortor, sodales eu enim quis, rhoncus rutrum sapien. Aliquam ut auctor eros, sit amet luctus nibh. Mauris molestie, ligula a ornare tempus, tortor mi suscipit arcu, porttitor aliquam eros nunc eu nunc. Donec placerat auctor turpis, vel aliquam augue molestie scelerisque. Phasellus consequat rhoncus augue, sit amet commodo tortor rhoncus sed. Maecenas auctor ex eu arcu luctus egestas. Maecenas pellentesque commodo purus sed pretium.

                                        Sed a tempus quam, ut cursus dui. Donec mattis rhoncus augue vel luctus. Maecenas et porttitor purus, vitae consequat sem. Suspendisse sed justo dapibus, maximus nunc et, finibus nibh. Duis ac nibh erat. Cras ornare commodo feugiat. Mauris condimentum neque id placerat dignissim. Curabitur eleifend orci sit amet vulputate ultrices. Donec in mauris at dui euismod varius sed at odio. Sed ac finibus metus. Aliquam sodales hendrerit dui, ut pharetra libero sodales eget.

                                        Quisque commodo tellus purus, vitae interdum nisl congue sit amet. Etiam ac massa at arcu lobortis finibus. Maecenas pulvinar facilisis tortor vitae posuere. Aenean ac nunc a nulla facilisis facilisis. Integer nec eros placerat, interdum neque a, lobortis dolor. Integer mattis in urna nec vulputate. Nulla efficitur ornare tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed convallis lacus, vitae dictum metus. Donec aliquam blandit nunc ac egestas. Ut feugiat fermentum magna, eget consectetur magna feugiat ullamcorper. Pellentesque in ultrices erat. Phasellus at placerat risus. Praesent ac euismod mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris et orci eu nulla dictum mollis.
                                        
                                        Sed eget arcu sed eros finibus aliquet. Duis ut ante at neque varius imperdiet vitae quis massa. Integer at nisi commodo, consequat elit at, fringilla enim. Vivamus vel erat ipsum. Morbi lobortis orci imperdiet risus lacinia hendrerit. Mauris posuere nec leo quis dignissim. Aliquam eget mi diam. Quisque quis augue viverra, iaculis arcu nec, sagittis nisl.

                                        Donec consequat erat feugiat dignissim lobortis. Nunc quam felis, elementum vitae molestie hendrerit, fringilla quis magna. Nam efficitur eleifend libero, vel pretium nibh viverra vel. Fusce congue tincidunt turpis quis semper. Nunc mollis elit ante, varius iaculis neque bibendum in. Etiam fermentum lorem in condimentum congue. Fusce pulvinar dolor erat, ac blandit enim consectetur eu. Suspendisse sit amet ex sed nibh suscipit pulvinar in at lorem. Mauris vel erat quis lorem commodo imperdiet non nec neque. Cras ligula ex, malesuada fringilla aliquam non, tincidunt a neque. Maecenas rutrum mollis accumsan. Aenean non ligula pulvinar, efficitur arcu eget, tempor nisl. Aliquam vehicula tellus quis nisl feugiat, et ultricies lacus consectetur. Duis vitae finibus orci, non porttitor nisl. 
                                   
                        </Col>  
                    </Collapse>
                    <Collapse in={show3}>             
                        <Col style={{"border-style": "solid"}}>
                        <Image className="App-project-thumbnail-image"src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/master/src/pictures/awyeah.PNG"/> 
                        <Image className="App-project-thumbnail-image"src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/master/src/pictures/awyeah.PNG"/> 
                        <Image className="App-project-thumbnail-image"src="https://raw.githubusercontent.com/axel-sjostrom/axel-portfolio/master/src/pictures/awyeah.PNG"/> 
                        </Col>    
                    
                    </Collapse>
                </Row>
            </Container>
        </div>
    )
}

export default AppPrototypesView;