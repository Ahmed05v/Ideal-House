'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PaymentModal({ isOpen, onClose, orderData }) {
  const [loading, setLoading] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState(null);
  const router = useRouter();

  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/payment/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });

      const data = await response.json();

      if (data.success) {
        setPaymentUrl(data.data.iframeUrl);
      } else {
        alert('Payment initiation failed');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Complete Payment</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        {!paymentUrl ? (
          <div className="text-center py-8">
            <button
              onClick={handlePayment}
              disabled={loading}
              className="btn-primary"
            >
              {loading ? 'Processing...' : 'Proceed to Payment'}
            </button>
          </div>
        ) : (
          <iframe
            src={paymentUrl}
            className="w-full h-[600px] border-0"
            title="Payment Gateway"
          />
        )}
      </div>
    </div>
  );
}