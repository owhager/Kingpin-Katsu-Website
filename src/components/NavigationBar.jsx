import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav as BootstrapNav, Container, Button } from 'react-bootstrap';
import katsuLogo from '../../assets/Logo.png'
import '../../katsu.css'

export default function NavigationBar() {
    const navigate = useNavigate();

    function handleOrder() {
        window.location.href = 'https://kingpin-katsu.square.site/s/order'; 
    }    
    return (
        <Navbar className="my-katsu-navbar"  expand="lg">
            <Container>
                {/* logo that links to homepage */}
                <Navbar.Brand>
                <img
                    src={katsuLogo}
                    alt="Kingpin Katsu Logo Image"
                    style={{ width: '55px', height: '55px' }}
                />
                </Navbar.Brand>
                <div className="navbar-divider"></div>
                <Navbar.Toggle aria-controls="main-navbar-nav" />
                <Navbar.Collapse id="main-navbar-nav">
                    <BootstrapNav className="ms-auto">
                        <BootstrapNav.Link as={Link} to="/" className="navbar-link-item-text">
                            Home
                        </BootstrapNav.Link>
                        <BootstrapNav.Link as={Link} to="/about" className="navbar-link-item-text">
                            About
                        </BootstrapNav.Link>
                        <BootstrapNav.Link as={Link} to="/contact" className="navbar-link-item-text">
                            Contact
                        </BootstrapNav.Link>
                           <Button className="order-button" onClick={handleOrder}>
                             ORDER NOW
                           </Button>
                    </BootstrapNav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}