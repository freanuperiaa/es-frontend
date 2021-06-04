import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Container,
  Row,
  Col,
} from "react-bootstrap"


import './assets/styles/App.css';
import Navbar from "./components/Navbar.js"
import Home from "./components/home/Home.js"
import About from "./components/about/About.js"

function App() {
  return (
    <div>
        <Navbar />

        <Container>
            <Row className="mt-5 justify-content-center">
                <Col xs={11} md={10} lg={8} xl={8}>
                    <About />
                </Col>
            </Row>
        </Container>

    </div>
  );
}

export default App;
