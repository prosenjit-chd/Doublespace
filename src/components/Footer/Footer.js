import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { BsFacebook, BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <Container fluid className="mt-5 pt-5">
            <div className="footer-container text-white px-lg-5 pt-5" >
                <Row>
                    <Col lg="5" xs="12">
                        <div className="px-3">
                            <div className="d-flex align-items-center mb-2">
                                <img style={{ height: 50 }} className='rounded-circle p-1' src="https://i.ibb.co/GRwWJT0/Doublespace-Logo.jpg" alt="" />
                                <h3 className="primary-color">Doublespace</h3>
                            </div>
                            <p className="text-secondary fs-6">Architecture is a passion, a vocation, a calling – as well as a science and a business. It has been described as a
                                social art and also an artful science. Architecture must be of the highest quality of design. <span className="fst-italic"> ~ Partha Bala</span></p>
                            <div className="fs-3">
                                <a target="_blank" className='text-decoration-none' href="https://www.facebook.com/Doublespace-135545037328535"> <BsFacebook className="me-3 text-primary" /></a>
                                <BsTwitter className="me-3" />
                                <BsLinkedin className="me-3" />
                                <BsWhatsapp />
                            </div>
                        </div>
                    </Col>
                    <Col lg="2" xs="6">
                        <ListGroup className="mt-5">
                            <ListGroup.Item className="text-white bg-transparent border-0 mb-2 fs-4" style={{ fontFamily: 'Playfair Display' }}>Navigation</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">Home</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">About</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">Services</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">Blog</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">Contact</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg="2" xs="6">
                        <ListGroup className="mt-5">
                            <ListGroup.Item className="text-white bg-transparent border-0 mb-2 fs-4" style={{ fontFamily: 'Playfair Display' }}>Services</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">Design</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">3D</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">Rongdhonu</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">Meghrong</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg="3" xs="12">
                        <ListGroup className="mt-5">
                            <ListGroup.Item className="text-white bg-transparent border-0 mb-2 fs-4" style={{ fontFamily: 'Playfair Display' }}>Contact Us</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">H#91/C, R#7A, DHANMONDI, Dhaka-1209, Bangladesh</ListGroup.Item>
                            <ListGroup.Item className="text-white bg-transparent border-0">doublespacearchitect@gmail.com</ListGroup.Item>
                            <ListGroup.Item className="text-warning bg-transparent border-0 fw-bold fs-4">(+880) 1745667871</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <div className="text-center pb-3 mt-5 pt-5">© 2022 Doublespace . All rights reserved</div>
            </div>
        </Container>
    );
};

export default Footer;