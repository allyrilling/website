import React from "react";
import { Row, Container } from "react-bootstrap"
import '../CSScomponents/PrivacyPolicy.css'

function PrivacyPolicy() {
  return (
    <Container>
      <Row className="containerStyle">
        <h1 className="titleText">Privacy Policy</h1>
        <h2 className="subText">Personal Data and Identifying Information</h2>
        <p className="bodyText">Penguin Workouts does not collect any personal information. It does not access any data from your phone (HealthKit data included). The app has no login or user accounts; all usage of the app is anomyous.</p>
        <h2 className="subText">App Analytics and Tracking</h2>
        <p className="bodyText">Penguin Workouts does not include any third-party trackers and does not collect any analytics data.</p>
      </Row>

      {/* <Row><h1 className="titleText">Privacy Policy</h1></Row>
      <Row><h2 className="subText">Personal Data and Identifying Information</h2></Row>
      <Row><p className="bodyText">Penguin Workouts does not collect any personal information. It does not access any data from your phone (HealthKit data included). The app has no login or user accounts; all usage of the app is anomyous.</p></Row>
      <Row><h2 className="subText">App Analytics and Tracking</h2></Row>
      <Row><p className="bodyText">Penguin Workouts does not include any third-party trackers and does not collect any analytics data.</p></Row> */}
    </Container>
  );
}

export default PrivacyPolicy;