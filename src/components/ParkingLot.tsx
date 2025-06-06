
import React from 'react';
import { ParkingSpace } from '../types/user';

interface ParkingLotProps {
  spaces: ParkingSpace[];
  onUpdateSpace: (spaceId: number, status: 'available' | 'occupied' | 'reserved') => void;
  userRole: 'super_admin' | 'admin' | 'user';
}

const ParkingLot: React.FC<ParkingLotProps> = ({ spaces, onUpdateSpace, userRole }) => {
  const handleSpaceClick = (space: ParkingSpace) => {
    if (userRole === 'user') {
      // Users can only view, show info
      if (space.status !== 'available') {
        alert(`Space ${space.number} - ${space.status}\n${space.vehicle ? `${space.vehicle.color} ${space.vehicle.make}\nPlate: ${space.vehicle.plate}` : ''}`);
      }
      return;
    }

    const action = prompt(`Space ${space.number} is currently ${space.status}. What would you like to do?\n\n1. Mark as Available\n2. Mark as Occupied\n3. Mark as Reserved\n\nEnter 1, 2, or 3:`);

    switch (action) {
      case '1':
        onUpdateSpace(space.id, 'available');
        break;
      case '2':
        onUpdateSpace(space.id, 'occupied');
        break;
      case '3':
        onUpdateSpace(space.id, 'reserved');
        break;
      default:
        return;
    }
  };

  const getSpaceTooltip = (space: ParkingSpace) => {
    if (space.status === 'available') {
      return `Space ${space.number} - Available`;
    } else if (space.status === 'occupied') {
      return `Space ${space.number} - Occupied\n${space.vehicle?.color} ${space.vehicle?.make}\nPlate: ${space.vehicle?.plate}`;
    } else {
      return `Space ${space.number} - Reserved`;
    }
  };

  const getSpaceColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-500 hover:bg-green-600';
      case 'occupied':
        return 'bg-red-500 hover:bg-red-600';
      case 'reserved':
        return 'bg-yellow-500 hover:bg-yellow-600';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Parking Lot Layout</h3>
      
      {/* Legend */}
      <div className="flex flex-wrap gap-6 justify-center">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span className="text-sm text-gray-600">Available</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-red-500 rounded"></div>
          <span className="text-sm text-gray-600">Occupied</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-yellow-500 rounded"></div>
          <span className="text-sm text-gray-600">Reserved</span>
        </div>
      </div>

      {/* Parking Grid */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-3">
          {spaces.map((space) => (
            <div
              key={space.id}
              onClick={() => handleSpaceClick(space)}
              className={`
                ${getSpaceColor(space.status)}
                w-16 h-10 rounded cursor-pointer transition-all duration-200 transform hover:scale-105
                flex items-center justify-center text-white text-xs font-bold shadow-sm
              `}
              title={getSpaceTooltip(space)}
            >
              {space.number}
            </div>
          ))}
        </div>
      </div>

      {userRole !== 'user' && (
        <div className="text-sm text-gray-600 text-center">
          Click on any parking space to change its status
        </div>
      )}
    </div>
  );
};

export default ParkingLot;
