'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const { items } = useCart();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition duration-300">
            <div className="w-20 h-20 relative flex-shrink-0">
              <Image
                src="/ideal house.jpg"
                alt="Ideal House Logo"
                width={80}
                height={80}
                priority
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-2xl font-serif font-bold text-dark">
                Ideal House
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-12">
            <Link href="/" className="text-gray-700 font-medium hover:text-primary transition duration-300">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 font-medium hover:text-primary transition duration-300">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 font-medium hover:text-primary transition duration-300">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 font-medium hover:text-primary transition duration-300">
              Contact
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            {user ? (
              <div className="hidden sm:flex items-center space-x-4">
                <span className="text-sm text-gray-700 font-medium">{user.name}</span>
                <button
                  onClick={logout}
                  className="text-sm text-gray-700 hover:text-primary transition duration-300"
                >
                  Logout
                </button>
                {user.isAdmin && (
                  <Link
                    href="/admin"
                    className="text-sm bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg hover:shadow-lg transition duration-300"
                  >
                    Admin
                  </Link>
                )}
              </div>
            ) : (
              <Link href="/login" className="hidden sm:block text-sm text-gray-700 hover:text-primary transition duration-300 font-medium">
                Login
              </Link>
            )}

            <Link href="/cart" className="relative hover:scale-110 transition duration-300">
              <div className="text-2xl">🛒</div>
              {items.length > 0 && (
                <span className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg">
                  {items.length}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700 hover:text-primary transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block text-gray-700 hover:text-primary transition py-2">
              Home
            </Link>
            <Link href="/products" className="block text-gray-700 hover:text-primary transition py-2">
              Products
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-primary transition py-2">
              About
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-primary transition py-2">
              Contact
            </Link>
            {!user && (
              <Link href="/login" className="block text-gray-700 hover:text-primary transition py-2">
                Login
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
