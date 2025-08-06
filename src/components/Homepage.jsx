import React, { useState, useRef } from 'react';
import { Container, Card, Button, Form, Row, Col, Alert, Image } from 'react-bootstrap';
import tonkatsuImage from '../../assets/tonkatsu_curry.png'
import sandoImage from '../../assets/menu_items/katsu_sandwich.png'
import sandwichImage from '../../assets/menu_items/chicken_katsu_sandwich.png'
import Footer from './Footer';
import '../../katsu.css'

export default function Homepage() {
    function handleOrder() {
        window.location.href = 'https://kingpin-katsu.square.site/s/order'; 
    }
    return <Container fluid className='homepage-container'>
    <Row className="align-items-center" style={{paddingTop: 50}}>
    <Col md={1}></Col>    
    <Col md={5} style={{textAlign: 'center'}}>   
        <Image className='tonkatsu-img' src={tonkatsuImage} alt="A picture of tonkatsu curry" fluid />
        <h1 style={{paddingTop: '25px'}} className='front-page-title'>TONKATSU CURRY</h1>
        <div style={{textAlign: 'left', paddingTop: '10px', width: '80%', display: 'inline-block'}}>
        <p className='front-page-paragraph'>Pair flavorful pork tenderloin katsu with  quintessential Japanese curry
             made using a rich vegetable broth and warm curry spices. There’s a reason this combo is so common in Japan!</p>
        </div>     
    </Col>
    <Col md={6}>
    <div style={{paddingTop: '10px'}}>
        <div style={{padding: '10px 22px'}}>
          <div className="menu-box" style={{padding: '8px', display: 'flex'}}>
            <div style={{height: '120px', width: '120px', margin: 'auto 0px'}}>
              <Image src={tonkatsuImage} className='menu-img'/>
            </div>
            <div style={{padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', textAlign: 'left'}}>
              <div className="menu-item-title">TONKATSU CURRY</div>
              <div className="menu-item-desc">A classic combo of crispy pork tenderloin katsu served with a rich Japanese curry sauce infused with tender carrots and onions, accompanied by steamed white rice.</div>
            </div>
          </div>
        </div>
        <div style={{padding: '10px 22px'}}>
          <div className="menu-box" style={{padding: '8px', display: 'flex'}}>
            <div style={{height: '120px', width: '120px', margin: 'auto 0px'}}>
              <Image src={sandoImage} className='menu-img'/>
            </div>
            <div style={{padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', textAlign: 'left'}}>
              <div className="menu-item-title">KATSU SANDO</div>
              <div className="menu-item-desc">A crispy panko-dusted cutlet accompanied by crisp shredded cabbage and savory tonkatsu sauce, all sandwiched between two toasted slices of soft, fluffy milk bread.</div>
            </div>
          </div>
        </div>
        <div style={{padding: '10px 22px'}}>
          <div className="menu-box" style={{padding: '8px', display: 'flex'}}>
            <div style={{height: '120px', width: '120px', margin: 'auto 0px'}}>
              <Image src={sandwichImage} className='menu-img'/>
            </div>
            <div style={{padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', textAlign: 'left'}}>
              <div className="menu-item-title">KATSU SANDWICH</div>
              <div className="menu-item-desc">Our signature crispy katsu cutlet served on a soft, toasted brioche bun with juicy tomatoes, tangy dill pickles, shredded romaine lettuce, accompanied by our house sriracha aioli.</div>
            </div>
          </div>
        </div>
      </div>
    </Col>
    <div style={{paddingTop: '25px'}}/>
    <div className="partial-divider"></div>     
    </Row>
    <Footer/>
    </Container>
}