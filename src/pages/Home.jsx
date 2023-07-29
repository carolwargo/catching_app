import React from "react";
import "../Styles/Home.css";
import { Link } from "react-router-dom";
import Contact from "./Contact";

export default function Home() {
  return (
    <>

    
      <div className="container-body">
        <div className="left-col">
          <div className="content">
            <h1>301_catching</h1>
           <h3>FOUNDATIONAL EXPERTS</h3>
            <p>Master your craft & elevate your game</p>
            <div className="input-btn">
              <Link to= {Contact}><button>Sign me up</button></Link> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
