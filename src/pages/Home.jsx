import React from "react";
import "../Styles/Home.css";
import { Link } from "react-router-dom";
import "../pages/Signup.jsx";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LockIcon from "@mui/icons-material/Lock";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <>
      <div className="container-body">
        <div className="main-col">
          <div className="content-container">
            <div className="content">
              <h2>WELCOME TO</h2>
              <h1>301_catching</h1>
              <h3>
                The
                <span className="red-text"> "FOUNDATIONAL EXPERTS"</span> for
                everything catching:
              </h3>
              <h5>
                "We provide players with the skills to master their craft &
                elevate their game."
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/*TIMELINE START */}
      {/*1. SIGNUP FORM start*/}
      <Timeline position="alternate">
        {/*"learn-more-Container" START */}
        <Container className="learn-more-container">
          <h1>
            <span className="red-text">
              <Link to="/learn-more">LEARN MORE</Link>
            </span>
          </h1>
          <h4>Unlock the benefits of 301_catching: </h4>
          <p> Follow the step-by-step guide below.</p>
        </Container>
        {/*"learn-more-Container" END */}

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          ></TimelineOppositeContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            <Typography>
              <Col sm={10} className="register-form-col">
                <Container className="register-form" style={{ margin: "20px" }}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check it out" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Container>
              </Col>
              {/*1. SIGNUP FORM end*/}
            </Typography>
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot color="primary">
              <LockIcon />
            </TimelineDot>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LockOpenIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography>
              <Container className="training-card" style={{ margin: "20px" }}>
                <h3 className="timeline-header">Step 1: SIGN UP TODAY!</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero sint sit deserunt cupiditate tempore alias. Nobis rem
                  alias architecto porro vel quisquam iste beatae suscipit
                  voluptatum. Voluptas sapiente modi deserunt?
                </p>
              </Container>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        {/*"1. SIGN UP TODAY" end */}

        {/*"2. WHO WE ARE" start */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {/*!!!!!!!!!!!!!!!!!ADD CONTAINER IMAGE OF SORT */}
            <Container className="who-container"></Container>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <FitnessCenterIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span"></Typography>
            {/*!!!!!!!!!!!!!!!!!ADD CONTAINER TEXT FOR TRAINING */}
            <Typography>
              <Container className="training-card" style={{ margin: "20px" }}>
                <h3 className="timeline-header">Step 2: WHO WE ARE</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero sint sit deserunt cupiditate tempore alias. Nobis rem
                  alias architecto porro vel quisquam iste beatae suscipit
                  voluptatum. Voluptas sapiente modi deserunt?
                </p>
              </Container>
            </Typography>
          </TimelineContent>
        </TimelineItem>

        {/*"2. WHO WE ARE" end*/}

        {/*"3. WHAT WE DO" start*/}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            {/*!!!!!!!!!!!!!!!!!ADD CONTAINER IMAGE OF SORT */}
            Training Services
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <FitnessCenterIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span"></Typography>
            {/*!!!!!!!!!!!!!!!!!ADD CONTAINER TEXT FOR TRAINING */}
            <Typography>
              <Container className="training-card" style={{ margin: "20px" }}>
                <h3 className="timeline-header">Step 3: WHAT WE DO</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero sint sit deserunt cupiditate tempore alias. Nobis rem
                  alias architecto porro vel quisquam iste beatae suscipit
                  voluptatum. Voluptas sapiente modi deserunt?
                </p>
              </Container>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        {/*"3. WHAT WE DO" end*/}
      </Timeline>
    </>
  );
}
