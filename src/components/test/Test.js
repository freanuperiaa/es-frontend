import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {Link, useParams} from "react-router-dom"

import "../../assets/styles/Test.css"
import Answers from "./Answers.js"
import {questions} from "../../utils/generic.utils.js"


const Test = () => {

    let {category} = useParams();
    let [curQuestionIndex, setCurQuestionIndex] = useState(0);
    let [curAnswers, setCurAnswers] = useState([])
    let [curAnswer, setCurAnswer] = useState({})

    let previousQuestion = () => {
        let newCurrentQuestionIndex = curQuestionIndex - 1;
        setCurQuestionIndex(newCurrentQuestionIndex)
        setCurAnswers(curAnswers.splice(-1, 1))
    }

    let nextQuestion = () => {
        let newCurrentQuestionIndex = curQuestionIndex + 1;
        setCurQuestionIndex(newCurrentQuestionIndex)
        setCurAnswers([...curAnswers, curAnswer])
        setCurAnswer({})
    }

    let selectAnswer = (answer) => {
        console.log(curAnswers)
        setCurAnswer(answer)
    }

    /**
     * let the static indexing ("depression") below be until the questions and categories are already set.
     */

    let currentQuestions = questions["depression"].questions
    let totalScore = questions["depression"].totalScore

    
    return (
        <div className="test-container">
            <p className="title">{category} Test</p>
            <p className="sub-title">For the past two weeks, tell us to what extent you have experienced the following things:</p>

            <div className="question-answer">
                <p className="question">
                    {currentQuestions[curQuestionIndex].question}
                </p>

                <div className="answers">
                    <Answers 
                        answers={currentQuestions[curQuestionIndex].answers}
                        selectAnswerCallback={selectAnswer}
                    />
                </div>
            </div>

            <div className="buttons-row">
                <Button 
                    className="previous-button"
                    onClick={previousQuestion}
                >
                    Previous
                </Button>

                <Button 
                    className="next-button"
                    onClick={nextQuestion}
                >
                    Next
                </Button>
                
            </div>

        </div>
    )
}

export default Test;