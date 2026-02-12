export type UserRole = 'admin' | 'user';

export const USERS = [
  {
    email: 'admin@idealhouse.com',
    password: 'admin123',
    role: 'admin' as UserRole,
  },
  {
    email: 'user@idealhouse.com',
    password: 'user123',
    role: 'user' as UserRole,
  },
];
