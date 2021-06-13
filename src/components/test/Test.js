import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom"

import "../../assets/styles/Test.css"


const Test = (props) => {

    console.log(props.location.category)

    return (
        <div className="test-container">
            <h3>*Questions here*</h3>

            <div className="buttons-row">
                <Button className="previous-button">Previous</Button>
                <Link to="/test/results">
                    <Button className="next-button">Next</Button>
                </Link>
            </div>

        </div>
    )
}

export default Test;