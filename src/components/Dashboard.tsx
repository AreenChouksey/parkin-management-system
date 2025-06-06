
import React, { useState, useEffect } from 'react';
import { Car, Check, X, DollarSign } from 'lucide-react';
import { User, ParkingSpace, VehicleInfo } from '../types/user';
import ParkingLot from './ParkingLot';

interface DashboardProps {
  user: User;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const [parkingSpaces, setParkingSpaces] = useState<ParkingSpace[]>([]);
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
    const spaces: ParkingSpace[] = [];
    const totalSpaces = 50;

    for (let i = 1; i <= totalSpaces; i++) {
      const random = Math.random();
      let status: 'available' | 'occupied' | 'reserved';

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

  const generateVehicleInfo = (): VehicleInfo => {
    const makes = ['Toyota', 'Honda', 'Ford', 'BMW', 'Mercedes', 'Audi', 'Volkswagen'];
    const colors = ['Black', 'White', 'Silver', 'Blue', 'Red', 'Gray'];

    return {
      make: makes[Math.floor(Math.random() * makes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      plate: generateLicensePlate()
    };
  };

  const generateLicensePlate = (): string => {
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

  const updateSpaceStatus = (spaceId: number, newStatus: 'available' | 'occupied' | 'reserved') => {
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
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Check,
      title: 'Available',
      value: stats.available,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: X,
      title: 'Occupied',
      value: stats.occupied,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: DollarSign,
      title: "Today's Revenue",
      value: `$${stats.revenue}`,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {user.role === 'super_admin' ? 'Super Admin Dashboard' : 
             user.role === 'admin' ? 'Admin Dashboard' : 
             'User Dashboard'}
          </h1>
          <p className="text-gray-600 mt-2">Welcome back, {user.name}!</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                  <p className="text-gray-600 text-sm">{stat.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Parking Lot */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
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
