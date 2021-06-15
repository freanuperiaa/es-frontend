import React from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {motion} from "framer-motion";

import "../../assets/styles/About.css"


const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="about-container">
                <p className="about-one">
                    <span className="howimfeelingnow">howimfeelingnow.</span>
                    <br />
                    is an app for those people who feel like  there's 
                    <br/>
                    <span className="howimfeelingnow">_something wrong with their emotions, behaviours, and feelings</span>_. 
                    <br/>
                    <br/>
                    <span className="howimfeelingnow">howimfeelingnow.</span> is an app for those people who feel &nbsp;
                    <span className="sad emotions">sad</span>, &nbsp;
                    <span className="depressed emotions">depressed</span>, &nbsp;
                    <span className="perturbed emotions">perturbed</span>, &nbsp;
                    <span className="something-wrong emotions">like there's something wrong</span>, &nbsp;
                    <span className="overly-happy emotions">overly happy</span>, &nbsp;
                    <span className="suicidal">suicidal.</span> &nbsp;
                    <br />
                    <br />
                    <span className="read-more">
                    Read more about <span className="mental-health">Mental Health</span> &nbsp;
                    <a 
                        href="https://www.mentalhealth.gov/basics/what-is-mental-health"
                        className ="link"
                    >
                        here
                    </a>.
                    </span>
                </p>

                <p className="about-two">
                    This is a project for CS 404 - Expert Systems, developed by Mickaela Jeorge Mendoza, Mark Alfie Mercado, and Freanu Peria.
                </p>

                <div className="button-row">
                    <Link to="/">
                        <Button className="back-button">
                            Go back
                        </Button>
                    </Link>
                </div>

            </div>
        
        </motion.div>
    )
}

export default About;