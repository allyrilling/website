import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class ResumeSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			jobTitle: this.props.jobTitle,
			jobPlace: this.props.jobPlace,
			timePeriod: this.props.timePeriod,
			description: this.props.description,
			brokenDescription: [],
		};

		this.breakDescription();
	}

	breakDescription() {
		console.log(this.state.description);
		var split = this.state.description.split('|');
		this.setState({ brokenDescription: split });
		console.log(split);
	} //

	render() {
		return (
			<Container>
				<Row>
					<Col>
						<Row>
							<p>{this.state.jobTitle}</p>
							<p>{this.state.jobPlace}</p>
						</Row>
						<Row>
							<p>{this.state.timePeriod}</p>
						</Row>
						<Row>
							{/* <ul>
								{this.state.brokenDescription.forEach((item) => {
									<li>{item}</li>;
								})}
							</ul> */}
							<p>{this.state.brokenDescription}</p>
						</Row>
					</Col>
				</Row>
			</Container>
		);
	}
}
