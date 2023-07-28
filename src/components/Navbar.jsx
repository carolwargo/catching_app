import Button from 'react-bootstrap/Button'; // Used for rendering a button with various styles.
import Container from 'react-bootstrap/Container'; // Used as a layout container to wrap content.
import Form from 'react-bootstrap/Form'; // Used for rendering form elements.
import Nav from 'react-bootstrap/Nav'; // Used for rendering navigation components.
import Navbar from 'react-bootstrap/Navbar'; // Used for rendering a navigation bar.
import NavDropdown from 'react-bootstrap/NavDropdown'; // Used for rendering dropdown menus in the navigation bar.
import Offcanvas from 'react-bootstrap/Offcanvas'; // Used for rendering off-canvas content.

export default function MyNavbar() {
  return (
    <>
      {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> 
            {/* Brand/logo for the navigation bar */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} /> 
            {/* Toggle button for mobile navigation */}
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3"> {/* Navigation links container */}
                  {/* Navigation link */}
                  <Nav.Link href="#action1">Home</Nav.Link> 
                  {/* Navigation link */}
                  <Nav.Link href="#action2">About</Nav.Link> 
                  {/* Navigation link */}
                  <Nav.Link href="#action3">Contact</Nav.Link>
                  {/* Navigation link */}
                  <Nav.Link href="#action4">Services</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    {/* Dropdown items container */} 
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item> {/* Dropdown item */}
                    <NavDropdown.Item href="#action4">
                      Another action
                    {/* Dropdown item */}  
                    </NavDropdown.Item>
                    {/* Divider line between dropdown items */}
                    <NavDropdown.Divider /> 
                    <NavDropdown.Item href="#action5">
                      Something else here
                    {/* Dropdown item */}
                    </NavDropdown.Item> 
                  {/* Dropdown menu */}
                  </NavDropdown> 
                </Nav>

                {/* START Form container */}
                <Form className="d-flex"> 
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  /> {/* Search input field */}
                  {/* Search button */}
                  <Button variant="outline-success">Search</Button> 
                </Form>
              </Offcanvas.Body>
            {/* Off-canvas content */}  
            </Navbar.Offcanvas> 
          </Container>
        </Navbar>
      ))}
    </>
  );
}
