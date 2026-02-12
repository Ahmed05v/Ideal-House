'use client';

import Header from '@/components/Header';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = () => {
    if (email) {
      console.log('Newsletter signup:', email);
      setEmail('');
    }
  };

  return (
    <>
       <Header />
      {/* Hero Section - Sofa Living Room */}
      <section className="relative h-screen bg-cover bg-center bg-no-repeat pt-20 flex items-center overflow-hidden" 
               style={{backgroundImage: 'url("https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=80")'}}>
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl">
            <h1 className="text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Elevate Your Living
            </h1>
            <p className="text-xl text-white/90 mb-4 leading-relaxed">
              Discover curated collections of premium furniture that transforms your house into a sanctuary of comfort and elegance.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="/products" className="px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all inline-block">
                Shop Now
              </a>
              <a href="/about" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all inline-block">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections - Grid Style */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif font-bold text-gray-900 mb-4">
              Featured Collections
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Handpicked selections of premium furniture pieces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Collection Card 1 */}
            <a href="/products" className="group overflow-hidden rounded-2xl shadow-lg cursor-pointer">
              <div className="relative h-80 bg-cover bg-center overflow-hidden"
                   style={{backgroundImage: 'url("https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80")'}}>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <h3 className="text-3xl font-serif font-bold mb-2">Sofas & Seating</h3>
                  <p className="text-gray-100">Comfort meets style</p>
                </div>
              </div>
            </a>

            {/* Collection Card 2 */}
            <a href="/products" className="group overflow-hidden rounded-2xl shadow-lg cursor-pointer">
              <div className="relative h-80 bg-cover bg-center overflow-hidden"
                   style={{backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80")'}}>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <h3 className="text-3xl font-serif font-bold mb-2">Beds & Bedroom</h3>
                  <p className="text-gray-100">Restful elegance</p>
                </div>
              </div>
            </a>

            {/* Collection Card 3 */}
            <a href="/products" className="group overflow-hidden rounded-2xl shadow-lg cursor-pointer">
              <div className="relative h-80 bg-cover bg-center overflow-hidden"
                   style={{backgroundImage: 'url("https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&q=80")'}}>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <h3 className="text-3xl font-serif font-bold mb-2">Dining Sets</h3>
                  <p className="text-gray-100">Gather in style</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Dark Background with Image */}
      <section className="relative py-32 bg-cover bg-center"
               style={{backgroundImage: 'url("https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1400&q=80")'}}>
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl font-serif font-bold text-white text-center mb-20">
            Why Choose Ideal House?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 text-white text-center hover:bg-white/20 transition">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-serif font-bold mb-3">Premium Quality</h3>
              <p className="text-white/80">Hand-crafted from finest sustainable materials</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 text-white text-center hover:bg-white/20 transition">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-serif font-bold mb-3">Free Shipping</h3>
              <p className="text-white/80">Complimentary delivery on orders over $500</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 text-white text-center hover:bg-white/20 transition">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-serif font-bold mb-3">Lifetime Support</h3>
              <p className="text-white/80">Dedicated service and warranty coverage</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 text-white text-center hover:bg-white/20 transition">
              <div className="text-5xl mb-4">♻️</div>
              <h3 className="text-xl font-serif font-bold mb-3">Eco-Friendly</h3>
              <p className="text-white/80">Sustainable practices and responsible sourcing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category - Split Layout */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-serif font-bold text-center mb-20 text-gray-900">
            Shop by Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Seating', desc: 'Sofas, chairs & ottomans', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80' },
              { name: 'Dining', desc: 'Tables & dining sets', img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80' },
              { name: 'Bedroom', desc: 'Beds & bedroom furniture', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80' },
              { name: 'Office', desc: 'Desks, shelves & storage', img: 'https://images.unsplash.com/photo-1593642632409-0c6688e566c0?w=800&q=80' }
            ].map((cat, i) => (
              <a key={i} href="/products" className="group relative h-80 overflow-hidden rounded-2xl shadow-xl cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center"
                     style={{backgroundImage: `url("${cat.img}")`}}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                  <h3 className="text-4xl font-serif font-bold mb-2 group-hover:scale-110 transition">{cat.name}</h3>
                  <p className="text-white/80">{cat.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-32 bg-cover bg-center"
               style={{backgroundImage: 'url("https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1400&q=80")'}}>
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl font-serif font-bold text-white text-center mb-4">
            What Our Customers Say
          </h2>
          <p className="text-white/80 text-center mb-16 text-lg">
            Join thousands who've transformed their homes
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'Homeowner', text: 'The quality exceeded expectations. Every piece is beautifully crafted.' },
              { name: 'Michael Chen', role: 'Interior Designer', text: 'I recommend Ideal House to all clients. Unmatched attention to detail.' },
              { name: 'Emma Rodriguez', role: 'Design Enthusiast', text: 'Best shopping experience. Everything was seamless and professional.' }
            ].map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 text-white hover:bg-white/20 transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <span key={j} className="text-yellow-400 text-lg">★</span>)}
                </div>
                <p className="text-white/90 mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-white/60 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-4xl font-serif font-bold mb-4">Stay Updated</h2>
          <p className="text-white/80 mb-8">Get exclusive offers and new collection announcements</p>
          
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
            <button 
              onClick={handleNewsletterSubmit}
              className="px-8 py-3 bg-amber-600 hover:bg-amber-700 rounded-lg font-bold transition"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <a href="/" className="font-serif font-bold text-lg mb-4 block">Ideal House</a>
              <p className="text-gray-400 text-sm">Premium furniture for modern living</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/products" className="hover:text-white">All Products</a></li>
                <li><a href="/products" className="hover:text-white">New Arrivals</a></li>
                <li><a href="/products" className="hover:text-white">Collections</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
                <li><a href="/contact" className="hover:text-white">Shipping Info</a></li>
                <li><a href="/contact" className="hover:text-white">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/about" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Ideal House. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}