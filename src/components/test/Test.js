import React from "react";
import {Button} from "react-bootstrap";
import {Link, useParams} from "react-router-dom"

import "../../assets/styles/Test.css"


const Test = (props) => {

    let {category} = useParams();

    console.log("freanuasdasdasd", category)
    
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