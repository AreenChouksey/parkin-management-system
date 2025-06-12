
import React, { useState, useEffect } from 'react';
import { Car, Check, X, DollarSign } from 'lucide-react';
import ParkingLot from './ParkingLot';
import '../styles.css';

const Dashboard = ({ user }) => {
  const [parkingSpaces, setParkingSpaces] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    available: 0,
    occupied: 0,
    reserved: 0,
    revenue: 0
  });

  useEffect(() => {
    generateParkingSpaces();
  }, []);

  useEffect(() => {
    updateStats();
  }, [parkingSpaces]);

  const generateParkingSpaces = () => {
    const spaces = [];
    const totalSpaces = 50;

    for (let i = 1; i <= totalSpaces; i++) {
      const random = Math.random();
      let status;

      if (random < 0.3) {
        status = 'available';
      } else if (random < 0.8) {
        status = 'occupied';
      } else {
        status = 'reserved';
      }

      spaces.push({
        id: i,
        number: `A${i.toString().padStart(2, '0')}`,
        status: status,
        vehicle: status !== 'available' ? generateVehicleInfo() : undefined
      });
    }

    setParkingSpaces(spaces);
  };

  const generateVehicleInfo = () => {
    const makes = ['Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes', 'Audi', 'Volkswagen'];
    const colors = ['Black', 'White', 'Silver', 'Blue', 'Red', 'Gray'];

    return {
      make: makes[Math.floor(Math.random() * makes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      plate: generateLicensePlate()
    };
  };

  const generateLicensePlate = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    let plate = '';
    for (let i = 0; i < 3; i++) {
      plate += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    plate += '-';
    for (let i = 0; i < 3; i++) {
      plate += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    return plate;
  };

  const updateStats = () => {
    const available = parkingSpaces.filter(s => s.status === 'available').length;
    const occupied = parkingSpaces.filter(s => s.status === 'occupied').length;
    const reserved = parkingSpaces.filter(s => s.status === 'reserved').length;
    const total = parkingSpaces.length;
    const revenue = (occupied + reserved) * 5;

    setStats({ total, available, occupied, reserved, revenue });
  };

  const updateSpaceStatus = (spaceId, newStatus) => {
    setParkingSpaces(prevSpaces =>
      prevSpaces.map(space => {
        if (space.id === spaceId) {
          return {
            ...space,
            status: newStatus,
            vehicle: newStatus !== 'available' ? generateVehicleInfo() : undefined
          };
        }
        return space;
      })
    );
  };

  const statCards = [
    {
      icon: Car,
      title: 'Total Spaces',
      value: stats.total,
      color: '#2563eb',
      bgColor: '#dbeafe'
    },
    {
      icon: Check,
      title: 'Available',
      value: stats.available,
      color: '#059669',
      bgColor: '#d1fae5'
    },
    {
      icon: X,
      title: 'Occupied',
      value: stats.occupied,
      color: '#dc2626',
      bgColor: '#fee2e2'
    },
    {
      icon: DollarSign,
      title: "Today's Revenue",
      value: `$${stats.revenue}`,
      color: '#d97706',
      bgColor: '#fef3c7'
    }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1 className="dashboard-title">
            {user.role === 'super_admin' ? 'Super Admin Dashboard' : 
             user.role === 'admin' ? 'Admin Dashboard' : 
             'User Dashboard'}
          </h1>
          <p className="dashboard-subtitle">Welcome back, {user.name}!</p>
        </div>

        <div className="stats-dashboard-grid">
          {statCards.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-card-content">
                <div 
                  className="stat-icon-container"
                  style={{ backgroundColor: stat.bgColor }}
                >
                  <stat.icon 
                    className="stat-icon"
                    style={{ color: stat.color }}
                  />
                </div>
                <div className="stat-data">
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-title">{stat.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="parking-lot-card">
          <ParkingLot 
            spaces={parkingSpaces} 
            onUpdateSpace={updateSpaceStatus}
            userRole={user.role}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
