import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo__img from '../../assets/res-logo.png';
import { UilMessage } from '@iconscout/react-unicons'
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={3}className="footer__info--logo">
            <img src={Logo__img} alt="Logo" />
            <span>Tasty Treat</span>
            <p>Lorems ipsum dolor sit amet consectetur adipisicing elit. </p>
          </Col>
          <Col lg={3} className="footer__info">
            <h4>Delivery Time</h4>
            <div className="delivery__time">
              <span>Sunday  Thursday</span>
              <span>10:00 PM - 11:00 PM</span>
            </div>
            <div className="delivery__time">
              <span>Friday  Thursday</span>
              <span>off day</span>
            </div>
          </Col>
          <Col lg={3} className="footer__info footer__info--content">
            <h4>Content</h4>
            <span>Location: Egypt - Mansoura</span>
            <span>Phone: 01002310310</span>
            <span>Email:tast@mail.support</span>
          </Col>
          <Col lg={3} className="footer__info footer__info--form">
            <h4>Newsletter</h4>
            <span>subscribe our newsletter</span>
            <form>
              <input type="email" placeholder='Enter Email' />
              <button className="form-button"><UilMessage/></button>
            </form>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer