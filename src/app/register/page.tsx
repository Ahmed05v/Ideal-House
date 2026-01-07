'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const { register } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await register(formData.name, formData.email, formData.password);
      router.push('/');
    } catch (err) {
      setError('Failed to create account');
    }
  };
  return (
    <>
      <Header />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12">
        <div className="max-w-md w-full">
          {/* Card Container */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-serif font-bold text-dark mb-2">
                Create Your Account
              </h1>
              <p className="text-gray-600">Join the Ideal House community</p>
            </div>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-4 rounded-lg mb-6 flex gap-3">
                <span className="text-red-500 text-xl">⚠️</span>
                <div>
                  <p className="font-bold text-sm">Registration Error</p>
                  <p className="text-sm mt-1">{error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold mb-3 text-dark">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition duration-300 bg-gray-50 hover:bg-white"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-3 text-dark">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition duration-300 bg-gray-50 hover:bg-white"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-3 text-dark">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition duration-300 bg-gray-50 hover:bg-white"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-3 text-dark">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition duration-300 bg-gray-50 hover:bg-white"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-[1.02] mt-6"
              >
                Create Account
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600 text-center text-sm">
                Already have an account?{' '}
                <Link href="/login" className="text-primary hover:text-secondary font-bold transition duration-300">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>

          {/* Trust & Security Info */}
          <div className="mt-8 grid grid-cols-2 gap-4 text-center text-xs text-gray-600">
            <div className="flex flex-col items-center gap-1">
              <span className="text-lg">🔒</span>
              <span>Secure & Encrypted</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-lg">✓</span>
              <span>Privacy Guaranteed</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
