import React from 'react';
import { Row, Col } from 'react-flexbox-grid'

import { IconFooterFacebook, IconFooterTwitter, IconFooterLinkedIn, IconFooterInstagram } from '../../../assets/svg'


export const Footer = () => (
  <footer className="main">
    <Row>
      <Col xs={12} md={4}>
        <div>Email: hello@craftapplied.com</div>
      </Col>
      
      <Col xs={12} md={4}>
        <div>Phone: +44 (0) 208 123 0264</div>
      </Col>
      
      <Col xs={12} md={4}>
        <div className="social">
          <a href="#"><img src={IconFooterFacebook} alt="Facebook icon"/></a>
          <a href="#"><img src={IconFooterTwitter} alt="Twitter icon"/></a>
          <a href="#"><img src={IconFooterLinkedIn} alt="LinkedIn icon"/></a>
          <a href="#"><img src={IconFooterInstagram} alt="Instagram icon"/></a>
        </div>
      </Col>  
    </Row>
    
    <div className="line-break"></div>
    
    <Row>
      <Col xs={12} sm={9} md={8}>
        &copy; Copyright {(new Date()).getFullYear()} Craft Applied. All Rights Reserved.
      </Col>
      
      <Col xs={12} sm={3} md={4}>
        <a href="#">Privacy Policy</a>
      </Col>
      
    </Row>
  </footer> 
);
