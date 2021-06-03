import React from "react";
import {Navbar} from "react-bootstrap";

import '../assets/styles/Navbar.css'


const NavBar = () => {
    return (
        <Navbar className="my-nav " expand="lg" variant="light">
            <Navbar.Brand>
                <p className="navbar-brand">
                howimfeelingnow.
                </p>
            </Navbar.Brand>
        </Navbar>
    )
}

export default NavBar;
