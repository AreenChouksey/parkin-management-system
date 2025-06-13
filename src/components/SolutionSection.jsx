
import React from 'react';

const SolutionSection = () => {
  return (
    <section className="solution-section">
      <div className="solution-container">
        <div className="solution-content">
          <div className="solution-phone">
            <div className="phone-mockup-large">
              <div className="phone-content-large">
                <div className="app-header-large">
                  <div className="back-btn">←</div>
                  <div className="app-title">Parking App</div>
                  <div className="menu-btn">⋮</div>
                </div>
                <div className="parking-map">
                  <div className="map-pins">
                    <div className="pin blue">P</div>
                    <div className="pin green">P</div>
                    <div className="pin orange">P</div>
                  </div>
                </div>
                <div className="bottom-sheet">
                  <div className="sheet-handle"></div>
                  <div className="parking-info">
                    <h3>Nearby Parking</h3>
                    <div className="parking-list">
                      <div className="parking-item">
                        <div className="parking-icon blue"></div>
                        <div className="parking-details">
                          <span>Downtown Plaza</span>
                          <span className="price">$5/hr</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="solution-text">
            <div className="solution-badge">
              Our best features for you 🎯
            </div>
            <h2>THE SOLUTION TO YOUR<br />PARKING PROBLEMS</h2>
            <p>We are aware that most people have difficulty finding parking spaces quickly and easily. Therefore we offer the best services and features for you.</p>
            <button className="btn-learn-more">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
