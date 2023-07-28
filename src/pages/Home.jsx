import React from 'react';
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
            <h1>301_catching</h1>
            <p>Master your craft & Elevate your game.</p>
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

            <div className="input-wrapper">

              <button>Sign me up</button>

            </div>

          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
