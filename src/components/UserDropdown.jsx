
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, User as UserIcon, Settings, LogOut, Shield, Crown } from 'lucide-react';
import '../styles.css';

const UserDropdown = ({ user, onLogout, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!user) return null;

  const getDashboardOptions = () => {
    switch (user.role) {
      case 'super_admin':
        return [
          { icon: Crown, label: 'Super Admin Dashboard', href: '#' },
          { icon: Shield, label: 'Admin Dashboard', href: '#' },
          { icon: UserIcon, label: 'User Profile', href: '#' }
        ];
      case 'admin':
        return [
          { icon: Shield, label: 'Admin Dashboard', href: '#' },
          { icon: UserIcon, label: 'User Profile', href: '#' }
        ];
      default:
        return [
          { icon: UserIcon, label: 'User Profile', href: '#' }
        ];
    }
  };

  const dashboardOptions = getDashboardOptions();

  if (isMobile) {
    return (
      <div className="mobile-dropdown">
        <div className="mobile-dropdown-email">{user.email}</div>
        {dashboardOptions.map((option, index) => (
          <button key={index} className="mobile-dropdown-item">
            <option.icon size={16} />
            <span>{option.label}</span>
          </button>
        ))}
        <button onClick={onLogout} className="mobile-dropdown-item danger">
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </div>
    );
  }

  return (
    <div className="user-dropdown" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-trigger"
      >
        <div className="user-avatar">
          <UserIcon size={16} />
        </div>
        <span className="user-name hidden">{user.name}</span>
        <ChevronDown className={`dropdown-chevron ${isOpen ? 'open' : ''}`} />
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-header">
            <div className="dropdown-name">{user.name}</div>
            <div className="dropdown-email">{user.email}</div>
            <div className="dropdown-role">{user.role.replace('_', ' ')}</div>
          </div>
          
          <div className="dropdown-section">
            <div className="dropdown-section-title">
              Dashboard Options
            </div>
            {dashboardOptions.map((option, index) => (
              <button key={index} className="dropdown-item">
                <option.icon className="dropdown-item-icon" />
                <span>{option.label}</span>
              </button>
            ))}
          </div>

          <div className="dropdown-separator">
            <button className="dropdown-item">
              <Settings className="dropdown-item-icon" />
              <span>Settings</span>
            </button>
            <button onClick={onLogout} className="dropdown-item danger">
              <LogOut className="dropdown-item-icon" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
