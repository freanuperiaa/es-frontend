import React from "react"

import {Button} from "react-bootstrap"

import "../../assets/styles/Answers.css"


const Answers  = ({answers, selectAnswerCallback}) => {

    return (
        <div className="answers-container">
            {answers.map(answer => 
                <Button
                    key={answer.answer}
                    className="answer-button"
                    onClick={() => selectAnswerCallback(answer)}
                >
                    {answer.answer}
                </Button>
            )}
        </div>
    )
}


export default Answers
