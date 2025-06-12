
import React, { useState } from 'react';
import { X } from 'lucide-react';
import '../styles.css';

const LoginModal = ({ onClose, onLogin, onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      alert('Please fill in all fields');
      setLoading(false);
      return;
    }

    let userRole = 'user';
    if (email.includes('superadmin')) {
      userRole = 'super_admin';
    } else if (email.includes('admin')) {
      userRole = 'admin';
    }

    const user = {
      id: Math.random().toString(36).substr(2, 9),
      email: email,
      name: email.split('@')[0],
      role: userRole
    };

    setTimeout(() => {
      onLogin(user);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close">
          <X size={24} />
        </button>

        <div className="modal-header">
          <h2 className="modal-title">Welcome Back</h2>
          <p className="modal-subtitle">Sign in to your At Parkkin account</p>
        </div>

        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-options">
            <label className="checkbox-group">
              <input type="checkbox" className="checkbox" />
              <span className="checkbox-label">Remember me</span>
            </label>
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="form-submit"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="modal-footer">
          <p>
            Don't have an account?{' '}
            <button onClick={onSwitchToSignup} className="modal-switch">
              Sign up
            </button>
          </p>
        </div>

        <div className="demo-accounts">
          <p>Demo accounts:</p>
          <p>superadmin@example.com (Super Admin)</p>
          <p>admin@example.com (Admin)</p>
          <p>user@example.com (User)</p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
