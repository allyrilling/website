import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class ProjectMaxi extends Component {
	render() {
		return (
			<Container>
				<Row>
					<a href='/projects'>
						<h4>{'⬅️ Back'}</h4>
					</a>
				</Row>
				<Row className={this.props.class}>
					<Col className='iconAndTitleContainer'>
						<Row>
							<Col>
								<h1 className='appTitle'>{this.props.title}</h1>
								<h2 className='appSubtitle'>{this.props.subtitle}</h2>
								{this.props.showPrivacyPolicy ? (
									<a href='PrivacyPolicy'>
										<h3 className={this.props.linkClass}>Privacy Policy</h3>
									</a>
								) : (
									<></>
								)}
								<a href={this.props.link} className='appStore'>
									<img className='appStore' src={this.props.logo} />
									{/* either github or app store logo */}
								</a>
							</Col>
						</Row>
					</Col>

					<Col>
						<Row>
							<img className='lightyearIconPicture' src={this.props.projectIcon} />
						</Row>
					</Col>

					<Col className='aboutTheAppContainer'>
						<Row>
							<h2>{this.props.aboutThe}</h2>
						</Row>
						<Row>
							<p>{this.props.description}</p>
						</Row>
					</Col>
				</Row>

				<Row>{this.props.extras}</Row>
			</Container>
		);
	}
}
