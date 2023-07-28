import React from 'react';
import Nav from 'react-bootstrap/Nav';

function TabsExample() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">

      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="/about">About</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="/train">Train</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="/contact">Contact</Nav.Link>
      </Nav.Item>

    </Nav>
  );
}

export default TabsExample;