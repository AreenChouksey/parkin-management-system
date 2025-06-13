
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import '../styles.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
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
              and improve customer experience with cutting-edge technology.
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
                <div>
                  <div style={{ color: '#ffffff', fontWeight: '500' }}>New Delhi, India</div>
                  <div style={{ color: '#b5b5b5', fontSize: '0.875rem' }}>Tech Hub District</div>
                </div>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <div>
                  <a href="tel:+912345678901" className="contact-link">
                    +91 2345678901
                  </a>
                  <div style={{ color: '#b5b5b5', fontSize: '0.875rem' }}>24/7 Support</div>
                </div>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" />
                <div>
                  <a href="mailto:info@atparkkin.com" className="contact-link">
                    info@atparkkin.com
                  </a>
                  <div style={{ color: '#b5b5b5', fontSize: '0.875rem' }}>Business Inquiries</div>
                </div>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="newsletter-signup">
              <h4 className="newsletter-title">Stay Updated</h4>
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-button">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid rgba(0, 166, 230, 0.2)', 
          marginTop: '3rem', 
          paddingTop: '2rem' 
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            gap: '1rem' 
          }}>
            <div style={{ color: '#b5b5b5', fontSize: '0.875rem' }}>
              © 2025 At Parkkin. All rights reserved. | Powered by Innovation
            </div>
            <div style={{ 
              display: 'flex', 
              gap: '2rem', 
              fontSize: '0.875rem',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
              <a href="#" className="footer-link">Cookie Policy</a>
              <a href="#" className="footer-link">GDPR Compliance</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
