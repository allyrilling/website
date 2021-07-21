import "../CSScomponents/Home.css";
import React from "react";
import { Container, Row } from "react-bootstrap"

function Home() {
  return (
    <Container className="textContainer">
      <Row><h1 className="bigText">Hi! My name is Ally 👋🏼.</h1></Row>
      <Row><h2 className="mediumText">I am a student at the <span className="wiscoRed">University of Wisconsin - Madison 🦡</span></h2></Row>
      <Row><h3 className="smallText">interested in <span className="frontEndPurple">front end development 🔨</span>, <span className="uiOrange">UI design 📐</span>, and <span className="fintechGreen">financial technology 💰💻</span>.</h3></Row>
      <Row><h2 className="mediumText">I make an app called <span className="penguinPink">Penguin Workouts 🐧💪🏼</span>, <a href="AppDevelopment">check it out here</a>!</h2></Row>
    </Container>
  );
}

export default Home;