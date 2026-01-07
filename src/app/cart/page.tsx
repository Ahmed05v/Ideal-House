'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center py-16 px-4">
            <div className="text-7xl mb-6">🛒</div>
            <h1 className="text-4xl font-serif font-bold text-dark mb-4">Your cart is empty</h1>
            <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
              Explore our premium furniture collection and find pieces that match your style
            </p>
            <Link href="/products" className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Start Shopping
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      {/* Header Section */}
      <section className="bg-gradient-to-r from-dark to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold">Shopping Cart</h1>
          <p className="text-gray-300 mt-2">{items.length} item{items.length !== 1 ? 's' : ''} in your cart</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="flex gap-6 p-6">
                    <div className="relative w-32 h-32 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-bold text-dark mb-2">{item.name}</h3>
                      <p className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                        ${item.price}
                      </p>

                      <div className="flex flex-wrap gap-4 items-center">
                        <div className="flex items-center border-2 border-gray-200 rounded-lg bg-gray-50 overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="px-4 py-2 text-gray-600 hover:bg-gray-200 font-bold transition duration-200"
                          >
                            −
                          </button>
                          <span className="px-6 py-2 font-bold border-l-2 border-r-2 border-gray-200">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-4 py-2 text-gray-600 hover:bg-gray-200 font-bold transition duration-200"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="px-4 py-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition duration-300 font-medium"
                        >
                          🗑️ Remove
                        </button>
                      </div>
                    </div>

                    <div className="text-right flex flex-col justify-between">
                      <p className="text-sm text-gray-600">Subtotal</p>
                      <p className="text-2xl font-bold text-dark">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={clearCart}
              className="mt-8 px-6 py-2 text-gray-600 hover:text-gray-800 font-medium border-b border-gray-300 hover:border-gray-400 transition duration-300"
            >
              Clear entire cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl p-8 sticky top-24">
              <h2 className="text-3xl font-serif font-bold text-dark mb-8">Order Summary</h2>

              <div className="space-y-4 mb-8 pb-8 border-b-2 border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Subtotal</span>
                  <span className="font-bold text-dark">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Shipping</span>
                  <span className="font-bold text-green-600 flex items-center gap-1">
                    ✓ FREE
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Tax (10%)</span>
                  <span className="font-bold text-dark">${(total * 0.1).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-dark">Total</span>
                <span className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  ${(total * 1.1).toFixed(2)}
                </span>
              </div>

              <Link href="/checkout" className="w-full inline-block py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-2xl transition-all duration-300 text-center mb-4 hover:scale-105">
                Proceed to Checkout
              </Link>

              <Link href="/products" className="w-full inline-block py-3 bg-gray-200 hover:bg-gray-300 text-dark font-bold rounded-lg transition-all duration-300 text-center">
                Continue Shopping
              </Link>

              {/* Trust Badges */}
              <div className="mt-8 pt-8 border-t-2 border-gray-200 space-y-3 text-sm text-gray-600">
                <div className="flex gap-2 items-center">
                  <span className="text-lg">🔒</span>
                  <span>Secure checkout</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-lg">✓</span>
                  <span>30-day returns</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-lg">📧</span>
                  <span>Order confirmation email</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
