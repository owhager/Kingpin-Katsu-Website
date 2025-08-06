import React, { useState, useRef } from 'react';
import { Container, Card, Button, Form, Row, Col, Alert, Image } from 'react-bootstrap';
import ContactForm from './ContactForm';
import Footer from './Footer';
import '../../katsu.css'

export default function Contact() {
    return <Container fluid className='about-container'>
    <Row style={{paddingTop: 50}}>
    <Col md={1}></Col>    
    <Col md={5}>   
        <h1 className='front-page-title' style={{paddingTop: '70px'}}>CONTACT US</h1>
        <div style={{paddingTop: '25px'}}/>
        <p className='homepage-paragraph'>Reach out and let us know if there is anything we can do to make your order special! 
            (unique events, custom packaging, bulk orders, etc.)</p>
    </Col>
    <Col md={5}>
       <ContactForm />
    </Col>
    <Col md={1}></Col>
    <div style={{paddingTop: '90px'}}/>
    <div className="partial-divider"></div>          
    </Row>
    <Footer/>
</Container>
}