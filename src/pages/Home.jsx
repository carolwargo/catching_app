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
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
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
              <h3>The
              <span className="red-text"> "FOUNDATIONAL EXPERTS"
              </span> for everything catching:</h3>
              <h5>
                "We provide players with the skills to master their craft & elevate
                their game."
              </h5>
            </div>

            {/*INPUT BUTTON start*/}
           <div className="input-btn">
              <Link to="/signup">
                <button className="signup-btn">Sign me up</button>
              </Link>
            </div>
            {/*INPUT BUTTON end*/}
          </div>
        </div>
      </div>

      {/*Timeline- "STEP 1 start*/}
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Step 1: Become a member 
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <LockOpenIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          {/*SIGNUP FORM left side heading start*/}
          <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="div" sx={{  marginRight: "10px" }}>
            <h3 style={{ fontWeight: "bold" }}> Sign up today!</h3> 
              <p>  Sign-up to capture your "Player Profile", <br></br>  real-time updates, exclusive 
              content & more!</p> 
            </Typography>
            {/*SIGNUP FORM left side heading end*/}

            {/*Timeline-SIGNUP FORM start*/}
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
              {/*SIGNUP FORM end*/}
            </Typography>
          </TimelineContent>
        </TimelineItem>
        {/*Timeline- "STEP 1" end*/}

        {/*Timeline- "SOFTBALL"-"BASEBALL" start*/}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
           Step 2: Baseball Catchers Training
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              BASEBALL
            </Typography>
            <Typography>Because men are p&*%#!#&- LADIES FIRST!</Typography>
          </TimelineContent>
        </TimelineItem>
         {/*Timeline-"BASEBALL" end*/}

           {/*Timeline-"SOFTBALL" start*/}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <HotelIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
             SOFTBALL
            </Typography>
            <Typography>Because GIRLS RULE, BOYS DROOL!</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <RepeatIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              BASEBALL
            </Typography>
            <Typography>Because this is the life you love!</Typography>
          </TimelineContent>
        </TimelineItem>
        {/*Timeline-"SOFTBALL" end*/}

      </Timeline>
    </>
  );
}
