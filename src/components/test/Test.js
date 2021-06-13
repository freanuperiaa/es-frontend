import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {Link, useParams} from "react-router-dom"
import Swal from 'sweetalert2'

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
        let curAns = curAnswers;
        curAns.pop()
        setCurAnswers(curAns)
    }

    let nextQuestion = () => {
        console.log(curAnswer)
        if (Object.keys(curAnswer).length != 0) { // https://medium.com/@carlibotes/is-the-object-is-empty-afdabee326dc
            console.log('curAnswer is not empty')
            let newCurrentQuestionIndex = curQuestionIndex + 1;
            setCurQuestionIndex(newCurrentQuestionIndex)
            setCurAnswers([...curAnswers, curAnswer])
            setCurAnswer({})
        }else {
            console.log('curAnswer is empty')
            Swal.fire({
                title: 'Woah there',
                text: 'Please pick an answer',
                icon: 'warning',
                confirmButtonText: 'Okay'
            })
        }

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
                {
                    curAnswers.length === 0
                        ? <div></div>
                        :   <Button 
                                className="previous-button"
                                onClick={previousQuestion}
                            >
                                Previous
                            </Button>
                }

                {
                    (curQuestionIndex + 1) === currentQuestions.length
                        ? <Button
                            className="proceed"
                            onClick={() => {console.log("proceed button clicked")}}
                          >
                            Submit Answers  
                          </Button>
                        : <Button 
                              className="next-button"
                              onClick={nextQuestion}
                          >
                              Next
                          </Button>
                }
            </div>

        </div>
    )
}

export default Test;