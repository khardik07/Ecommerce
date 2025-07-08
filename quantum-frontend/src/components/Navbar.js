import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">QUANTUM</div>
      <ul className="navbar-links">
        <li><a href="#shop">Shop</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#forum">Forum</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-icons">
        <span className="icon-user" title="User">
          <FontAwesomeIcon icon={faUser} />
        </span>
        <span className="icon-cart" title="Cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </span>
      </div>
    </nav>
  );
};

export default Navbar; 