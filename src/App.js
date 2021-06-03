import React from "react";

import {Container} from "react-bootstrap"

import './assets/styles/App.css';
import Navbar from "./components/Navbar.js"

function App() {
  return (

    <div>
        <Navbar />
        <div className="App" style={{textAlign: "center"}}>
          <h2>ES Frontend</h2>
          <br/>
          <h1>Testing the typography</h1>
          <h1>How are you feeling today</h1>
          <h2>Testing the typography</h2>
          <h5>Testing the typography</h5>
          <p
            style={{fontSize: 36}}
          >Loren ipsum dolor sit amet sit consectutor zombadingerz</p>

        </div>

    </div>
  );
}

export default App;
