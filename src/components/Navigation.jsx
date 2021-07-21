import React from "react";
import { withRouter } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

function Navigation(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="#242424" variant="dark">
      <Container>
        <Navbar.Brand style={{ fontSize: '30px' }} href="Home">Ally Rilling</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="Home">Home</Nav.Link>
            <Nav.Link href="Resume">Resume</Nav.Link>
            <Nav.Link href="AppDevelopment">Development Work</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default withRouter(Navigation);