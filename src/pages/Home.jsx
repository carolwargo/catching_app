import React from 'react';

export default function Home() {
    return (
        <div className="container-body">
            <div className="left-col">
                <div className="content">
                    <h1>Welcome to 301_catching</h1>
                    <p>Master your craft- Elevate your game.</p>
                </div>
            </div>  

           <div className="right-col">
                <div className="content-form">
                    <div class="input-wrapper">
                    <label for="name"></label>
                    <input type="text"></input>
                </div>

                <div class="input-wrapper">
                    <label for="email"></label>
                    <input type="text"></input>
                </div>

                <div class="input-wrapper">
                    <button>Sign me up</button>
                </div>

           </div>
            
        </div>
    </div>
       
    )
}