
import React from 'react';
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import '../styles.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo">
              <img 
                src="https://www.ewaysservices.com/images/eways.jpg" 
                alt="Eways Logo"
              />
              <span>At Parkkin</span>
            </div>
            <p className="footer-description">
              Smart parking management solutions that help businesses optimize their parking operations 
              and improve customer experience.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-links">
              <button 
                onClick={() => scrollToSection('home')}
                className="footer-link"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="footer-link"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="footer-link"
              >
                About Us
              </button>
              <a href="#" className="footer-link">Pricing</a>
              <a href="#" className="footer-link">Support</a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">Space Monitoring</a>
              <a href="#" className="footer-link">Reservation Management</a>
              <a href="#" className="footer-link">Payment Processing</a>
              <a href="#" className="footer-link">Analytics & Reports</a>
              <a href="#" className="footer-link">Mobile Solutions</a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <div className="footer-links">
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <div>New Delhi, India</div>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <a href="tel:+912345678901" className="contact-link">
                  +91 2345678901
                </a>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" />
                <a href="mailto:info@atparkkin.com" className="contact-link">
                  info@atparkkin.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
