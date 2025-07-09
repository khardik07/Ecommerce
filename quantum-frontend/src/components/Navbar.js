import React, { useEffect, useRef } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = navbarRef.current;
      const discover = document.getElementById('discover-text');
      if (!navbar || !discover) return;

      // Get bottom of navbar and top of discover text
      const navbarRect = navbar.getBoundingClientRect();
      const discoverRect = discover.getBoundingClientRect();

      // Toggle hide class when overlapping discover text
      if (navbarRect.bottom >= discoverRect.top) {
        navbar.classList.add('hide');
      } else {
        navbar.classList.remove('hide');
      }

      // Keep scrolled color effect
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-logo">QUANTUM</div>
      <ul className="navbar-links">
        <li><a href="#shop">Shop</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#forum">Forum</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-actions">
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
      </div>
    </nav>
  );
};

export default Navbar; 