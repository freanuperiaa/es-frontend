import React from "react";
import {AnimatePresence} from "framer-motion"
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Container,
  Row,
  Col,
} from "react-bootstrap"
import {BrowserRouter, Route, Switch, useLocation} from 'react-router-dom';

import './assets/styles/App.css';
import Navbar from "./components/Navbar.js"
import Home from "./components/home/Home.js"
import About from "./components/about/About.js"
import Start from "./components/start/Start.js"
import Test from "./components/test/Test.js"
import Results from "./components/results/Results.js"
import CategorySelect from "./components/category-select/CategorySelect.js"

function App() {


  return (
    <div>
        <BrowserRouter>    
            <Navbar />
            <Container>
                <Row className="mt-5 justify-content-center">
                    <Col xs={11} md={10} lg={8} xl={8}>
                        <AnimatePresence exitBeforeEnter >
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/about" component={About} />
                                <Route exact path="/start" component={Start} />
                                <Route exact path="/category-select" component={CategorySelect}/>
                                <Route exact path="/test/:category" component={Test} />
                                <Route exact path="/results" component={Results} />
                            </Switch>
                        </AnimatePresence>

                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
    </div>
  );
}

export default App;
