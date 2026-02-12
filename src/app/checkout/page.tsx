'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CheckoutPage() {
  const { items, total } = useCart();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  if (items.length === 0) {
    return (
      <>
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-6">Checkout</h1>
          <p>Your cart is empty</p>
          <Link href="/products" className="btn-primary mt-4 inline-block">
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePayment = async () => {
    try {
      setLoading(true);

      const response = await fetch('/api/paymob/create-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: Math.round(total * 1.1 * 100), // cents
          items,
          billingData: formData
        })
      });

      const data = await response.json();

      if (!data.iframeUrl) {
        alert("Payment initialization failed");
        return;
      }

      // Redirect to Paymob iframe
      window.location.href = data.iframeUrl;

    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Form */}
          <div className="lg:col-span-2 bg-white p-6 rounded shadow">

            {step === 1 && (
              <>
                <h2 className="text-2xl font-bold mb-6">Shipping Details</h2>

                <div className="grid grid-cols-2 gap-4">
                  <input name="firstName" placeholder="First Name"
                    onChange={handleInputChange}
                    className="border p-2 rounded" required />

                  <input name="lastName" placeholder="Last Name"
                    onChange={handleInputChange}
                    className="border p-2 rounded" required />
                </div>

                <input name="email" placeholder="Email"
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full mt-4" required />

                <input name="phone" placeholder="Phone"
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full mt-4" required />

                <input name="address" placeholder="Address"
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full mt-4" required />

                <div className="grid grid-cols-3 gap-4 mt-4">
                  <input name="city" placeholder="City"
                    onChange={handleInputChange}
                    className="border p-2 rounded" required />

                  <input name="state" placeholder="State"
                    onChange={handleInputChange}
                    className="border p-2 rounded" required />

                  <input name="zipCode" placeholder="Zip"
                    onChange={handleInputChange}
                    className="border p-2 rounded" required />
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="btn-primary mt-6 w-full"
                >
                  Continue
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="text-2xl font-bold mb-6">Review Order</h2>

                <p className="mb-4">
                  {formData.firstName} {formData.lastName}<br />
                  {formData.address}, {formData.city}
                </p>

                <button
                  onClick={() => setStep(1)}
                  className="btn-outline w-full mb-4"
                >
                  Back
                </button>

                <button
                  onClick={handlePayment}
                  disabled={loading}
                  className="btn-primary w-full"
                >
                  {loading ? "Processing..." : "Pay with Card"}
                </button>
              </>
            )}

          </div>

          {/* Summary */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

            {items.map(item => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}

            <div className="border-t pt-4 mt-4 font-bold flex justify-between">
              <span>Total</span>
              <span>${(total * 1.1).toFixed(2)}</span>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
