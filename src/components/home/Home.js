import React from "react";
import {Button} from "react-bootstrap"

import "../../assets/styles/Home.css"

const Home = () => {
    return (
        <div className="home-container">
            <p className="heading">Hey there! Have you been well lately?</p>
            <p className="subheading">Press "start" to get an idea on how you've been feeling.</p>
            <div className="buttons-row">
                <Button className="about-button">About</Button>
                <Button className="start-button">Start</Button>
            </div>
        </div>
    )
}

export default Home;