
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-modern">
      <div className="footer-container-modern">
        <div className="footer-grid-modern">
          <div className="footer-section-modern">
            <div className="footer-logo-modern">
              <span>DIGIPARK</span>
            </div>
            <p className="footer-description-modern">
              Revolutionary parking management system for the digital age.
            </p>
            <div className="social-links-modern">
              <a href="#" className="social-link-modern">📘</a>
              <a href="#" className="social-link-modern">🐦</a>
              <a href="#" className="social-link-modern">📷</a>
              <a href="#" className="social-link-modern">💼</a>
            </div>
          </div>

          <div className="footer-section-modern">
            <h4 className="footer-title-modern">ARCHIVES</h4>
            <div className="footer-links-modern">
              <a href="#" className="footer-link-modern">API & Integrations</a>
              <a href="#" className="footer-link-modern">Help Center</a>
              <a href="#" className="footer-link-modern">Community</a>
              <a href="#" className="footer-link-modern">Contact</a>
            </div>
          </div>

          <div className="footer-section-modern">
            <h4 className="footer-title-modern">CONTACTINFO</h4>
            <div className="footer-links-modern">
              <span className="footer-link-modern">support@digipark.com</span>
              <span className="footer-link-modern">+1 (555) 123-4567</span>
              <span className="footer-link-modern">San Francisco, CA</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 DigiPark. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
