export default function PaymentSuccess() {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            Payment Successful!
          </h1>
          <p className="text-gray-600 mb-8">
            Your order has been confirmed.
          </p>
          <a href="/" className="btn-primary">
            Continue Shopping
          </a>
        </div>
      </div>
    );
  }