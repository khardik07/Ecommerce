import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 id="discover-text">DISCOVER UNIQUE PAWN ITEMS</h1>
          <p>Find rare treasures and great deals at Quantum Pawn Shop</p>
          <a href="#shop" className="hero-btn">Shop Now</a>
        </div>
      </section>
      <section className="sell-section">
        <div className="sell-content">
          <img className="sell-image" src={require('../download (1).webp')} alt="Sell Rare Collectibles" />
          <div className="sell-info">
            <h2>SELL RARE COLLECTIBLES</h2>
            <p>Have something unique or valuable? List your rare collectibles and connect with passionate buyers. Our platform makes it easy and secure to sell your prized items to the right audience.</p>
            <a href="#sell" className="sell-btn">Sell Now</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection; 