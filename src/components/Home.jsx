import React from 'react'
import '../CSScomponents/Home.css'
import { Col, Container, Row } from 'react-bootstrap'
import me from "../images/me.png"

const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

export default function Home() {
    return (
        <Container>
            <Row>
                <Col>
                    <Row className="boxStyle">
                        <Col>
                            <h1>Ally Rilling</h1>
                            <ul>
                                <li>Student at the University of Wisconsin - Madison</li>
                                <li>Majoring in Computer Science and Finance</li>
                                <li>Developer of the iOS app Penguin Workouts</li>
                                <li>Interested in front end development, UI/UX design, and financial technologies</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="boxStyle">
                        <Col>
                            <h1>Contact</h1>
                            <ul>
                                <li><Mailto email="anrilling@wisc.edu" obfuscate={true}>Email</Mailto></li>
                                <li>‎<a href="https://www.linkedin.com/in/allyrilling/">LinkedIn</a></li>
                                <li>‎<a href="https://github.com/allyrilling">GitHub</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col><Row><img src={me} alt="Ally" className="mePicture"/></Row></Col>
            </Row>
        </Container>
    )
}

