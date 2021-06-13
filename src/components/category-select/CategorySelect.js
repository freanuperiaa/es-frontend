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
        setCategory("category-one");
    }

    let onCatTwoClick = (e) => {
        setCategory("category-two");
    }

    let onCatThreeClick = (e) => {
        setCategory("category-three");
    }

    let onCatFourClick = (e) => {
        setCategory("category-four");
    }

    let onCatFiveClick = (e) => {
        setCategory("category-five");
    }

    return (
        <div className="category-select-container">
            <p class="main-text">Now please tell us,</p>
            <p className="main-text">what are you most worried of?</p>

            <div className="buttons-column">
                <Button 
                    className="category-button cat-one"                
                    onClick={onCatOneClick}
                >
                    Category 1
                </Button>

                <Button 
                    className="category-button cat-two"
                    onClick={onCatTwoClick}
                >
                    Category 2
                </Button>

                <Button 
                    className="category-button cat-three"
                    onClick={onCatThreeClick}
                >
                    Category 3
                </Button>

                <Button 
                    className="category-button cat-four"
                    onClick={onCatFourClick}
                >
                    Category 4
                </Button>

                <Button 
                    className="category-button cat-five"
                    onClick={onCatFiveClick}
                >
                    Category 5
                </Button>
            </div>

            <div class="proceed-button-cont">
                <Button className="proceed-button">Proceed</Button>
            </div>

        </div>
    )
}

export default CategorySelect;