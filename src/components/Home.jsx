import React from 'react'
import '../CSScomponents/Home.css'
import { Col, Container, Row } from 'react-bootstrap'
import me from "../images/me.png"
import mail from "../images/mail.svg"
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"

const Mailto = ( { email, subject = '', body = '', children } ) =>
{
    let params = subject || body ? '?' : '';
    if ( subject ) params += `subject=${ encodeURIComponent( subject ) }`;
    if ( body ) params += `${ subject ? '&' : '' }body=${ encodeURIComponent( body ) }`;

    return <a href={`mailto:${ email }${ params }`}>{children}</a>;
};

export default function Home ()
{
    return (
        <Container>
            <Row className="rowStyle">
                <Col><img class="mePictureCol" src={me} alt="Ally" /></Col>
                <Col>
                    <Row>
                        <Col>
                            <h1>Hello. My name is Ally.</h1>
                            <p>I am a student at the University of Wisconsin - Madison majoring in Computer Science and Finance. I am intersted in front end development, UI/UX design, and financial technology.</p>
                            {/* <h2 className="linkText">Contact me on <a href="https://www.linkedin.com/in/allyrilling/">LinkedIn</a> or through <Mailto email="anrilling@wisc.edu" obfuscate={true}>email</Mailto> .</h2>
                            <h2 className="linkText">See some of my work on <a href="https://github.com/allyrilling">GitHub</a>.</h2> */}
                            <Row>
                                <a href='https://github.com/allyrilling'>
                                    <img className='imgStyle' src={github}></img>
                                </a>
                                <a href='https://www.linkedin.com/in/allyrilling/'>
                                    <img className='imgStyle' src={linkedin}></img>
                                </a>
                                <Mailto email='anrilling@wisc.edu' obfuscate={true}>
                                    <img className='imgStyle' src={mail}></img>
                                </Mailto>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

