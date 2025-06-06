
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, User as UserIcon, Settings, LogOut, Shield, Crown } from 'lucide-react';
import { User } from '../types/user';

interface UserDropdownProps {
  user: User | null;
  onLogout: () => void;
  isMobile?: boolean;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ user, onLogout, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
      <div className="space-y-2 pt-2 border-t border-slate-600">
        <div className="text-sm text-gray-300 px-2">{user.email}</div>
        {dashboardOptions.map((option, index) => (
          <button
            key={index}
            className="w-full flex items-center space-x-2 py-2 px-2 hover:bg-slate-700 rounded-lg transition-colors duration-200"
          >
            <option.icon className="h-4 w-4" />
            <span>{option.label}</span>
          </button>
        ))}
        <button
          onClick={onLogout}
          className="w-full flex items-center space-x-2 py-2 px-2 text-red-400 hover:bg-slate-700 rounded-lg transition-colors duration-200"
        >
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </button>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 py-2 px-3 hover:bg-slate-700 rounded-lg transition-colors duration-200"
      >
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <UserIcon className="h-4 w-4" />
        </div>
        <span className="hidden lg:block">{user.name}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
          <div className="px-4 py-2 border-b border-gray-200">
            <div className="text-sm font-medium text-gray-900">{user.name}</div>
            <div className="text-sm text-gray-500">{user.email}</div>
            <div className="text-xs text-blue-600 capitalize">{user.role.replace('_', ' ')}</div>
          </div>
          
          <div className="py-2">
            <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Dashboard Options
            </div>
            {dashboardOptions.map((option, index) => (
              <button
                key={index}
                className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              >
                <option.icon className="h-4 w-4" />
                <span>{option.label}</span>
              </button>
            ))}
          </div>

          <div className="border-t border-gray-200 py-2">
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </button>
            <button
              onClick={onLogout}
              className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
