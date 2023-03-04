import React, { useState } from 'react'
import './popular.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Data } from './Data'
import { GiHamburger, GiFullPizza, GiBread } from 'react-icons/gi'
const Popular = () => {
  const [typeFood, setTypeFood] = useState(Data);
  const [newTypeFood, setNewTypeFood] = useState(Data);
  const [activeType, setActiveType] = useState(0)
  const Filter = (type) => {

    let Foods = typeFood.filter(item => {
      return (item.title == type)
    })
    setNewTypeFood(Foods)
  }
  return (
    <section className="popular">
      <Container>
        <h2 className="popular__title">Popular Foods</h2>
        <ul className="Popular__filter">
          <li onClick={() => { setNewTypeFood(Data); setActiveType(0) }} className={activeType === 0 ? 'active__type' : "popular__filter-list"}>All</li>
          <li onClick={() => { Filter("Burger"); setActiveType(1) }} className={activeType === 1 ? 'active__type' : "popular__filter-list"}><GiHamburger />Burger</li>
          <li onClick={() => { Filter("Pizza"); setActiveType(2) }} className={activeType === 2 ? 'active__type' : "popular__filter-list"}><GiFullPizza />Pizza</li>
          <li onClick={() => { Filter("Bread"); setActiveType(3) }} className={activeType === 3 ? 'active__type' : "popular__filter-list"}><GiBread />Bread</li>
        </ul>
        <Row className="popular__food">
          {newTypeFood.map(({ id, image, title, name }) => {
            return (
              <Col lg={3} className="popular__box" key={id}>
                <img src={image} alt={title} />
                <h3 className='popular__food-name'>{name}</h3>
                <div className="food__buy">
                  <span>25$</span>
                  <a href="#" className="button button-addToCart">Add to Cart</a>
                </div>
              </Col>
            )
          })}
        </Row>

      </Container>
    </section>
  )
}

export default Popular