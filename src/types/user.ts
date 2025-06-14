
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'super_admin' | 'admin' | 'user';
}

export interface ParkingSpace {
  id: number;
  number: string;
  status: 'available' | 'occupied' | 'reserved';
  vehicle?: {
    make: string;
    color: string;
    plate: string;
  };
}
