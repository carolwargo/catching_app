import React from 'react';
import about from '../images/about.png'; // Importing image from assets folder

export default function About() {
    return(
        <div className="container-body">
            <div className="left-col">
                <div className="left-content">
                    <h1>ABOUT</h1>
                    <h3>Corey</h3>
                    <h4>title</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quaerat nemo nulla? Similique vel eius libero est sed asperiores ab facere possimus. Doloribus ipsa, ducimus mollitia velit optio vitae voluptatibus.</p>
                    <h3>"Bedrock"</h3>
                    <h4>Philosophy</h4>
                    <p></p>Key Priciples 
                    <img src={about} alt="Corey Clay" /> {/* Dynamic image URL, curly braces needed */}
                    <p>Content</p>
                </div>
            </div>
        
        </div>
    )
}