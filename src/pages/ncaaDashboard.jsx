import React from "react";
import { Row } from "react-bootstrap";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export default function Dashboard() {
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


        <Row className="recruiting-row">
        <h1>RECRUITING</h1>
        </Row>
        </>
    )
}