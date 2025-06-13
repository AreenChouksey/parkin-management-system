
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import SolutionSection from '../components/SolutionSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import Dashboard from '../components/Dashboard';
import LoginModal from '../components/LoginModal';
import SignupModal from '../components/SignupModal';

const Index = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setCurrentUser(user);
      setShowDashboard(true);
    }
  }, []);

  const handleLogin = (user) => {
    setCurrentUser(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
    setShowLoginModal(false);
    setShowDashboard(true);
  };

  const handleSignup = (user) => {
    setCurrentUser(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
    setShowSignupModal(false);
    setShowDashboard(true);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    setShowDashboard(false);
  };

  if (showDashboard && currentUser) {
    return (
      <div>
        <Navigation 
          user={currentUser} 
          onLogout={handleLogout}
          onShowLogin={() => setShowLoginModal(true)}
          onShowSignup={() => setShowSignupModal(true)}
          isLoggedIn={true}
        />
        <Dashboard user={currentUser} />
      </div>
    );
  }

  return (
    <div>
      <Navigation 
        user={currentUser} 
        onLogout={handleLogout}
        onShowLogin={() => setShowLoginModal(true)}
        onShowSignup={() => setShowSignupModal(true)}
        isLoggedIn={false}
      />
      <HeroSection 
        onShowLogin={() => setShowLoginModal(true)}
        onShowSignup={() => setShowSignupModal(true)}
      />
      <StatsSection />
      <SolutionSection />
      <CallToAction onShowSignup={() => setShowSignupModal(true)} />
      <Footer />
      
      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onLogin={handleLogin}
          onSwitchToSignup={() => {
            setShowLoginModal(false);
            setShowSignupModal(true);
          }}
        />
      )}
      
      {showSignupModal && (
        <SignupModal
          onClose={() => setShowSignupModal(false)}
          onSignup={handleSignup}
          onSwitchToLogin={() => {
            setShowSignupModal(false);
            setShowLoginModal(true);
          }}
        />
      )}
    </div>
  );
};

export default Index;
