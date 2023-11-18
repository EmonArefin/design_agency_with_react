import React from 'react';
import { NavLink } from 'react-router-dom';
import '../navbarSection/navbar.css'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarScroll() {
  const navLinkStyle = { marginRight: '10px' };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>DesignAGENCY</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-5 my-lg-0 mx-2" style={{ maxHeight: '100px' }} navbarScroll>
            <NavLink style={navLinkStyle} className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/">Home</NavLink>
            <NavLink style={navLinkStyle} className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/team">Team</NavLink>
            <NavLink style={navLinkStyle} className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/service">Service</NavLink>
            <NavLink style={navLinkStyle} className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/project">Projects</NavLink>
            <NavLink style={navLinkStyle} className={({ isActive }) => isActive ? "active-item" : "pending-item"} to="/testimonial">Testimonials</NavLink>
          </Nav>
          
          
            <Button variant="outline-success" className="me-4">Login</Button>
            <Button variant="success">Register</Button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarScroll;

