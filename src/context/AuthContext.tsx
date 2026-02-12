'use client';

import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

/* 🔐 Fake users (NO DATABASE) */
const FAKE_USERS = [
  {
    id: '1',
    name: 'Admin',
    email: 'admin@idealhouse.com',
    password: 'admin123',
    isAdmin: true,
  },
  {
    id: '2',
    name: 'User',
    email: 'user@idealhouse.com',
    password: 'user123',
    isAdmin: false,
  },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Persist login
  useEffect(() => {
    const stored = localStorage.getItem('auth_user');
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const login = async (email: string, password: string) => {
    const found = FAKE_USERS.find(
      u => u.email === email && u.password === password
    );

    if (!found) {
      throw new Error('Invalid credentials');
    }

    const loggedUser: User = {
      id: found.id,
      name: found.name,
      email: found.email,
      isAdmin: found.isAdmin,
    };

    setUser(loggedUser);
    localStorage.setItem('auth_user', JSON.stringify(loggedUser));
  };

  const register = async (name: string, email: string, password: string) => {
    const newUser: User = {
      id: Math.random().toString(),
      name,
      email,
      isAdmin: false,
    };

    setUser(newUser);
    localStorage.setItem('auth_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
