
import React from 'react';
import '../styles.css';

const ParkingLot = ({ spaces, onUpdateSpace, userRole }) => {
  const handleSpaceClick = (space) => {
    if (userRole === 'user') {
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

  const getSpaceTooltip = (space) => {
    if (space.status === 'available') {
      return `Space ${space.number} - Available`;
    } else if (space.status === 'occupied') {
      return `Space ${space.number} - Occupied\n${space.vehicle?.color} ${space.vehicle?.make}\nPlate: ${space.vehicle?.plate}`;
    } else {
      return `Space ${space.number} - Reserved`;
    }
  };

  const getSpaceClass = (status) => {
    switch (status) {
      case 'available':
        return 'parking-space-item space-available-item';
      case 'occupied':
        return 'parking-space-item space-occupied-item';
      case 'reserved':
        return 'parking-space-item space-reserved-item';
      default:
        return 'parking-space-item';
    }
  };

  return (
    <div>
      <h3 className="parking-lot-title">Parking Lot Layout</h3>
      
      <div className="legend">
        <div className="legend-item">
          <div className="legend-color space-available-item"></div>
          <span className="legend-label">Available</span>
        </div>
        <div className="legend-item">
          <div className="legend-color space-occupied-item"></div>
          <span className="legend-label">Occupied</span>
        </div>
        <div className="legend-item">
          <div className="legend-color space-reserved-item"></div>
          <span className="legend-label">Reserved</span>
        </div>
      </div>

      <div className="parking-grid-container">
        <div className="parking-spaces-grid">
          {spaces.map((space) => (
            <div
              key={space.id}
              onClick={() => handleSpaceClick(space)}
              className={getSpaceClass(space.status)}
              title={getSpaceTooltip(space)}
            >
              {space.number}
            </div>
          ))}
        </div>
      </div>

      {userRole !== 'user' && (
        <div className="parking-instructions">
          Click on any parking space to change its status
        </div>
      )}
    </div>
  );
};

export default ParkingLot;
