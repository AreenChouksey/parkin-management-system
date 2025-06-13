
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import UserDropdown from './UserDropdown';
import '../styles.css';

const Navigation = ({
  user,
  onLogout,
  onShowLogin,
  onShowSignup,
  isLoggedIn
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-logo">
            <img 
              src="https://www.ewaysservices.com/images/eways.jpg" 
              alt="Eways Logo"
            />
            <span>At Parkkin</span>
          </div>

          <div className="nav-links">
            {!isLoggedIn ? (
              <>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="nav-link"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="nav-link"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="nav-link"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="nav-link"
                >
                  Contact
                </button>
                <div className="nav-auth">
                  <button
                    onClick={onShowLogin}
                    className="btn-primary"
                  >
                    Login
                  </button>
                  <button
                    onClick={onShowSignup}
                    className="btn-secondary"
                  >
                    Sign Up
                  </button>
                </div>
              </>
            ) : (
              <>
                <button className="nav-link">Dashboard</button>
                <button className="nav-link">Reservations</button>
                <button className="nav-link">Reports</button>
                <UserDropdown user={user} onLogout={onLogout} />
              </>
            )}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-btn"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            {!isLoggedIn ? (
              <>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="mobile-nav-link"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="mobile-nav-link"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="mobile-nav-link"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="mobile-nav-link"
                >
                  Contact
                </button>
                <div className="mobile-auth">
                  <button
                    onClick={onShowLogin}
                    className="btn-primary"
                  >
                    Login
                  </button>
                  <button
                    onClick={onShowSignup}
                    className="btn-secondary"
                  >
                    Sign Up
                  </button>
                </div>
              </>
            ) : (
              <>
                <button className="mobile-nav-link">Dashboard</button>
                <button className="mobile-nav-link">Reservations</button>
                <button className="mobile-nav-link">Reports</button>
                <UserDropdown user={user} onLogout={onLogout} isMobile />
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
