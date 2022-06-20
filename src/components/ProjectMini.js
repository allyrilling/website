import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ProjectMaxi from './ProjectMaxi';

export default class ProjectMini extends Component {
	render() {
		return (
			<Col align='center' onClick={() => (window.location = 'https://www.apple.com')}>
				<img src={this.props.icon} width='150px' style={{ margin: 10 + 'px' }}></img>
				<h2>{this.props.name}</h2>
				<p>{this.props.description}</p>
			</Col>
		);
	}
}
