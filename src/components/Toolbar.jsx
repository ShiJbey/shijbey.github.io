import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Toolbar = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="px-2">
    <Navbar.Brand href="/#">
      <img
        alt=""
        src="assets/anvil.png"
        width="30"
        height="30"
        className="mx-3"
      />
      ShiJBey.github.io
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/#about">About</Nav.Link>
        <Nav.Link href="/#projects">Projects</Nav.Link>
        <Nav.Link href="/#publications">Publications</Nav.Link>
        <Nav.Link href="/#cv">Resume/CV</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Toolbar;
