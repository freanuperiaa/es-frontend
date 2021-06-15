import React from "react";
import {Navbar} from "react-bootstrap";
import {Link} from "react-router-dom"

import '../assets/styles/Navbar.css'


const NavBar = () => {
    return (
        <Navbar className="my-nav " expand="lg" variant="light">
            <Navbar.Brand>
                <Link to="/" style={{textDecoration: "none"}}>
                    <p className="navbar-brand">howimfeelingnow.</p>
                </Link>
            </Navbar.Brand>
        </Navbar>
    )
}

export default NavBar;
