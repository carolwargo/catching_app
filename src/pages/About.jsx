import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate} from 'react-router';
import { Link } from 'react-router-dom';

import aboutImage from "../images/about.png";

function AutoLayoutExample() {

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
     <div className="link-container">
        <button onClick={handleGoBack}>Back</button>
        <Link to="/">Home</Link> 
      </div>

      
      <Row className="row-about" md={8} lg={3}>
      <Col className="col-image">
        {/* Apply the CSS style to the image */}
        <img src={aboutImage} alt="About" style={{ maxWidth: "100%" }} />
      </Col>
      <Col className="col-content">resume
        <h1>ABOUT</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam ab, iste sit quam soluta atque neque temporibus repellat. Animi, magni. Modi sunt ex ut error qui facere, hic quas nulla!</p>
        <h1>How we started</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam ab, iste sit quam soluta atque neque temporibus repellat. Animi, magni. Modi sunt ex ut error qui facere, hic quas nulla!</p>
        <h1>What we experienced</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam ab, iste sit quam soluta atque neque temporibus repellat. Animi, magni. Modi sunt ex ut error qui facere, hic quas nulla!</p>
      </Col>
      </Row>
   


    {/* */}
    <Container>
      <Row>
        <Col className="image-column">
          <Card style={{ width: "18rem" }}>
          <Card.Img src={aboutImage} alt="About Image" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
    </>
  );
}

export default AutoLayoutExample;
