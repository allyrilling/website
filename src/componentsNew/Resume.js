import React, { Component } from 'react';
import '../CSScomponents/Resume.css';
import { Container, Row, Col } from 'react-bootstrap';
// import resumePDF from '../files/ARilling.pdf';
import ResumeSection from './ResumeSection';

export default class Resume extends Component {
	render() {
		return (
			<Container className='gen'>
				<Row>
					<Col>
						<ResumeSection
							jobTitle='Technical Specialist'
							jobPlace='Apple'
							timePeriod='September 2021 - December 2021'
							description='Assisted customers in troubleshooting a wide variety of hardware and software issues with their iPhones, iPads, Apple Watches, and AirPods.|Educated customers during appointments on best practices and helpful tips to improve the experience of using their Apple devices.'
						></ResumeSection>
						{/* <ResumeSection></ResumeSection> */}
					</Col>
					<Col>
						{/* <ResumeSection></ResumeSection>
						<ResumeSection></ResumeSection> */}
					</Col>
				</Row>
			</Container>
		);
	}
}
