import React from "react";
import {useLocation} from 'react-router-dom'
import { 
    CircularProgressbarWithChildren, 
    buildStyles   
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import "../../assets/styles/Results.css"

const Results = () => {

    const location = useLocation();
    const myParams = location.state.params;

    console.log(myParams)

    let category = myParams.category
    let score = myParams.score
    let total = myParams.total
    let over = score + "/" + total
    let percentage = (score / total) * 100

    let emoji = (percentage < 25)
                    ? "🙂"
                    : (percentage < 50)
                        ? "😐"
                        : (percentage < 75)
                            ? "😢"
                            : "😖"

    let noneMessage = "You are in the clear! :) Make sure to take care of your mental health"
    let mildMessage = "There's a low chance that you have"  + category + ". Reaching out to your friends and loved ones might help you with whatever you're feeing"
    let highRistMessage = "You most likely have " + category + ". Please contact a psychiatrist whenever you are free"
    let severeMessage = "You are at a very high risk of having" + category + ". Please contact a psychiatrist right away."

    let message = (percentage < 25)
                    ? noneMessage
                    : (percentage < 50)
                        ? mildMessage
                        : (percentage < 75)
                            ? highRistMessage
                            : severeMessage

    return (
        <div className="results-container">

            <p className="results-title">{category} Test Results</p>
            
            <div className="progressbar-container">
                {/* 
                    TODO: add animation to progress bar. PLEASE
                    https://github.com/kevinsqi/react-circular-progressbar#user-content-animating-text
                */}
                <CircularProgressbarWithChildren
                    value={percentage}
                    styles={buildStyles({
                        pathColor: "#FCCFE4",
                    })}
                >
                    <p className="inside-progress-image">
                        {emoji}
                    </p>
                    <p className="inside-progress-text">
                        {over}
                    </p>

                </CircularProgressbarWithChildren>

            </div>
            
            <div className="results-body">
                <p className="diagnosis">{message}</p>

                <p className="message-for-all">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar imperdiet justo. Nullam in purus eros. Maecenas viverra aliquet velit, a finibus tortor vestibulum a. Vestibulum aliquam et arcu at pulvinar. Aliquam aliquam auctor mi, quis interdum mauris finibus vitae. In id lobortis lacus, ut pretium dui. Aliquam a eros turpis. Duis vitae tortor quis arcu auctor tempus ut vitae sem. Morbi ut nunc a felis auctor consequat. Nam luctus nibh fermentum elit iaculis venenatis in in urna.
                </p>

                <p className="external-links">
                    Read more about mental health &nbsp;
                    <a 
                        href="https://www.mentalhealth.gov/basics/what-is-mental-health"
                        className ="link"
                    >
                        here
                    </a>.
                    <br/>
                    List of mental health professionals in the Philippines:&nbsp;
                    <a 
                        href="http://www.silakbo.ph/help/"
                        className ="link"
                    >
                        here
                    </a>.
                </p>
            </div>
        </div>
    )
}

export default Results;