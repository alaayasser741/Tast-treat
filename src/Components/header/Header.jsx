import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { UilTimes, UilApps, UilEstate, UilUtensils, UilShoppingCart, UilMessage, UilUser } from '@iconscout/react-unicons'
import Logo__img from '../../assets/res-logo.png';
import './header.css'
const Header = () => {
  // Header Shadow
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector('.header');
    if (this.scrollY >= 80) {
      header.classList.add("scroll-header")
    } else {
      header.classList.remove("scroll-header")
    }
  })
  // Toggle Menu
  const [toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        {/* Logo */}
        <Link to="/" className="nav__logo"><img src={Logo__img} alt="Logo__img" />Tast Treat</Link>

        {/* nav list (menu) */}
        <div className={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list grid">
            {/* Home */}
            <li className="nav__item">
              <Link to="/" className="nav__link">
                <UilEstate className="nav__icon" />Home</Link>
            </li>
            {/* Food */}
            <li className="nav__item">
              <Link to="/food" className="nav__link">
                <UilUtensils className="nav__icon" />Food</Link>
            </li>
            {/* Cart */}
            <li className="nav__item">
              <Link to="/cart" className="nav__link">
                <UilShoppingCart className="nav__icon" />Cart</Link>
            </li>
            {/* Contact */}
            <li className="nav__item">
              <Link to="/contact" className="nav__link">
                <UilMessage className="nav__icon" />Contact</Link>
            </li>
          </ul>
          <UilTimes onClick={() => { showMenu(!toggle) }} className="nav__close" />
          <div className="nav__user nav__user-responsive">
            <UilShoppingCart className='nav__user-icon nav__user-icon-cart' />
            <UilUser className='nav__user-icon ' />
          </div>
        </div>
        <div className="nav__user">
          <UilShoppingCart className='nav__user-icon' />
          <UilUser className='nav__user-icon' />
        </div>
        <div onClick={() => { showMenu(!toggle) }} className="nav__toggle">
          <UilApps />
        </div>
      </nav>
    </header>
  )
}

export default Header