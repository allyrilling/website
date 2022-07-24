import "../CSScomponents/AppDevelopment.css";
import React from "react";
import { Row, Col, Container, Nav, Navbar } from "react-bootstrap"
import icon from "../images/penguinicon.png"
import favicon from "../images/mylogo.svg"
import jslogo from "../images/jslogo.svg"
import reactlogo from "../images/reactlogo.svg"
import rnlogo from "../images/rnlogo.svg"
import dialogflowlogo from "../images/dflogo.svg"
import lightyearicon from "../images/lightyearicon.png"
import iplogo from "../images/iplogo.svg"
import ProjectMini from "./ProjectMini";

function Projects ()
{
  return (
    <Container>

      <Col>
        <Row className="headerContainer"><h1>Personal Projects</h1></Row>
        <Row>
          <Col><a href="/projects/penguinworkouts"><ProjectMini icon={icon} name="Penguin Workouts" description="iOS App" /></a></Col>
          <Col><a href="/projects/lightyear"><ProjectMini icon={lightyearicon} name="Lightyear" description="iOS App" /></a></Col>
          <Col><a href="/projects/site"><ProjectMini icon={favicon} name="This Site" description="Portfolio Website" /></a></Col>
        </Row>

        {/* <Row className="headerContainer"><h1>Designs and Prototypes</h1></Row>
        <Row>
          <a href="/projects/"><ProjectMini icon={icon} name="Loop" description="watchOS/iOS App" /></a>
          <a href="/projects/"><ProjectMini icon={icon} name="Loop Icons" description="Alternate icons for Loop." /></a>
        </Row> */}

        <Row className="headerContainer"><h1>School Projects</h1></Row>
        <Row>
          <Col><a href="/projects/javascript"><ProjectMini icon={jslogo} name="JS ɑ/β" description="CS571 Class Project" /></a></Col>
          <Col><a href="/projects/react"><ProjectMini icon={reactlogo} name="React ɑ/β" description="CS571 Class Project" /></a></Col>
          <Col><a href="/projects/reactnative"><ProjectMini icon={rnlogo} name="React Native ɑ/β" description="CS571 Class Project" /></a></Col>
          <Col><a href="/projects/dialogflow"> <ProjectMini icon={dialogflowlogo} name="Dialogflow" description="CS571 Class Project" /></a></Col>
          <Col><a href="/projects/cs570"><ProjectMini icon={iplogo} name="High Fidelity Prototypes" description="CS570 Class Projects" /></a></Col>
        </Row>
      </Col>

    </Container>


  );
}

export default Projects;
