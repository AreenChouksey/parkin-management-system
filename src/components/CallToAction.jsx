
import React from 'react';

const CallToAction = ({ onShowSignup }) => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-text">
            <h2>BE PART OF THE FUTURE<br />PARKING ERA NOW</h2>
            <p>Are you ready to be a supporter and advance with us in the parking revolution? Come and find the best parking spaces according to your preferences.</p>
            <div className="cta-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="email-input-cta"
              />
              <button
                onClick={onShowSignup}
                className="btn-get-access-cta"
              >
                Get Access
              </button>
            </div>
          </div>
          <div className="cta-phone">
            <div className="phone-mockup-cta">
              <div className="phone-content-cta">
                <div className="app-screen">
                  <div className="notification-bar">
                    <span>🔔 Parking spot found!</span>
                  </div>
                  <div className="parking-details-cta">
                    <h3>Available Now</h3>
                    <div className="spot-info">
                      <span>Location: Downtown</span>
                      <span>Price: $3/hr</span>
                      <span>Distance: 0.2 miles</span>
                    </div>
                    <button className="reserve-btn">Reserve Now</button>
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

export default CallToAction;
