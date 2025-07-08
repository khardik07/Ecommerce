import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      {/* ProductList will be added here */}
    </div>
  );
}

export default App;
