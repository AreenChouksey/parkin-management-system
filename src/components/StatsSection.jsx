
import React from 'react';

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-content">
          <div className="stats-text">
            <h2>There are systems that<br />offer nearby listings at<br />competitive prices</h2>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">99%</div>
              <div className="stat-label">Accurate data based<br />on our system</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">570k+</div>
              <div className="stat-label">Users who are actively using<br />the application</div>
            </div>
          </div>
        </div>
        <div className="stats-phone">
          <div className="phone-mockup">
            <div className="phone-content">
              <div className="app-interface">
                <div className="search-bar">
                  <span>🔍</span>
                  <input placeholder="Search location..." />
                </div>
                <div className="map-view">
                  <div className="location-pin">📍</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
