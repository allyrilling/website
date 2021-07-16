import React from "react";
import { Container, Row } from "react-bootstrap"

function Home() {
  return (
    <Container>
      <Row><h1 className="h1Header2">Hi! My name is Ally.</h1></Row>
      <Row><h2 className="h2Header2">I am a student at the <span className="wiscoRed">University of Wisconsin - Madison</span>.</h2></Row>
      <Row><h3 className="h3Header2">I am interested in <span className="uiOrange">UI design</span>, <span className="frontEndPurple">front end</span> development, and <span className="fintechGreen">financial technology</span>.</h3></Row>
    </Container>
  );
}

export default Home;