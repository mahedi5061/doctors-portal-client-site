import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavbarComponent.css';

const NavbarComponent = () => {
    return (
        <div>
            <Navbar  expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto navbar">
                        <Nav.Link><Link to="/home"  className="ms-5 nv">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/about"  className="ms-5 nv">About</Link></Nav.Link>
                        <Nav.Link><Link to="/dentalService"  className="ms-5 nv">Dental Services</Link></Nav.Link>
                        <Nav.Link><Link to="/reviews"  className="ms-5 nv nv-same">Reviews</Link></Nav.Link>
                        <Nav.Link><Link to="/Blog"  className="ms-5 nv nv-same">Blog</Link></Nav.Link>
                        <Nav.Link><Link to="/contact"  className="ms-5 nv nv-same">Contact Us</Link></Nav.Link>
                         
                    </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;