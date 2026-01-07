'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-dark to-gray-900 text-white mt-16">
      {/* Newsletter Section */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-300">Get exclusive updates on new collections and special offers</p>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-lg transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-14 h-14 relative">
                <Image
                  src="/ideal house.jpg"
                  alt="Ideal House Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-white">
                  Ideal House
                </h3>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Discover premium furniture that transforms your living spaces into sanctuaries of comfort and style.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-primary transition duration-300 text-lg">f</a>
              <a href="#" className="text-gray-300 hover:text-primary transition duration-300 text-lg">𝕏</a>
              <a href="#" className="text-gray-300 hover:text-primary transition duration-300 text-lg">in</a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Shop</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/products" className="hover:text-primary transition duration-300">All Products</Link></li>
              <li><Link href="/products?category=seating" className="hover:text-primary transition duration-300">Seating</Link></li>
              <li><Link href="/products?category=dining" className="hover:text-primary transition duration-300">Dining</Link></li>
              <li><Link href="/products?category=bedroom" className="hover:text-primary transition duration-300">Bedroom</Link></li>
              <li><Link href="/products?category=office" className="hover:text-primary transition duration-300">Office</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Support</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/about" className="hover:text-primary transition duration-300">About Us</a></li>
              <li><a href="/contact" className="hover:text-primary transition duration-300">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition duration-300">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition duration-300">Shipping Info</a></li>
              <li><a href="#" className="hover:text-primary transition duration-300">Returns</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Legal</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-primary transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition duration-300">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary transition duration-300">Warranty</a></li>
              <li><a href="#" className="hover:text-primary transition duration-300">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">📧</span>
                <a href="mailto:info@idealhouse.com" className="hover:text-primary transition duration-300">info@idealhouse.com</a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">📞</span>
                <a href="tel:+15551234567" className="hover:text-primary transition duration-300">(555) 123-4567</a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">📍</span>
                <span>123 Furniture St<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-300 text-sm">
            <p>&copy; 2026 Ideal House. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition duration-300">Privacy</a>
              <a href="#" className="hover:text-primary transition duration-300">Terms</a>
              <a href="#" className="hover:text-primary transition duration-300">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
