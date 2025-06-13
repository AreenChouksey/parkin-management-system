
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import UserDropdown from './UserDropdown';

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
    <nav className="nav-modern">
      <div className="nav-container-modern">
        <div className="nav-content-modern">
          <div className="nav-logo-modern">
            <span>DIGIPARK</span>
          </div>

          <div className="nav-links-modern">
            {!isLoggedIn ? (
              <>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="nav-link-modern"
                >
                  How it Works
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="nav-link-modern"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="nav-link-modern"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="nav-link-modern"
                >
                  Newsroom
                </button>
                <div className="nav-auth-modern">
                  <button
                    onClick={onShowSignup}
                    className="btn-get-started"
                  >
                    Start Free Trial
                  </button>
                </div>
              </>
            ) : (
              <>
                <button className="nav-link-modern">Dashboard</button>
                <button className="nav-link-modern">Reservations</button>
                <button className="nav-link-modern">Reports</button>
                <UserDropdown user={user} onLogout={onLogout} />
              </>
            )}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-btn-modern"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu-modern">
            {!isLoggedIn ? (
              <>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="mobile-nav-link-modern"
                >
                  How it Works
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="mobile-nav-link-modern"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="mobile-nav-link-modern"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="mobile-nav-link-modern"
                >
                  Newsroom
                </button>
                <div className="mobile-auth-modern">
                  <button
                    onClick={onShowSignup}
                    className="btn-get-started"
                  >
                    Start Free Trial
                  </button>
                </div>
              </>
            ) : (
              <>
                <button className="mobile-nav-link-modern">Dashboard</button>
                <button className="mobile-nav-link-modern">Reservations</button>
                <button className="mobile-nav-link-modern">Reports</button>
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
