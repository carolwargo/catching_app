import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

import '../Styles/Navbar.css';

function TabsExample() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
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
  );
}

export default TabsExample;
