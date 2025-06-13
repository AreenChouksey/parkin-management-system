
// User type definitions for the parking management system

export const USER_ROLES = {
  SUPER_ADMIN: 'super_admin',
  ADMIN: 'admin',
  USER: 'user'
};

export const PARKING_STATUS = {
  AVAILABLE: 'available',
  OCCUPIED: 'occupied',
  RESERVED: 'reserved'
};

// Example user object structure:
// {
//   id: string,
//   email: string,
//   name: string,
//   role: 'super_admin' | 'admin' | 'user'
// }

// Example parking space object structure:
// {
//   id: number,
//   number: string,
//   status: 'available' | 'occupied' | 'reserved',
//   vehicle?: {
//     make: string,
//     color: string,
//     plate: string
//   }
// }
