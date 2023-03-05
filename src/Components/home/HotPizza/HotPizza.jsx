import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import pizzImg1 from '../../../assets/product_2.2.jpg'
import pizzImg2 from '../../../assets/product_2.1.jpg'
import pizzImg3 from '../../../assets/product_2.3.jpg'
import pizzImg4 from '../../../assets/product_3.1.jpg'
import './hotPizza.css'
const HotPizza = () => {
  return (
    <section className="hot">
      <Container>
        <h3>Hot Pizza</h3>
        <div className="category">
          <Row className='category__container'>
            <Col lg={3} className="popular__box">
              <img src={pizzImg1} alt="PizzaImg" />
              <h3 className='popular__food-name'>Pizza</h3>
              <div className="food__buy">
                <span>25$</span>
                <a href="#" className="button button-addToCart">Add to Cart</a>
              </div>
            </Col>
            <Col lg={3} className="popular__box">
              <img src={pizzImg2} alt="PizzaImg" />
              <h3 className='popular__food-name'>Pizza</h3>
              <div className="food__buy">
                <span>25$</span>
                <a href="#" className="button button-addToCart">Add to Cart</a>
              </div>
            </Col>
            <Col lg={3} className="popular__box">
              <img src={pizzImg3} alt="PizzaImg" />
              <h3 className='popular__food-name'>Pizza</h3>
              <div className="food__buy">
                <span>25$</span>
                <a href="#" className="button button-addToCart">Add to Cart</a>
              </div>
            </Col>
            <Col lg={3} className="popular__box">
              <img src={pizzImg4} alt="PizzaImg" />
              <h3 className='popular__food-name'>Pizza</h3>
              <div className="food__buy">
                <span>25$</span>
                <a href="#" className="button button-addToCart">Add to Cart</a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default HotPizza