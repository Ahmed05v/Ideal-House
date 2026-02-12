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
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-8 h-8 relative flex-shrink-0">
              <Image
                src="/ideal house.jpg"
                alt="Ideal House Logo"
                width={32}
                height={32}
                priority
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-serif font-bold text-gray-900">Ideal House</span>
          </Link>

          {/* Navigation - centered */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-amber-600 font-medium transition">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-amber-600 font-medium transition">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-amber-600 font-medium transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-amber-600 font-medium transition">
              Contact
            </Link>
          </nav>

          {/* Right side - User info and Cart */}
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <span className="hidden sm:block text-sm text-gray-700 font-medium">{user.name}</span>
                <button
                  onClick={logout}
                  className="hidden sm:block text-sm text-gray-700 hover:text-amber-600 transition font-medium"
                >
                  Logout
                </button>
                {user.isAdmin && (
                  <Link
                    href="/admin"
                    className="hidden sm:block text-sm bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition font-medium"
                  >
                    Admin
                  </Link>
                )}
              </>
            ) : (
              <Link href="/login" className="hidden sm:block text-sm text-gray-700 hover:text-amber-600 transition font-medium">
                Login
              </Link>
            )}

            <Link href="/cart" className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 font-medium transition flex items-center gap-2">
              🛒 Cart
              {items.length > 0 && (
                <span className="bg-white text-amber-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700 hover:text-amber-600 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="text-2xl">☰</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 space-y-2 border-t border-gray-200 pt-4">
            <Link href="/" className="block text-gray-700 hover:text-amber-600 transition py-2 font-medium">
              Home
            </Link>
            <Link href="/products" className="block text-gray-700 hover:text-amber-600 transition py-2 font-medium">
              Products
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-amber-600 transition py-2 font-medium">
              About
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-amber-600 transition py-2 font-medium">
              Contact
            </Link>
            {user ? (
              <>
                <div className="text-gray-700 py-2 font-medium border-t border-gray-200 mt-2 pt-2">{user.name}</div>
                <button
                  onClick={logout}
                  className="block w-full text-left text-gray-700 hover:text-amber-600 transition py-2 font-medium"
                >
                  Logout
                </button>
                {user.isAdmin && (
                  <Link href="/admin" className="block text-gray-700 hover:text-amber-600 transition py-2 font-medium">
                    Admin
                  </Link>
                )}
              </>
            ) : (
              <Link href="/login" className="block text-gray-700 hover:text-amber-600 transition py-2 font-medium border-t border-gray-200 mt-2 pt-2">
                Login
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}