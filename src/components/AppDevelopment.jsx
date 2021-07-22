import "../CSScomponents/AppDevelopment.css";
import React from "react";
import { Row, Col, Container } from "react-bootstrap"
import icon from "../images/penguinicon.png"
import appstorebutton from "../images/as.svg"
import favicon from "../images/Favicon.png"

function AppDevelopment() {
  return (
    <Container>
      {/* <Row><h1 className="globalPageTitle">App Development</h1></Row> */}

      <Row className="penguinContainer">
        <Col className="iconAndTitleContainer">
          <Row><img className="iconPicture" src={icon} alt="Penguin Workouts Icon" /></Row>
          <Row>
            <Col>
              <h1 className="appTitle">Penguin Workouts</h1>
              <h2 className="appSubtitle">For every fitness level.</h2>
              <a href="PrivacyPolicy" className="privacyPolicy"><h3 className="privacyPolicy">Privacy Policy</h3></a>
              <a href="https://apps.apple.com/us/app/penguin-workouts/id1534463056?itsct=apps_box&amp;itscg=30200" className="appStore"><img className="appStore" src={appstorebutton} alt="Download on the App Store" /></a>
            </Col>
          </Row>
        </Col>

        <Col className="aboutTheAppContainer">
          <Row><h1>About the App</h1></Row>
          <Row>
            <p>&emsp;Penguin Workouts is the first major programming project that I have taken on. During its development, I learned a lot about Swift, SwiftUI, and Xcode. I made this app because I wanted to have something to guide me through workouts when I didn't have a lot of time to generate a workout on my own. The very first implementation of this concept was created using Shortcuts. After WWDC 2020, I decided to purchase an Apple Developer Account because I wanted to try the betas of iOS 14, iPadOS 14, watchOS 7, and macOS Big Sur. I thought because I had the developer account, I should try out making an app. After a few projects that didn’t go very far, I settled on creating a workout app to improve upon the Shortcut I had made. </p>
            <p>&emsp;Now that I have been developing the app for a few months, I have realized UI design interests me. Creating an interface that is both intuitive and clean is extremely challenging, but I enjoy trying to find the balance.</p>
            <p>&emsp;This app still has a long way to go, and I intend to continue development while I am in school. I welcome any suggestions :) !</p>
          </Row>
        </Col>

      </Row>

      <Row className="siteContainer">
        <Col className="aboutTheAppContainer">
          <Row><h1>About this Site</h1></Row>
          <Row>
            <p>&emsp;This site is built using ReactJS, React-Bootstrap, HTML, and CSS. It is hosted on Firebase and stored on <a href="https://github.com/allyrilling">GitHub</a>.</p>
            <p>&emsp;This site is my first foray into web development. During my internship at Wells Fargo, I had the opportunity to learn about web development. As I didn’t have much web development experience, I created this site as a playground.</p>
            <p>&emsp;I really enjoyed learning React and experimenting with it to build something totally new.</p>
          </Row>
        </Col>

        <Col className="iconAndTitleContainer">
          <img className="iconPicture" src={favicon} alt="Favicon" />
        </Col>

      </Row>
    </Container>

  );
}

export default AppDevelopment;
