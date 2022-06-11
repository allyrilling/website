import React, { Component } from 'react';
import me from '../images/me.png';
import linkedin from '../images/linkedin.svg';
import mail from '../images/mail.svg';
import github from '../images/github.svg';
import { Col, Container, Row } from 'react-bootstrap';
import '../CSScomponents/Home.css';

const Mailto = ({ email, subject = '', body = '', children }) => {
	let params = subject || body ? '?' : '';
	if (subject) params += `subject=${encodeURIComponent(subject)}`;
	if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

	return <a href={`mailto:${email}${params}`}>{children}</a>;
};

export default class Home extends Component {
	render() {
		return (
			<Container>
				<Row className='rowStyle'>
					<Col>
						<img class='mePictureCol' src={me} alt='Ally' />
					</Col>
					<Col>
						<Row>
							<Col>
								<h1 className='titleText'>Hello. My name is Ally.</h1>
								<p className='bodyText'>
									I am a student at the University of Wisconsin - Madison majoring in computer science and finance. I am intersted in front end
									development, UI/UX design, and financial technologies.
								</p>
								<Row>
									<a href='https://github.com/allyrilling' className='imgStyle'>
										<img src={github}></img>
									</a>
									<a href='https://www.linkedin.com/in/allyrilling/' className='imgStyle'>
										<img src={linkedin}></img>
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
		);
	}
}
