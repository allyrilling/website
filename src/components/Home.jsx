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
            <Row className="rowStyle">
                <Col><img class="mePictureCol" src={me} alt="Ally" /></Col>
                <Col>
                    <Row>
                        <Col>
                            <h1>Hello. My name is Ally.</h1>
                            <p>I am a student at the University of Wisconsin - Madison majoring in Computer Science and Finance. Currently, I am working on an iOS app called Penguin Workouts. I am intersted in front end development, UI/UX design, and financial technologies.</p>
                            <h2 className="linkText">Contact me on <Mailto email="anrilling@wisc.edu" obfuscate={true}>email</Mailto> or ‎<a href="https://www.linkedin.com/in/allyrilling/">LinkedIn</a>.</h2>
                            <h2 className="linkText">See some of my work on <a href="https://github.com/allyrilling">GitHub</a>.</h2>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

