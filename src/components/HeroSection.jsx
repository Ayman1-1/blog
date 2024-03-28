import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to ABlog</h1>
        <p>Discover amazing posts</p>
        <button className="get-started-button">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;

