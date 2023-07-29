import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Footer from '../components/Footer';
import Header from '../components/Header';

import "../Styles/Home.css"





export default function Home() {
  return (
    <>
      <Header />

      <div className="container-body">
      <div className="left-col">
     
          <div className="content">
          <Row xs={3} md={5} lg={3}>
            <Col>
                <h1>301_catching</h1>
                <p>MASTER YOUR CRAFT-ELEVATE YOUR GAME</p>
                
            </Col>
        </Row>

          <Row xs={3} md={5} lg={3}>
                <Col>
            
                <div className="input-wrapper">
                    <label for="name"></label>
                    <input type="text"></input>
                </div>
                <br></br>
                <div className="input-wrapper">
                    <label for="email"></label>
                    <input type="text"></input>
                </div>
                <br></br>
                <div className="input-wrapper">
                    <button>Sign me up</button>
                </div>
            </Col>
            </Row>
         

          </div>

            <div className="form-container">


          </div>


        </div>

        <div className="right-col">

          <div className="content-form">

            <div className="input-wrapper">

              <label for="name"></label>
              <input type="text"></input>

            </div>

            <div className="input-wrapper">

              <label for="email"></label>
              <input type="text"></input>

            </div>

        </div>

            <div className="input-wrapper">

              <button>Sign me up</button>

            </div>

          </div>

        </div>
      
      <Footer />
    </>
  );
}
