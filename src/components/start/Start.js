import React, {useState, useEffect} from "react";
import {Button} from "react-bootstrap";
import {Link} from 'react-router-dom';

import "../../assets/styles/Start.css"


const Start = () => {

    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowButton(true)
        }, 5500)
    }, [showButton])

    console.log(showButton)

    let buttonStyle = {
        visibility: showButton === true
                        ? "visible"
                        : "hidden"
    }

    return (
        <div className="start-container">
            <p className="before-anything animate__animated animate__fadeIn">
                Before anything else,
            </p>
            
            <p className="tell-you animate__animated animate__fadeIn">
                we would like to tell you that whatever it is that you're feeling,
            </p>

            <p className="is-valid animate__animated animate__fadeIn">
                    is <span className="valid animate__animated animate__flash">_valid_</span>.
            </p>

            <div className="button-row">
                <Link to="/test">
                    <Button 
                        className="continue-button animate__animated animate__pulse"
                        style={buttonStyle}
                    >
                        Continue
                    </Button>
                </Link>
            </div>

        </div>
    );
}

export default Start;