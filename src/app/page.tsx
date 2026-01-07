'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { FURNITURE_PRODUCTS } from '@/lib/products';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [newsletter, setNewsletter] = useState('');

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-dark via-gray-900 to-primary overflow-hidden flex items-center">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
                Elevate Your Living Space
              </h1>
              <p className="text-xl text-gray-300 mb-4 leading-relaxed max-w-xl">
                Discover curated collections of premium furniture that transforms your house into a sanctuary of comfort, elegance, and timeless style.
              </p>
              <p className="text-lg text-gray-400 mb-8 max-w-xl">
                From contemporary designs to classic sophistication, find pieces that perfectly complement your lifestyle.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  Shop Collection
                </Link>
                <Link href="/about" className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-dark transition-all duration-300">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl"></div>
              <div className="w-full h-full bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-2xl flex items-center justify-center text-white text-6xl">
                🏠
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-serif font-bold text-center mb-4 text-dark">
            Why Choose Ideal House?
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
            We're committed to delivering excellence in every piece
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 rounded-xl hover:bg-gray-50 transition duration-300 group">
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition duration-300">✨</div>
              <h3 className="text-xl font-serif font-bold mb-3 text-dark">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Hand-crafted furniture from the finest sustainable materials
              </p>
            </div>

            <div className="text-center p-8 rounded-xl hover:bg-gray-50 transition duration-300 group">
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition duration-300">🚚</div>
              <h3 className="text-xl font-serif font-bold mb-3 text-dark">Free Shipping</h3>
              <p className="text-gray-600 leading-relaxed">
                Complimentary delivery & assembly on orders over $500
              </p>
            </div>

            <div className="text-center p-8 rounded-xl hover:bg-gray-50 transition duration-300 group">
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition duration-300">🛡️</div>
              <h3 className="text-xl font-serif font-bold mb-3 text-dark">Lifetime Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Dedicated customer service and comprehensive warranty coverage
              </p>
            </div>

            <div className="text-center p-8 rounded-xl hover:bg-gray-50 transition duration-300 group">
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition duration-300">♻️</div>
              <h3 className="text-xl font-serif font-bold mb-3 text-dark">Eco-Friendly</h3>
              <p className="text-gray-600 leading-relaxed">
                Sustainable practices and responsibly sourced materials
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold mb-4 text-dark">
              Featured Collections
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our latest handpicked selections of premium furniture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FURNITURE_PRODUCTS.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-serif font-bold mb-4 text-center text-dark">
            Shop by Category
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Find exactly what you're looking for
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Seating', icon: '🛋️', desc: 'Sofas, chairs & ottomans' },
              { name: 'Dining', icon: '🍽️', desc: 'Tables & dining sets' },
              { name: 'Bedroom', icon: '🛏️', desc: 'Beds, nightstands & dressers' },
              { name: 'Office', icon: '💼', desc: 'Desks, shelves & storage' }
            ].map((category) => (
              <Link key={category.name} href={`/products?category=${category.name.toLowerCase()}`}>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-gray-200">
                  <div className="text-6xl mb-4 transform group-hover:scale-125 transition duration-300 inline-block">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-dark mb-2 group-hover:text-primary transition duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">
                    {category.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-dark to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-300 text-lg">
              Join thousands of satisfied customers who've transformed their homes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Homeowner',
                text: 'The quality of furniture exceeded my expectations. Every piece is beautifully crafted and has truly elevated my living space.',
                rating: 5
              },
              {
                name: 'Michael Chen',
                role: 'Interior Designer',
                text: 'I recommend Ideal House to all my clients. Their attention to detail and customer service is unmatched in the industry.',
                rating: 5
              },
              {
                name: 'Emma Rodriguez',
                role: 'Design Enthusiast',
                text: 'Best shopping experience I\'ve had. From browsing to delivery, everything was seamless and professional.',
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-primary transition duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-secondary text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
