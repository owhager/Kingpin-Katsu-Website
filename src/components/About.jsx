import React, { useState, useRef } from 'react';
import { Container, Card, Button, Form, Row, Col, Alert, Image } from 'react-bootstrap';
import katsuImage from '../../assets/big_katsu_cropped.jpg'
import Footer from './Footer';
import '../../katsu.css'

export default function About() {
    return <Container fluid className='about-container'>
        <Row className="align-items-center" style={{paddingTop: 50}}>
        <Col md={1}></Col>    
        <Col md={5}>   
            <h1 className='front-page-title'>ABOUT US</h1>
            <div style={{paddingTop: '25px'}}/>
            <p className='homepage-paragraph'>Our journey began with a trip across Asia, where we immersed ourselves in the culinary 
                traditions of Japan, Taiwan, Korea, and beyond, studying the art of creating the perfect Katsu. Combining the best 
                techniques we could find, we returned to USA to bring you a brand new Katsu experience. We start by select the finest 
                cuts of meat, dry-brine them overnight in a unique seasoning mixture and bread them with imported high-quality Panko 
                breading. The result is a extremely flavorful cutlet that keeps its structure after frying. All of our sides are 
                hand-prepared fresh with local ingredients every day to pair perfectly with our Katsu. We hope our obsessive passion 
                for Katsu is evident through the taste of our food. Come taste the difference at Kingpin Katsu!
            </p>
        </Col>
        <Col md={5}>
           <Image src={katsuImage} alt="A picture of katsu" fluid rounded />
        </Col>
        <Col md={1}></Col> 
        <div style={{paddingTop: '100px'}}/>
        <div className="partial-divider"></div>         
        </Row>
        <Footer/>          
    </Container>
}