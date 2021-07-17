import "../CSScomponents/AppDevelopment.css";
import React from "react";
import { Row, Col, Container } from "react-bootstrap"
import icon from "../images/penguinicon.png"
import appstorebutton from "../images/as.svg"

function AppDevelopment() {
  return (
    <Container>
      <Row><h1 className="globalPageTitle">App Development</h1></Row>
      
      <Row className="penguinContainer">
        <Col><img className="iconPicture" src={icon} alt="Penguin Workouts Icon" /></Col>
        <Col className="appTextContainer">
          <Row><h2 className="appTitle">Penguin Workouts</h2></Row>
          <Row><h3 className="appSubtitle">For every fitness level.</h3></Row>
          <Row><a href="PrivacyPolicy" className="privacyPolicy"><h4 className="privacyPolicy">Privacy Policy</h4></a></Row>
          <Row><a href="https://apps.apple.com/us/app/penguin-workouts/id1534463056?itsct=apps_box&amp;itscg=30200" className="appStore"><img className="appStore" src={appstorebutton} alt="Download on the App Store" /></a></Row>
        </Col>
      </Row>
    </Container>
    
  );
}

export default AppDevelopment;
