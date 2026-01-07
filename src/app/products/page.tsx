'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { FURNITURE_PRODUCTS } from '@/lib/products';

const CATEGORIES = ['all', 'seating', 'dining', 'bedroom', 'office', 'storage', 'living'];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = selectedCategory === 'all'
    ? FURNITURE_PRODUCTS
    : FURNITURE_PRODUCTS.filter(p => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });
  return (
    <>
      <Header />

      {/* Header Section */}
      <section className="bg-gradient-to-r from-dark to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-serif font-bold mb-3">Our Collections</h1>
          <p className="text-gray-300 text-lg">Discover our curated selection of premium furniture</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-lg sticky top-24">
              <h3 className="text-lg font-bold mb-6 text-dark flex items-center gap-2">
                🎯 Categories
              </h3>
              <div className="space-y-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                      selectedCategory === cat
                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    {cat === 'all' ? '✓ All Products' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold mb-4 text-dark flex items-center gap-2">
                  📊 Sort By
                </h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-primary transition duration-300 bg-gray-50 hover:bg-white"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name">Name: A-Z</option>
                </select>
              </div>

              {/* Filter Summary */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-dark">{sortedProducts.length}</span> products found
                </p>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {sortedProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {sortedProducts.length > 0 && (
                  <div className="mt-12 text-center">
                    <p className="text-gray-600">
                      Showing <span className="font-bold">{sortedProducts.length}</span> products
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-gray-700 text-lg font-medium mb-2">No products found</p>
                <p className="text-gray-600 text-center max-w-sm">
                  Try adjusting your filters or browse our full collection
                </p>
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="mt-6 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  View All Products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
