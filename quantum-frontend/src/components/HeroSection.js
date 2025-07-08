import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <h1>DISCOVER UNIQUE PAWN ITEMS</h1>
        <p>Find rare treasures and great deals at Quantum Pawn Shop</p>
        <a href="#shop" className="hero-btn">Shop Now</a>
      </div>
    </section>
  );
};

export default HeroSection; 