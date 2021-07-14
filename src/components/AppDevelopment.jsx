import React from "react";
import { Row, Col, Container } from "react-bootstrap"
import icon from "../images/penguinicon.png"

function AppDevelopment() {
  return (
    <Container>
      <Row><h1>App Development</h1></Row>
      <Row>
        <Col><img className="iconPicture" src={icon} alt="Penguin Workouts Icon" /></Col>
        <Col>
          <Row><h2>Penguin Workouts</h2></Row>
          <Row><h3 className="h3Header">For every fitness level.</h3></Row>
          <Row><a href="PrivacyPolicy"><h4 className="h4Header">Privacy Policy</h4></a></Row>
        </Col>
      </Row>
    </Container>
    
  );
}

export default AppDevelopment;