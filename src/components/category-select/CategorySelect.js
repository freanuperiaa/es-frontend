import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom"

import "../../assets/styles/CategorySelect.css"


const CategorySelect = () => {

    /**
     * TODO:
     * 
     * 1. For the category buttons, ADD ANIMATION
     *      something like, if it is hovered on, add a pulsating/exciting animation
     */

    let [category, setCategory] = useState("");

    let onCatOneClick = (e) => {
        setCategory("depression");
    }

    let onCatTwoClick = (e) => {
        setCategory("anxiety");
    }

    let onCatThreeClick = (e) => {
        setCategory("mania");
    }

    let onCatFourClick = (e) => {
        setCategory("bipolar");
    }

    let onCatFiveClick = (e) => {
        setCategory("ptsd");
    }

    return (
        <div className="category-select-container">
            <p className="main-text">Now please tell us,</p>
            <p className="main-text">what are you most worried of?</p>

            <div className="buttons-column">
                <Button 
                    className="category-button cat-one"                
                    onClick={onCatOneClick}
                >
                    Depression
                </Button>

                <Button 
                    className="category-button cat-two"
                    onClick={onCatTwoClick}
                >
                    Anxiety
                </Button>

                <Button 
                    className="category-button cat-three"
                    onClick={onCatThreeClick}
                >
                    Mania
                </Button>

                <Button 
                    className="category-button cat-four"
                    onClick={onCatFourClick}
                >
                    Bipolar Disorder
                </Button>

                <Button 
                    className="category-button cat-five"
                    onClick={onCatFiveClick}
                >
                    Post-Traumatic Stress Disorder (PTSD)
                </Button>
            </div>

            <div className="proceed-button-cont">
                <Link 
                    to={"/test/" + category}
                >
                    <Button className="proceed-button">Proceed</Button>
                </Link>
            </div>

        </div>
    )
}

export default CategorySelect;