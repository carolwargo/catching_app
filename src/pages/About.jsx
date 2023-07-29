import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import aboutImage from "../images/about.png";


function AutoLayoutExample() {
  return (
    <Container>
      <Row>
        <Col>
        <img src={aboutImage} alt="About" />
        </Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;