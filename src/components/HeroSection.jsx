
import React from 'react';

const HeroSection = ({ onShowLogin, onShowSignup }) => {
  const showDemo = () => {
    alert('Demo video would be shown here. This is a placeholder for the demo functionality.');
  };

  return (
    <section id="home" className="hero-modern">
      <div className="hero-container-modern">
        <div className="hero-content-modern">
          <div className="hero-text-modern">
            <div className="hero-badge">
              UP NEXT SOFTWARE BETA 2025 🚀
            </div>
            <h1 className="hero-title-modern">
              THE SOLUTION TO<br />
              YOUR PARKING<br />
              PROBLEMS
            </h1>
            <p className="hero-subtitle-modern">
              Revolutionary new parking technology by DIGIPARK can
              make it easier for you to find the nearest space in a
              smart parking platform.
            </p>
            <div className="hero-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="email-input"
              />
              <button
                onClick={onShowSignup}
                className="btn-get-access"
              >
                Get Access
              </button>
            </div>
            <div className="hero-features">
              <div className="feature-item">✓ Recognized</div>
              <div className="feature-item">✓ 24/7 Support systems</div>
              <div className="feature-item">✓ Integrated 12 APIs</div>
            </div>
          </div>

          <div className="hero-visual-modern">
            <div className="parking-phone">
              <div className="phone-screen">
                <div className="parking-app">
                  <div className="app-header">
                    <div className="signal-bars"></div>
                    <div className="time">9:41</div>
                    <div className="battery"></div>
                  </div>
                  <div className="parking-spots">
                    <div className="spot-item">
                      <div className="spot-icon available"></div>
                      <span>$2.1m</span>
                    </div>
                    <div className="spot-item">
                      <div className="spot-icon occupied"></div>
                      <span>$1.2m</span>
                    </div>
                    <div className="spot-item">
                      <div className="spot-icon reserved"></div>
                      <span>$2.0m</span>
                    </div>
                    <div className="spot-item">
                      <div className="spot-icon available"></div>
                      <span>$5.0m</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
