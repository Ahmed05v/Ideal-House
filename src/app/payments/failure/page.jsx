export default function PaymentFailure() {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            Payment Failed
          </h1>
          <p className="text-gray-600 mb-8">
            There was an issue processing your payment.
          </p>
          <a href="/checkout" className="btn-primary">
            Try Again
          </a>
        </div>
      </div>
    );
  }