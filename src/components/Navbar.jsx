import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import Logo from "../images/Logo.png";

import '../Styles/Navbar.css';

function TabsExample() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
       <Navbar.Brand href="/">
        <img
          src={Logo}
          alt="Logo"
          height="30" // Adjust the height of the logo as needed
          className="d-inline-block align-top mt-1"
      />
      </Navbar.Brand>

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

        {/* Add Twitter and Instagram icons */}
        <Nav.Item>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="nav-link">
          <FaTwitter size={20} />
        </a>
      </Nav.Item>

      <Nav.Item>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="nav-link">
          <FaInstagram size={20} />
        </a>
      </Nav.Item>
    </Nav>
  );
}

export default TabsExample;
