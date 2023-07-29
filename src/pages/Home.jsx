import React from "react";

import Header from "../components/Header";

import "../Styles/Home.css";
import { Link } from "react-router-dom";
import Contact from "./Contact";

export default function Home() {
  return (
    <>

      <Header />
      <div className="container-body">
        <div className="left-col">
          <div className="content">
            <h1>301_catching</h1>
            <p>MASTER YOUR CRAFT-ELEVATE YOUR GAME</p>
            <div className="input-btn">
              <Link to= {Contact}><button>Sign me up</button></Link> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
