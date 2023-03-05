import React from 'react'
import { UilCheckCircle } from '@iconscout/react-unicons'
import { Container, Row, Col } from 'react-bootstrap'
import testimonialImg from '../../../assets/network.png'
import profileImg from '../../../assets/ava-1.jpg'
import './testimonial.css'
const Testimonial = () => {
  return (
    <section className="about">
      <Container>
        <Row className='about__content testimonial__content'>
          <Col lg={6} className="about__info">
            <span className="testimonial__title">Testimonial</span>
            <h3>What our <span>customer</span> are saying</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis excepturi numquam possimus illo autem illum dicta neque qui cupiditate, optio ut dolore consequuntur assumenda sapiente temporibus adipisci facilis harum quis?</p>
            <div className="testimonial__profile">
              <img src={profileImg} alt="Profileimg" />
              <h4>Alaa Yasser</h4>
            </div>
          </Col>
          <Col lg={6} >
            <div className="about__img testimonial__img">
              <img src={testimonialImg} alt="Location" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonial