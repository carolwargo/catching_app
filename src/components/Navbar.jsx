import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../Style/css/navbar.css'; // Import your custom CSS file

export default function MyNavbar() {
  // State to control the visibility of the offcanvas
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  // Function to toggle the offcanvas visibility
  const toggleOffcanvas = () => {
    setShowOffcanvas((prevShow) => !prevShow);
  };

  return (
    <>
      {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={toggleOffcanvas}
            />
            <Navbar.Offcanvas
              show={showOffcanvas}
              onHide={() => setShowOffcanvas(false)}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="custom-offcanvas-body">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">About</Nav.Link>
                  <Nav.Link href="#action3">Contact</Nav.Link>
                  <Nav.Link href="#action4">Services</Nav.Link>
                  <NavDropdown title="Dropdown" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
