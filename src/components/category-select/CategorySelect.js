import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import Swal from 'sweetalert2'
import {AnimatePresence, motion} from "framer-motion";

import "../../assets/styles/CategorySelect.css"


const CategorySelect = () => {

    /**
     * TODO:
     * 
     * 1. For the category buttons, ADD ANIMATION
     *      something like, if it is hovered on, add a pulsating/exciting animation
     */

    let [category, setCategory] = useState("");

    const history = useHistory();

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

    const popoverDepression = (
        <Popover>
            <Popover.Content
                style={{
                    fontFamily: "Source Code Pro",
                    padding: "10px",
                }}
            >
                This is when you feel that there is a deep-rooted sadness inside you. Depression is a complex thing, and learning about it might also help you learn some things about yourself :)
            </Popover.Content>
        </Popover>
    )

    const popoverAnxiety = (
        <Popover>
            <Popover.Content
                style={{
                    fontFamily: "Source Code Pro",
                    padding: "10px",
                }}
            >
                This is when you're feeling afraid and uneasy, worried that something bad might happen
            </Popover.Content>
        </Popover>
    )

    const popoverMania = (
        <Popover>
            <Popover.Content
                style={{
                    fontFamily: "Source Code Pro",
                    padding: "10px",
                }}
            >
                Mania is the word for when you're <strong>excessively</strong> happy and hyperactive and when you're feeling <strong>intense</strong> emotions 
            </Popover.Content>
        </Popover>
    )

    const popoverBipolar = (
        <Popover>
            <Popover.Content
                style={{
                    fontFamily: "Source Code Pro",
                    padding: "10px",
                }}
            >
                Also known as Manic Depression, this is a disorder that brings in very high and low moods and changes in sleep, energy, thinking, and behaviour.
            </Popover.Content>
        </Popover>
    )

    const popoverPTSD = (
        <Popover>
            <Popover.Content
                style={{
                    fontFamily: "Source Code Pro",
                    padding: "10px",
                }}
            >
                A disorder that occurs when a person experiences a traumatic event. A person who has PTSD can feel physically or emotionally terrible whenever they get reminded of that event.
            </Popover.Content>
        </Popover>
    )

    let proceed = () => {
        if (category !== "") history.push("/test/" + category)
        else {
            Swal.fire({
                title: 'Wait',
                text: 'Please pick a category.',
                icon: 'warning',
                confirmButtonText: 'Okay'
            })
        }

    }

    return (

        <motion.div 
            initial={{ 
                opacity: 0,
                y: "-20%"
            }}
            animate={{ 
                opacity: 1,
                y: 0
            }}
            exit={{ 
                opacity: 0,
                y: "-100%"
             }}
            transition={{ duration: 0.5 }}
        >
            <div className="category-select-container">
                <p className="main-text">Now please tell us,</p>
                <p className="main-text">what are you most worried of?</p>

                <div className="buttons-column">


                    <OverlayTrigger
                        placement="right"
                        trigger="hover"
                        delay={{show: 300, hide: 150}}
                        overlay={popoverDepression}
                    >
                        <Button 
                            className="category-button cat-one"                
                            onClick={onCatOneClick}
                        >
                            Depression
                        </Button>
                    </OverlayTrigger>

                    
                    <OverlayTrigger
                        placement="right"
                        trigger="hover"
                        delay={{show: 300, hide: 150}}
                        overlay={popoverAnxiety}
                    >
                        <Button 
                            className="category-button cat-two"
                            onClick={onCatTwoClick}
                        >
                            Anxiety
                        </Button>
                    </OverlayTrigger>
                    
                    <OverlayTrigger
                        placement="right"
                        trigger="hover"
                        delay={{show: 300, hide: 150}}
                        overlay={popoverMania}
                    >
                        <Button 
                            className="category-button cat-three"
                            onClick={onCatThreeClick}
                        >
                            Mania
                        </Button>
                    </OverlayTrigger>
                    
                    <OverlayTrigger
                        placement="right"
                        trigger="hover"
                        delay={{show: 300, hide: 150}}
                        overlay={popoverBipolar}
                    >
                        <Button 
                            className="category-button cat-four"
                            onClick={onCatFourClick}
                        >
                            Bipolar Disorder
                        </Button>
                    </OverlayTrigger>
                    
                    <OverlayTrigger
                        placement="right"
                        trigger="hover"
                        delay={{show: 300, hide: 150}}
                        overlay={popoverPTSD}
                    >
                        <Button 
                            className="category-button cat-five"
                            onClick={onCatFiveClick}
                        >
                            Post-Traumatic Stress Disorder (PTSD)
                        </Button>
                    </OverlayTrigger>
                </div>

                <div className="proceed-button-cont">
                    <Button 
                        className="proceed-button"
                        onClick={() => {proceed()}}
                    >
                        Proceed
                    </Button>
                    
                </div>

            </div>

        </motion.div>
    )
}

export default CategorySelect;