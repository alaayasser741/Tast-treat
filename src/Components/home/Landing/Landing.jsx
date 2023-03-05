import React from 'react'
import { Link } from 'react-router-dom'
import LandingImg from '../../../assets/hero.png'
import './landing.css';
import { UilCar, UilShieldCheck } from '@iconscout/react-unicons'
import { Container } from 'react-bootstrap';
const Landing = () => {
  return (
    <section className="section landing">
      <Container className=" landing__container grid">
        <div className="landing__info">
          <span className='landing__title'>Easy Way to make an order</span>
          <h1 className='landing__slogan'><span>Hengry?</span> just wait food at <span>your door</span></h1>
          <p className='landing__description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, illo temporibus esse doloremque culpa minus sunt nihil suscipit.</p>

          <div className="landing__buttons">
            <a href="#" className="button">Order Now</a>
            <Link to="/food" className="button buttons-border">See all foods</Link>
          </div>

          <div className="landing__advantage">
            <span className='landing__advantage-title'><span><UilCar className="landing__advantage-icon" /></span>No shipping fees</span>
            <span className='landing__advantage-title'><span><UilShieldCheck className="landing__advantage-icon" /></span>100% secure cheackout</span>
          </div>
        </div>
        <div className="landing__img">
          <img src={LandingImg} alt="Order Arive now" />
        </div>
      </Container>
    </section>
  )
}

export default Landing