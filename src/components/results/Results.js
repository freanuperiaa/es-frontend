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
    let mildMessage = "There's a low chance that you have "  + category + ". Reaching out to your friends and loved ones might help you with whatever you're feeling. Talking to a mental health professional will give you a better understanding."
    let highRiskMessage = "You might have " + category + ". Please contact a psychiatrist whenever you are free"
    let severeMessage = "You are at a high risk of having " + category + ". Please contact a psychiatrist right away."

    let message = (percentage < 25)
                    ? noneMessage
                    : (percentage < 50)
                        ? mildMessage
                        : (percentage < 75)
                            ? highRiskMessage
                            : severeMessage

    let getLongMessage = () => {
        if (category === "depression") {
            return "Depression is a common mood disorder that causes a persistent feeling of sadness and loss of interest. Being depressed can feel like you are carrying a heavy burden, but know that you are not alone. Whether you might have it or not, always remember that it's okay to reach out to a loved one for support. It’s okay to ask for help. It’s okay to scream and cry, and it’s okay to laugh. You are loved. It will pass, even though it feels like it won't. "
        } else if (category === "anxiety") {
            return "People with anxiety disorders frequently have intense, excessive and persistent worry and fear about everyday situations. Often, anxiety disorders involve repeated episodes of sudden feelings of intense anxiety and fear or terror that reach a peak within minutes called a panic attack. When you're feeling anxious, opening up to a friend helps reduce this feeling. Your worries may not go away on their own, but opening up to others is usually a positive experience that strengthens relationships and makes you feel supported."
        } else if (category === "mania") {
            return "Mania is a mental illness marked by periods of great excitement or euphoria, delusions, and overactivity. Whenever you feel any cause of concern in your personal behavior, talk to others about how you are feeling. Remember that whatever it is that you are feeling, it is valid. Sometimes the feeling may not go away on its own, so do not be afraid to ask for help. Sometimes getting support makes all the difference. "
        } else if (category === "bipolar") {
            return "Bipolar Disorder is a mental health disorder that causes extreme shifts in a person's mood, energy, and ability to function. People with bipolar disorder experience intense emotional states that typically occur during distinct periods of days to weeks, called mood episodes. Whether you have this condition or not, remember that opening up to someone goes a long way when you are feeling confused. Whenever you feel like giving up, tell yourself to hold on for another minute, hour, day — whatever you feel you can do."
        } else if (category === "ptsd") {
            return "Post-traumatic stress disorder (PTSD) is a mental health condition that's triggered by a terrifying event — either experiencing it or witnessing it. Symptoms may include flashbacks, nightmares and severe anxiety, as well as uncontrollable thoughts about the event. If you have ever had any traumatic experience before, getting help and support as soon as possible may prevent normal stress reactions from getting worse and developing into PTSD. Turn to your family and friends who will listen and offer you comfort. You may also consider seeking out a mental health professional for a brief course of therapy."
        } else {
            return ""
        }
    }

    let getTitle = () => {
        if (category === "depression") return "Depression"
        else if (category === "anxiety") return "Anxiety"
        else if (category === "mania") return "Mania"
        else if (category === "bipolar") return "Bipolar Disorder"
        else if (category === "ptsd") return "Post-Traumatic Stress Disorder"
    }

    return (
        <div className="results-container">

            <p className="results-title">{getTitle()} Test Results</p>
            
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

                <p className="message-for-all">{getLongMessage()}</p>

                <p className="external-links">
                    Read more about mental health &nbsp;
                    <a 
                        href="https://www.mentalhealth.gov/basics/what-is-mental-health"
                        className ="link"
                    >
                        <strong>here</strong>
                    </a>.
                    <br/><div className="nonce"></div>
                    List of mental health professionals in the Philippines:&nbsp;
                    <a 
                        href="http://www.silakbo.ph/help/"
                        className ="link"
                    >
                        <strong>here</strong>
                    </a>.
                </p>
            </div>
        </div>
    )
}

export default Results;