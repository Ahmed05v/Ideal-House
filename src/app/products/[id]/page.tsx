'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FURNITURE_PRODUCTS } from '@/lib/products';
import { useParams } from 'next/navigation';

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = FURNITURE_PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">😕</div>
            <p className="text-gray-600 text-lg">Product not found</p>
            <a href="/products" className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300">
              Browse All Products
            </a>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const relatedProducts = FURNITURE_PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <a href="/products" className="text-primary hover:underline">Products</a> / <span className="text-gray-600">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Image */}
          <div className="flex flex-col gap-4">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden h-96 lg:h-[600px] shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-sm text-gray-500 flex gap-2">
              <span>📷 High-quality product photography</span>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-start">
            <div className="mb-6">
              <span className="text-sm font-bold text-primary uppercase tracking-wider">
                {product.category}
              </span>
              <h1 className="text-5xl font-serif font-bold text-dark mt-2 mb-4">
                {product.name}
              </h1>
            </div>

            {/* Price and Stock */}
            <div className="mb-8 pb-8 border-b-2 border-gray-200">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  ${product.price}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className={`px-4 py-2 rounded-full font-semibold text-sm ${
                  product.stock > 0
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {product.stock > 0 ? `✓ ${product.stock} in stock` : '✗ Out of stock'}
                </div>
                {product.stock <= 5 && product.stock > 0 && (
                  <span className="text-orange-600 font-semibold text-sm">Only a few left!</span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row items-stretch gap-4 mb-8">
              <div className="flex items-center border-2 border-gray-200 rounded-lg bg-gray-50 overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-6 py-4 text-gray-600 hover:bg-gray-100 font-bold text-lg transition duration-200"
                >
                  −
                </button>
                <span className="px-6 py-4 font-bold text-lg border-r-2 border-l-2 border-gray-200">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-6 py-4 text-gray-600 hover:bg-gray-100 font-bold text-lg transition duration-200"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`flex-1 py-4 font-bold text-lg rounded-lg transition-all duration-300 ${
                  addedToCart
                    ? 'bg-green-500 text-white shadow-lg'
                    : product.stock === 0
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-2xl hover:scale-105'
                }`}
              >
                {addedToCart ? '✓ Added to Cart!' : product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 rounded-xl mb-8">
              <div className="text-center">
                <div className="text-2xl mb-2">🚚</div>
                <p className="text-xs font-semibold text-gray-700">Free Shipping</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🛡️</div>
                <p className="text-xs font-semibold text-gray-700">5-Year Warranty</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">↩️</div>
                <p className="text-xs font-semibold text-gray-700">30-Day Returns</p>
              </div>
            </div>

            {/* Features */}
            <div className="bg-gradient-to-br from-dark to-gray-900 text-white p-8 rounded-xl">
              <h3 className="text-lg font-bold mb-4">Premium Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-secondary text-lg">✓</span>
                  <span>Premium quality materials</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary text-lg">✓</span>
                  <span>Handcrafted by skilled artisans</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary text-lg">✓</span>
                  <span>Free shipping & assembly included</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary text-lg">✓</span>
                  <span>Comprehensive 5-year warranty</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary text-lg">✓</span>
                  <span>Hassle-free 30-day returns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-24 pt-16 border-t-2 border-gray-200">
            <h2 className="text-4xl font-serif font-bold text-dark mb-12">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <div key={p.id} className="group">
                  <a href={`/products/${p.id}`}>
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                      <div className="relative h-64 bg-gray-100 overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-serif text-lg font-bold text-dark group-hover:text-primary transition">
                          {p.name}
                        </h3>
                        <p className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-2">
                          ${p.price}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </>
  );
}
