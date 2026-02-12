import { NextResponse } from 'next/server';
import paymobService from '@/lib/Paymob';

export async function POST(request) {
  try {
    const body = await request.json();
    
    const orderData = {
      amountCents: body.amount * 100, // Convert to cents
      items: body.items || [],
      billing: {
        email: body.email,
        firstName: body.firstName,
        lastName: body.lastName,
        phone: body.phone,
        city: body.city,
        apartment: body.apartment || 'NA',
        floor: body.floor || 'NA',
        street: body.street || 'NA',
        building: body.building || 'NA',
        postalCode: body.postalCode || 'NA',
        country: body.country || 'EG',
        state: body.state || 'NA'
      }
    };

    const paymentData = await paymobService.initiatePayment(orderData);

    return NextResponse.json({
      success: true,
      data: paymentData
    });

  } catch (error) {
    console.error('Payment creation error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}