import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import aboutImg from '../../../assets/location.png'
import { UilCheckCircle } from '@iconscout/react-unicons'
import './about.css'
const About = () => {
  return (
    <section className="about">
    <Container>
      <Row className='about__content'>
        <Col lg={6} >
          <div className="about__img">
            <img src={aboutImg} alt="Location" />
          </div>
        </Col>
        <Col lg={6} className="about__info">
          <h3>Why <span>Tasty Treat?</span></h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis excepturi numquam possimus illo autem illum dicta neque qui cupiditate, optio ut dolore consequuntur assumenda sapiente temporibus adipisci facilis harum quis?</p>
          <div className="about__feature">
            <div className="about__feat">
              <UilCheckCircle size="1.1rem" />
              <span>Fresh and tasty foods</span>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="about__feature">
            <div className="about__feat">
              <UilCheckCircle size="1.1rem"/>
              <span>Quality support</span>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="about__feature">
            <div className="about__feat">
              <UilCheckCircle size="1.1rem"/>
              <span>Order from any location</span>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default About