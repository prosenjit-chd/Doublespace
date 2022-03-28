import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';


// Header Internal Style 
const Header = () => {
    // const activeStyle = {
    //     fontWeight: "bold",
    //     color: "#00095E",
    //     borderBottom: "solid 2px #165aee"
    // }


    const activeStyle = {
        fontWeight: "bold",
        color: "#A48484",
        borderBottom: "solid 2px #A48484"
    }

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.onscroll = function () {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    }, []);
    // Internal Style Use here 
    return (
        <>
            <Navbar bg="white" expand="lg" fixed="top" className={scrolled ? "shadow py-3" : "py-3"}>
                <Container fluid>
                    <Navbar.Brand style={{ cursor: 'pointer' }} className="d-flex align-items-center fs-3 primary-color">
                        <img
                            alt=""
                            src="https://i.ibb.co/GRwWJT0/Doublespace-Logo.jpg"
                            height="40"

                            className="d-inline-block align-top rounded-circle p-1"
                        />{' '}
                        <span className="fw-bold" style={{ color: '#A99577' }}>Doublespace</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center fw-bold primary-color" style={{ fontSize: 18 }}>
                            <Nav.Link as={NavLink} activeStyle={activeStyle} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} activeStyle={activeStyle} to="/projects">Projects</Nav.Link>
                            <Nav.Link as={NavLink} activeStyle={activeStyle} to="/about">About</Nav.Link>
                            <Nav.Link as={NavLink} activeStyle={activeStyle} to="/contact">Contact</Nav.Link>
                            {/* toggle loging logout  */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ marginTop: 95 }}>

            </div>
        </>
    );
};

export default Header;