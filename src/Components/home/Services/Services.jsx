import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import cartImg1 from '../../../assets/category-01.png';
import cartImg2 from '../../../assets/category-02.png';
import cartImg3 from '../../../assets/category-03.png';
import cartImg4 from '../../../assets/category-04.png';
import serviceImg1 from '../../../assets/service-01.png';
import serviceImg2 from '../../../assets/service-02.png';
import serviceImg3 from '../../../assets/service-03.png';

import './services.css'
const Services = () => {
  return (
    <section className='services'>
      <Container>
        <div className="category">
          <Row className='category__container'>
            <Col xs={6} md={3} className="category__box">
              <img src={cartImg1} alt="Burger" />
              <span>Fast Food</span>
            </Col >
            <Col xs={6} md={3} className="category__box">
              <img src={cartImg2} alt="Pizza" />
              <span>Pizza</span>
            </Col >
            <Col xs={6} md={3} className="category__box">
              <img src={cartImg3} alt="Asian Food" />
              <span>Asian Food</span>
            </Col >
            <Col xs={6} md={3} className="category__box">
              <img src={cartImg4} alt="Meat" />
              <span>Row Meat</span>
            </Col >
          </Row>
        </div>
        <div className="ourServices">
          <span className='service__title'>what we serve</span>
          <h2 className='service__slogan'>just sit back at home <br/>we will <span>take care</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Itaque corporis cum perferendis culpa doloremque, quasi ipsum !.</p>
          <div className="service__feature">
            <Row className='service__content'>
              <Col lg={4} className="service__box">
                  <img src={serviceImg1} className="service__img" alt="Service__img" />
                  <h3 className="service__name">Quick delivery</h3>
                  <p className='service__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia . .</p>
              </Col>

              <Col lg={4} className="service__box">
                  <img src={serviceImg2} className="service__img" alt="Service__img" />
                  <h3 className="service__name">Super dine in</h3>
                  <p className='service__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia . .</p>
              </Col>
              <Col lg={4} className="service__box">
                  <img src={serviceImg3} className="service__img" alt="Service__img" />
                  <h3 className="service__name">Easy pick sp</h3>
                  <p className='service__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia . .</p>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Services