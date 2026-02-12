import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Verify HMAC
    const hmacSecret = process.env.PAYMOB_HMAC_SECRET;
    const {
      amount_cents,
      created_at,
      currency,
      error_occured,
      has_parent_transaction,
      id,
      integration_id,
      is_3d_secure,
      is_auth,
      is_capture,
      is_refunded,
      is_standalone_payment,
      is_voided,
      order,
      owner,
      pending,
      source_data_pan,
      source_data_sub_type,
      source_data_type,
      success
    } = body.obj;

    // Concatenate for HMAC verification
    const concatenatedString = `${amount_cents}${created_at}${currency}${error_occured}${has_parent_transaction}${id}${integration_id}${is_3d_secure}${is_auth}${is_capture}${is_refunded}${is_standalone_payment}${is_voided}${order.id}${owner}${pending}${source_data_pan}${source_data_sub_type}${source_data_type}${success}`;

    const hash = crypto
      .createHmac('sha512', hmacSecret)
      .update(concatenatedString)
      .digest('hex');

    if (hash !== body.hmac) {
      return NextResponse.json(
        { success: false, error: 'Invalid HMAC' },
        { status: 400 }
      );
    }

    // Payment successful
    if (success === 'true' || success === true) {
      // Update your database with payment status
      console.log('Payment successful for order:', order.id);
      
      // TODO: Update order status in your database
      // await updateOrderStatus(order.id, 'paid');
    } else {
      console.log('Payment failed for order:', order.id);
      // TODO: Handle failed payment
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}