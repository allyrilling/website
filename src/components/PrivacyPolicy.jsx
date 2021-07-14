import React from "react";
import { Row, Container } from "react-bootstrap"

function PrivacyPolicy() {
  return (
    <Container>
        <Row><h1>Privacy Policy</h1></Row>
        <Row><h2>Personal Data and Identifying Information</h2></Row>
        <Row>Penguin Workouts does not collect any personal information. It does not access any data from your phone (HealthKit data included). The app has no login or user accounts; all usage of the app is anomyous.</Row>
        <Row><h2>App Analytics and Tracking</h2></Row>
        <Row>Penguin Workouts does not include any third-party trackers and does not collect any analytics data.</Row>
    </Container>
  );
}

export default PrivacyPolicy;