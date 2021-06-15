import React from "react";
import {Button} from "react-bootstrap"
import {Link} from 'react-router-dom';
import {AnimatePresence, motion} from "framer-motion";

import "../../assets/styles/Home.css"

const Home = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="home-container">
                <p className="heading">Hey there! Have you been well lately?</p>
                <p className="subheading">Press "start" to get an idea on how you've been feeling.</p>
                <div className="buttons-row">
                    <Link to="/about">
                        <Button className="about-button">About</Button>
                    </Link>
                    <Link to="/start">
                        <Button className="start-button">Start</Button>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default Home;