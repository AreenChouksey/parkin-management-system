
import React from 'react';
import '../styles.css';

const HeroSection = ({ onShowLogin, onShowSignup }) => {
  const showDemo = () => {
    alert('Demo video would be shown here. This is a placeholder for the demo functionality.');
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Smart Parking Management System
            </h1>
            <p className="hero-subtitle">
              Streamline your parking operations with our intuitive management system. 
              Monitor spaces, manage reservations, and optimize revenue all in one place.
            </p>
            <div className="hero-buttons">
              <button
                onClick={onShowSignup}
                className="btn-hero-primary btn-glow"
              >
                Get Started Free
              </button>
              <button
                onClick={showDemo}
                className="btn-hero-secondary"
              >
                Watch Demo
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="parking-demo">
              <div className="parking-grid">
                <div className="parking-column">
                  <div className="parking-space space-available"></div>
                  <div className="parking-space space-occupied" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <div className="parking-column">
                  <div className="parking-space space-available" style={{ animationDelay: '1s' }}></div>
                  <div className="parking-space space-reserved" style={{ animationDelay: '1.5s' }}></div>
                </div>
              </div>
              <div className="demo-label">
                Real-time Space Monitoring
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
