
import React, { useState } from 'react';
import { 
  LayoutDashboard,
  MapPin,
  Users,
  Car,
  Shield,
  MessageSquare,
  Navigation,
  Megaphone,
  CreditCard,
  Wallet,
  BarChart,
  Gift,
  Settings,
  Search,
  Star,
  Edit,
  Clock,
  DollarSign
} from 'lucide-react';
import { User } from '../types/user';

interface AdminDashboardProps {
  user: User;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState('spaces');
  const [selectedSpaces, setSelectedSpaces] = useState('all');

  // Mock data for parking spaces
  const parkingSpaces = [
    // Red dots (occupied)
    { id: 48, status: 'occupied', row: 1, col: 1 },
    { id: 79, status: 'occupied', row: 1, col: 2 },
    { id: 83, status: 'occupied', row: 1, col: 3 },
    { id: 92, status: 'occupied', row: 1, col: 4 },
    
    // Orange dots (busy)
    ...Array.from({ length: 44 }, (_, i) => ({ 
      id: i + 1, 
      status: 'busy', 
      row: Math.floor(i / 11) + 2, 
      col: (i % 11) + 1 
    })),
    
    // Blue dots (available)
    ...Array.from({ length: 20 }, (_, i) => ({ 
      id: i + 45, 
      status: 'available', 
      row: Math.floor(i / 10) + 6, 
      col: (i % 10) + 1 
    }))
  ];

  const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
    { icon: MapPin, label: 'Parking Zones', id: 'zones' },
    { icon: Users, label: 'Parking Partners', id: 'partners', active: true },
    { icon: Car, label: 'Road Side Partners', id: 'roadside' },
    { icon: Users, label: 'Community', id: 'community' },
    { icon: MessageSquare, label: 'Complaints', id: 'complaints' },
    { icon: Navigation, label: 'Nearby Places', id: 'nearby' },
    { icon: Megaphone, label: 'Ads', id: 'ads' },
    { icon: Shield, label: 'Police Officers', id: 'police' },
    { icon: Car, label: 'Vehicles', id: 'vehicles' },
    { icon: CreditCard, label: 'Payments', id: 'payments' },
    { icon: Wallet, label: 'Wallet', id: 'wallet' },
    { icon: BarChart, label: 'Reports', id: 'reports' },
    { icon: Gift, label: 'Vouchers', id: 'vouchers' },
    { icon: Users, label: 'Users', id: 'users' },
    { icon: Settings, label: 'Settings', id: 'settings' }
  ];

  const tabs = [
    { id: 'spaces', label: 'Spaces' },
    { id: 'history', label: 'History' },
    { id: 'payments', label: 'Payments' },
    { id: 'spot-profile', label: 'Spot Profile' },
    { id: 'reviews', label: 'Reviews' }
  ];

  const stats = {
    total: 124,
    available: 89,
    busy: 31,
    late: 4
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen border-r border-blue-500/20">
          {/* Logo */}
          <div className="p-6 border-b border-blue-500/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <img 
                  src="https://www.ewaysservices.com/images/eways.jpg" 
                  alt="Eways Logo"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                At Parkkin
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  item.active 
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg' 
                    : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <header className="bg-gray-800/50 backdrop-blur-lg border-b border-blue-500/20 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold text-white">Parking Partners</h1>
                <span className="text-gray-400">/</span>
                <span className="text-blue-400">Royal Parking Plaza</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-gray-700/50 backdrop-blur-lg rounded-full px-4 py-2 border border-blue-500/20">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">A</span>
                  </div>
                  <span className="text-white font-medium">Admin</span>
                </div>
              </div>
            </div>
          </header>

          <div className="p-6">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* Left Column - Parking Spaces */}
              <div className="xl:col-span-2 space-y-6">
                {/* Tabs */}
                <div className="flex space-x-1 bg-gray-800/50 backdrop-blur-lg rounded-lg p-1 border border-blue-500/20">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-blue-500 text-white shadow-lg'
                          : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Search and Filter */}
                <div className="flex items-center space-x-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full bg-gray-800/50 backdrop-blur-lg border border-blue-500/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                    />
                  </div>
                  <select 
                    value={selectedSpaces}
                    onChange={(e) => setSelectedSpaces(e.target.value)}
                    className="bg-gray-800/50 backdrop-blur-lg border border-blue-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-400"
                  >
                    <option value="all">All spaces</option>
                    <option value="available">Available</option>
                    <option value="occupied">Occupied</option>
                    <option value="busy">Busy</option>
                  </select>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                    Active
                  </button>
                  <button className="text-blue-400 hover:text-blue-300 p-2 transition-colors duration-200">
                    <Edit className="w-4 h-4" />
                    Edit Profile
                  </button>
                </div>

                {/* Parking Grid */}
                <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-blue-500/20">
                  <div className="grid grid-cols-11 gap-3">
                    {parkingSpaces.map((space) => (
                      <div key={space.id} className="flex flex-col items-center space-y-2">
                        <div className={`w-8 h-12 rounded-lg flex items-center justify-center relative ${
                          space.status === 'occupied' ? 'bg-red-500' :
                          space.status === 'busy' ? 'bg-orange-500' :
                          'bg-blue-500'
                        }`}>
                          <Car className="w-4 h-4 text-white" />
                          <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
                            space.status === 'occupied' ? 'bg-red-400' :
                            space.status === 'busy' ? 'bg-orange-400' :
                            'bg-blue-400'
                          }`}></div>
                        </div>
                        <span className="text-xs text-gray-400">{space.id}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Info Panel */}
              <div className="space-y-6">
                {/* Parking Location Card */}
                <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-blue-500/20">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/4bfab574-4d52-45cc-9454-671dc355bf61.png"
                      alt="Royal Parking Plaza"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button className="absolute top-2 right-2 text-blue-400 hover:text-blue-300 p-1 transition-colors duration-200">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-white">Royal Parking Plaza</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">4.3</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">80 Wellington St. • Toronto</p>
                    
                    <div className="flex items-center space-x-4 mt-4 text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Car className="w-4 h-4" />
                        <span className="text-xs">Accessibility</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs">24h</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span className="text-xs">Paid</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 border border-blue-500/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{stats.total}</div>
                      <div className="text-xs text-gray-400 mt-1">Total spaces</div>
                    </div>
                  </div>
                  <div className="bg-blue-500/20 backdrop-blur-lg rounded-xl p-4 border border-blue-500/40">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">{stats.available}</div>
                      <div className="text-xs text-gray-300 mt-1">Available Spaces</div>
                    </div>
                  </div>
                  <div className="bg-orange-500/20 backdrop-blur-lg rounded-xl p-4 border border-orange-500/40">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-400">{stats.busy}</div>
                      <div className="text-xs text-gray-300 mt-1">Busy Spaces</div>
                    </div>
                  </div>
                  <div className="bg-red-500/20 backdrop-blur-lg rounded-xl p-4 border border-red-500/40">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-400">{stats.late}</div>
                      <div className="text-xs text-gray-300 mt-1">Late Spaces</div>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-4 border border-blue-500/20">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Price per day</span>
                    <span className="text-white font-bold text-lg">$19</span>
                  </div>
                </div>

                {/* Admin User */}
                <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-4 border border-blue-500/20">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-400 text-sm">Admin user</span>
                    <button className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">M</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">Mike hales</div>
                      <div className="text-gray-400 text-sm">Mike hales@example.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
