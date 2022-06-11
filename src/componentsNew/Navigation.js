import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import '../App.css';
import icon from '../images/icon.png';

export default class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTab: 'Home',
		};
	}

	render() {
		return (
			<Navbar collapseOnSelect variant='dark' expand='lg' className='navBar'>
				<Container>
					<img src={icon} alt='Icon' style={{ width: '24px', marginRight: '10px' }} />
					<Navbar.Text style={{ fontWeight: 'bold', color: 'white', fontSize: '20px' }} href='Home'>
						Ally Rilling
					</Navbar.Text>
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='ml-auto'>
							<Nav.Link
								href='Home'
								onClick={() => {
									this.setState({ currentTab: 'Home' });
									console.log(this.state.currentTab);
								}}
								className={this.state.currentTab === 'Home' ? 'navHighlight' : 'navNoHighlight'}
							>
								Home
							</Nav.Link>
							<Nav.Link
								href='Resume'
								onClick={() => {
									this.setState({ currentTab: 'Resume' });
									console.log(this.state.currentTab);
								}}
								className={this.state.currentTab === 'Resume' ? 'navHighlight' : 'navNoHighlight'}
							>
								Resume
							</Nav.Link>
							<Nav.Link
								href='AppDevelopment'
								onClick={() => {
									this.setState({ currentTab: 'Resume' });
									console.log(this.state.currentTab);
								}}
								className={this.state.currentTab === 'Projects' ? 'navHighlight' : 'navNoHighlight'}
							>
								Projects
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}
