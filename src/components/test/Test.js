import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {Link, useParams, useHistory} from "react-router-dom"
import Swal from 'sweetalert2'

import "../../assets/styles/Test.css"
import Answers from "./Answers.js"
import {questions} from "../../utils/generic.utils.js"


const Test = () => {

    let {category} = useParams();
    let [curQuestionIndex, setCurQuestionIndex] = useState(0);
    let [curAnswers, setCurAnswers] = useState([])
    let [curAnswer, setCurAnswer] = useState({})

    const history = useHistory()

    let previousQuestion = () => {
        let newCurrentQuestionIndex = curQuestionIndex - 1;
        setCurQuestionIndex(newCurrentQuestionIndex)
        let curAns = curAnswers;
        curAns.pop()
        setCurAnswers(curAns)
    }

    let nextQuestion = () => {
        if (Object.keys(curAnswer).length != 0) { // https://medium.com/@carlibotes/is-the-object-is-empty-afdabee326dc
            let newCurrentQuestionIndex = curQuestionIndex + 1;
            setCurQuestionIndex(newCurrentQuestionIndex)
            setCurAnswers([...curAnswers, curAnswer])
            setCurAnswer({})
        }else {
            Swal.fire({
                title: 'Woah there',
                text: 'Please pick an answer',
                icon: 'warning',
                confirmButtonText: 'Okay'
            })
        }

    }

    let selectAnswer = (answer) => {
        setCurAnswer(answer)
    }

    let submitAnswers = () => {

        if (Object.keys(curAnswer).length != 0) {
            setCurAnswers([...curAnswers, curAnswer])
            
            let sum = 0;
            curAnswers.forEach(answer => {
                sum += answer.score
            })

            // Since the last question is not included in the `curAnswers` array above, i'll just add it lol
            sum += curAnswer.score;
    
            /**
            this can be easily and elegantly done with state management, but im lazy
            got into more trouble instead lol
            anyways, here's a solution, apparently react-router's location works like a charm
            https://stackoverflow.com/questions/59464337/how-to-send-params-in-usehistory-of-react-router-dom#
             */
            history.push("/results", {params: {
                category: category,
                score: sum,
                total: totalScore
            }})
        }else {
            Swal.fire({
                title: 'Woah there',
                text: 'Please pick an answer',
                icon: 'warning',
                confirmButtonText: 'Okay'
            })
        }


    }

    let getAnswers = () => {
        if (category === "depression") return "Depression"
        else if (category === "anxiety") return "Anxiety"
        else if (category === "mania") return "Mania"
        else if (category === "bipolar") return "Bipolar Disorder"
        else if (category === "ptsd") return "Post-Traumatic Stress Disorder"
    }

    /**
     * let the static indexing ("depression") below be until the questions and categories are already set.
     */

    let currentQuestions = questions[category].questions
    let totalScore = questions[category].totalScore

    return (
        <div className="test-container">
            <p className="title">{getAnswers()} Test</p>
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
                    (curQuestionIndex + 1) < currentQuestions.length
                        ? <Button 
                              className="next-button"
                              onClick={nextQuestion}
                          >
                              Next
                          </Button>
                        : <Button
                          className="proceed"
                          onClick={() => {submitAnswers()}}
                        >
                          Submit Answers  
                        </Button>
                }
            </div>

        </div>
    )
}

export default Test;