import React from "react";
import {Button} from "react-bootstrap";
import {Link, useParams} from "react-router-dom"

import "../../assets/styles/Test.css"
import {questions} from "../../utils/generic.utils.js"


const Test = () => {

    let {category} = useParams();

    /**
     * let the static indexing ("depression") below be until the questions and categories are already set.
     */

    let currentQuestions = questions["depression"]
    console.log(currentQuestions)

    console.log()
    
    return (
        <div className="test-container">
            <p className="title">{category} Test</p>
            <p className="sub-title">For the past two weeks, tell us to what extent you have experienced the following things.</p>

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