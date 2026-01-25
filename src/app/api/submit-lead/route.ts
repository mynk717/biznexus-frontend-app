import { NextRequest, NextResponse } from 'next/server';

interface LeadData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message?: string;
  destination?: string;
  travelDates?: string;
  travelers?: number;
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.serviceType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Phone validation (Indian format)
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = body.phone.replace(/\D/g, '').slice(-10);
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: 'Invalid phone number. Please enter a valid 10-digit Indian mobile number.' },
        { status: 400 }
      );
    }

    // TODO: Integrate with your CRM/Email service
    // Options:
    // 1. Send to Google Sheets API
    // 2. Send via Resend/SendGrid email
    // 3. Store in database
    // 4. Send to WhatsApp Business API

    // For now, log the lead
    console.log('New Lead Submission:', {
      ...body,
      phone: cleanPhone,
      submittedAt: new Date().toISOString(),
      source: 'MDNetwork Website',
      ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
      userAgent: request.headers.get('user-agent'),
    });

    // Simulated email notification (Replace with actual email service)
    const emailContent = `
      New Lead Submission - MDNetwork
      
      Name: ${body.name}
      Email: ${body.email}
      Phone: +91 ${cleanPhone}
      Service: ${body.serviceType}
      ${body.destination ? `Destination: ${body.destination}` : ''}
      ${body.travelDates ? `Travel Dates: ${body.travelDates}` : ''}
      ${body.travelers ? `Number of Travelers: ${body.travelers}` : ''}
      Message: ${body.message || 'N/A'}
      
      Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `;

    console.log('Email Content:', emailContent);

    // TODO: Send WhatsApp notification
    // Example with Meta WhatsApp Business API
    /*
    const whatsappMessage = {
      to: '917225991909', // Your business number
      type: 'text',
      text: {
        body: `New Lead: ${body.name}\nService: ${body.serviceType}\nPhone: +91 ${cleanPhone}`
      }
    };
    */

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! We have received your inquiry. Our team will contact you within 24 hours.',
        leadId: `MDN${Date.now()}`, // Generate a unique lead ID
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Lead submission error:', error);
    
    return NextResponse.json(
      {
        error: 'Failed to submit your inquiry. Please try again or call us at +91 72259 91909',
      },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to check API status
export async function GET() {
  return NextResponse.json(
    {
      status: 'active',
      service: 'MDNetwork Lead Submission API',
      version: '1.0.0',
    },
    { status: 200 }
  );
}
