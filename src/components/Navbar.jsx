import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import Logo from "../images/Logo.png";

import '../Styles/Navbar.css';

function TabsExample() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Navbar.Brand href="/">
        <img
          src={Logo}
          alt="Logo"
          height="30"
          className="d-inline-block align-top mt-1"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <NavLink to="/home" className="nav-link" activeClassName="active">Home</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/train" className="nav-link" activeClassName="active">Train</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
          </Nav.Item>
        </Nav>
        <Nav className="ml-auto"> {/* Use ml-auto class to move the NavDropdown to the right */}
          <Nav.Item>
            <NavLink to="https://twitter.com/301catching" target="_blank" rel="noopener noreferrer" className="nav-link">
              <FaTwitter size={20} />
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="https://www.instagram.com/301_catching/" target="_blank" rel="noopener noreferrer" className="nav-link">
              <FaInstagram size={20} />
            </NavLink>
          </Nav.Item>
          <NavDropdown title="MEMBERS" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/login">Login</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/signup">Sign Up</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TabsExample;
