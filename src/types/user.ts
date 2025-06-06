
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'super_admin' | 'admin' | 'user';
  avatar?: string;
}

export interface ParkingSpace {
  id: number;
  number: string;
  status: 'available' | 'occupied' | 'reserved';
  vehicle?: VehicleInfo;
}

export interface VehicleInfo {
  make: string;
  color: string;
  plate: string;
}
