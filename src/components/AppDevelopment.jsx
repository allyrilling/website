import "../CSScomponents/AppDevelopment.css";
import React from "react";
import { Row, Col, Container } from "react-bootstrap"
import icon from "../images/penguinicon.png"
import appstorebutton from "../images/as.svg"
import favicon from "../images/Favicon.png"
import jslogo from "../images/jslogo.svg"
import reactlogo from "../images/reactlogo.svg"
import rnlogo from "../images/rnlogo.svg"
import dialogflowlogo from "../images/dflogo.svg"
import lightyearicon from "../images/lightyearicon.png"
import ProjectMini from "./ProjectMini";

function AppDevelopment ()
{
  return (
    <Container>

      {/* <Col>
        <Row>
          <ProjectMini icon={icon} name="Penguin Workouts" description="iOS App" />
          <ProjectMini icon={lightyearicon} name="Lightyear" description="iOS App" />
          <ProjectMini icon={favicon} name="This Site" description="Portfolio Website" />
        </Row>
        <Row>
          <ProjectMini icon={jslogo} name="JS ɑ/β" description="CS571 Class Project" />
          <ProjectMini icon={reactlogo} name="React ɑ/β" description="CS571 Class Project" />
          <ProjectMini icon={rnlogo} name="React Native ɑ/β" description="CS571 Class Project" />
          <ProjectMini icon={dialogflowlogo} name="Dialogflow" description="CS571 Class Project" />
          <ProjectMini icon={favicon} name="Individual Project" description="CS570 Class Project" />
        </Row>
      </Col> */}

      {/* PENGUIN CONTAINER */}
      <Row className="penguinContainer">
        <Col className="iconAndTitleContainer">
          <Row>
            <Col>
              <h1 className="appTitle">Penguin Workouts</h1>
              <h2 className="appSubtitle">For every fitness level</h2>
              <a href="PrivacyPolicy" className="privacyPolicyPenguin"><h3 className="privacyPolicyPenguin">Privacy Policy</h3></a>
              <a href="https://apps.apple.com/us/app/penguin-workouts/id1534463056?itsct=apps_box&amp;itscg=30200" className="appStore"><img className="appStore" src={appstorebutton} alt="Download on the App Store" /></a>
            </Col>
          </Row>
        </Col>

        <Col>
          <Row><img className="lightyearIconPicture" src={icon} alt="Penguin Workouts Icon" /></Row>
        </Col>

        <Col className="aboutTheAppContainer">
          <Row><h1>About the App</h1></Row>
          <Row>
            <p>Penguin Workouts is a workout app that allows users to create quick workouts from a range of exercises. Users can add their own exercises and choose the number of exercises in each workout. The app includes upper body, lower body, hips, and core exercises. Additionally, Penguin Workouts comes with nine beautiful themes.</p>
            {/* <p>&emsp;Penguin Workouts is the first major programming project that I have taken on. During its development, I learned a lot about Swift, SwiftUI, and Xcode. I made this app because I wanted to have something to guide me through workouts when I didn't have a lot of time to generate a workout on my own. I created the first implementation of this concept using Shortcuts. After WWDC 2020, I decided to purchase an Apple Developer Account and see if I could make this Shortcut into an app. </p>
            <p>&emsp;Now that I have been developing the app for a while, I have realized UI design interests me. Creating an interface that is both intuitive and clean is extremely challenging, but I enjoy trying to find the balance.</p>
            <p>&emsp;I still have lots of feature ideas I would like to add into the app and I am continuing development while I am in school. I welcome any suggestions :) !</p> */}
          </Row>
        </Col>
      </Row>

      {/* LIGHTYEAR CONTAINER */}
      <Row className="lightyearContainer">

        <Col className="titleContainer">
          <h1 className="appTitle">Lightyear</h1>
          <h2 className="appSubtitle">Solar Stats</h2>
          <a href="PrivacyPolicy" className="privacyPolicyLightyear"><h3 className="privacyPolicyLightyear">Privacy Policy</h3></a>
          <a href="https://apps.apple.com/us/app/lightyear-solar-clock/id1580773908" className="appStore"><img className="appStore" src={appstorebutton} alt="Download on the App Store" /></a>
        </Col>

        <Col className="iconContainer">
          <img className="lightyearIconPicture" src={lightyearicon} alt="Lightyear Icon" />
        </Col>

        <Col className="aboutTheAppContainer">
          <Row><h1>About the App</h1></Row>
          <Row>
            <p>Lightyear is a utility that visualizes the current sunrise, sunset, and daylight hours. It shows the amount of daylight gained or lost over the last day, week, and month. Lightyear uses data from the <a href="https://sunrise-sunset.org" className="privacyPolicyLightyear"> sunrise-sunset.org </a> API.</p>
            {/* <p>&emsp;Lightyear is a utility app that visualizes solar stats from the <a href="https://sunrise-sunset.org" className="privacyPolicyLightyear"> sunrise-sunset.org </a> API. I wanted a fast way to see sunrise and sunset times with day to day changes and I figured the best way to get what I wanted was to make it! This project offered the opportunity to learn how to work with external data sources through API queries and how to read a user’s location with CoreData. It’s written in Swift and SwiftUI.</p> */}
          </Row>
        </Col>
      </Row>

      {/* SITE CONTAINER */}
      <Row className="siteContainer">
        <Col className="aboutTheAppContainer">
          <Row><h1>About the Site</h1></Row>
          <p>I built this site using...</p>
          <ul>
            <li>ReactJS</li>
            <li>React-Bootstrap</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>

          <p>It is hosted on Firebase and available on <a href="https://github.com/allyrilling">GitHub</a>.</p>
          <p>The favicon was made in Figma.</p>

        </Col>

        <Col className="iconAndTitleContainer">
          <img className="iconPicture" src={favicon} alt="Favicon" />
        </Col>

      </Row>
    </Container>

  );
}

export default AppDevelopment;
