import axios from 'axios';

const PAYMOB_API_URL = process.env.NEXT_PUBLIC_PAYMOB_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_PAYMOB_API_KEY;

class PaymobService {
  // Step 1: Authentication
  async authenticate() {
    try {
      const response = await axios.post(`${PAYMOB_API_URL}/auth/tokens`, {
        api_key: API_KEY
      });
      return response.data.token;
    } catch (error) {
      console.error('Paymob authentication error:', error);
      throw error;
    }
  }

  // Step 2: Create Order
  async createOrder(authToken, orderData) {
    try {
      const response = await axios.post(`${PAYMOB_API_URL}/ecommerce/orders`, {
        auth_token: authToken,
        delivery_needed: 'false',
        amount_cents: orderData.amountCents, // Amount in cents (e.g., 100 EGP = 10000 cents)
        currency: 'EGP',
        items: orderData.items || []
      });
      return response.data;
    } catch (error) {
      console.error('Paymob order creation error:', error);
      throw error;
    }
  }

  // Step 3: Generate Payment Key
  async generatePaymentKey(authToken, orderData, orderId) {
    try {
      const response = await axios.post(`${PAYMOB_API_URL}/acceptance/payment_keys`, {
        auth_token: authToken,
        amount_cents: orderData.amountCents,
        expiration: 3600, // 1 hour
        order_id: orderId,
        billing_data: {
          apartment: orderData.billing.apartment || 'NA',
          email: orderData.billing.email,
          floor: orderData.billing.floor || 'NA',
          first_name: orderData.billing.firstName,
          street: orderData.billing.street || 'NA',
          building: orderData.billing.building || 'NA',
          phone_number: orderData.billing.phone,
          shipping_method: 'NA',
          postal_code: orderData.billing.postalCode || 'NA',
          city: orderData.billing.city,
          country: orderData.billing.country || 'EG',
          last_name: orderData.billing.lastName,
          state: orderData.billing.state || 'NA'
        },
        currency: 'EGP',
        integration_id: process.env.NEXT_PUBLIC_PAYMOB_INTEGRATION_ID
      });
      return response.data.token;
    } catch (error) {
      console.error('Paymob payment key generation error:', error);
      throw error;
    }
  }

  // Complete Payment Process
  async initiatePayment(orderData) {
    try {
      // Step 1: Authenticate
      const authToken = await this.authenticate();

      // Step 2: Create Order
      const order = await this.createOrder(authToken, orderData);

      // Step 3: Generate Payment Key
      const paymentToken = await this.generatePaymentKey(authToken, orderData, order.id);

      return {
        paymentToken,
        orderId: order.id,
        iframeUrl: `https://accept.paymob.com/api/acceptance/iframes/${process.env.NEXT_PUBLIC_PAYMOB_IFRAME_ID}?payment_token=${paymentToken}`
      };
    } catch (error) {
      console.error('Payment initiation error:', error);
      throw error;
    }
  }
}

export default new PaymobService();