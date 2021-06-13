import React from "react";
import {useLocation} from 'react-router-dom'

import "../../assets/styles/Results.css"

const Results = () => {

    const location = useLocation();
    const myParams = location.state.params;

    console.log(myParams)

    return (
        <div className="results-container">
            <h3>*Results here*</h3>
            <h5>You are okay.</h5>
            <br /> <br />
            <h1>:)</h1>
        </div>
    )
}

export default Results;