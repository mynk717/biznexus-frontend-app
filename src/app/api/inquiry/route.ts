// src/app/api/inquiry/route.ts
import { NextResponse } from 'next/server';

// Valid service types
const VALID_SERVICES = [
  'travel-insurance',
  'health-insurance',
  'life-insurance',
  'vehicle-insurance',
  'solar-residential',
  'solar-commercial',
  'properties',
  'used-cars',
  'digital-services',
  'media-marketing',
  'other'
];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // === VALIDATION ===

    // Required fields validation
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and phone are mandatory' },
        { status: 400 }
      );
    }

    // Name validation
    if (body.name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters long' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address format' },
        { status: 400 }
      );
    }

    // Phone validation (Indian format)
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = body.phone.replace(/\D/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: 'Invalid phone number. Must be a valid 10-digit Indian mobile number starting with 6-9' },
        { status: 400 }
      );
    }

    // Service type validation
    if (!body.serviceType || !VALID_SERVICES.includes(body.serviceType)) {
      return NextResponse.json(
        { error: 'Invalid or missing service type' },
        { status: 400 }
      );
    }

    // Conditional validation for travel insurance
    if (body.serviceType.includes('travel-insurance')) {
      if (body.departureDate && body.returnDate) {
        const departure = new Date(body.departureDate);
        const returnDate = new Date(body.returnDate);
        if (departure >= returnDate) {
          return NextResponse.json(
            { error: 'Return date must be after departure date' },
            { status: 400 }
          );
        }
      }
    }

    // Conditional validation for insurance with DOB
    const needsDOB = body.serviceType === 'health-insurance' || body.serviceType === 'life-insurance';
    if (needsDOB && !body.dob) {
      return NextResponse.json(
        { error: 'Date of birth is required for insurance quotes' },
        { status: 400 }
      );
    }

    // Conditional validation for solar
    const isSolar = body.serviceType === 'solar-residential' || body.serviceType === 'solar-commercial';
    if (isSolar) {
      if (!body.monthlyBill) {
        return NextResponse.json(
          { error: 'Monthly electricity bill is required for solar quotes' },
          { status: 400 }
        );
      }
      if (!body.city) {
        return NextResponse.json(
          { error: 'City is required for solar installation quotes' },
          { status: 400 }
        );
      }
    }

    // === FORMAT TELEGRAM MESSAGE ===

    let telegramMessage = `
🔔 *NEW INQUIRY ALERT*

👤 *Name:* ${body.name}
📧 *Email:* ${body.email}
📱 *Phone:* +91 ${cleanPhone}
🎯 *Service:* ${formatServiceName(body.serviceType)}
`;

    // Add service-specific details
    if (body.destination) {
      telegramMessage += `✈️ *Destination:* ${body.destination}\n`;
    }

    if (body.departureDate) {
      telegramMessage += `📅 *Departure:* ${formatDate(body.departureDate)}\n`;
    }

    if (body.returnDate) {
      telegramMessage += `📅 *Return:* ${formatDate(body.returnDate)}\n`;
    }

    if (body.travelers) {
      telegramMessage += `👥 *Travelers:* ${body.travelers}\n`;
    }

    if (body.dob) {
      const age = calculateAge(body.dob);
      telegramMessage += `🎂 *Age:* ${age} years (DOB: ${formatDate(body.dob)})\n`;
    }

    if (body.vehicleType) {
      telegramMessage += `🚗 *Vehicle Type:* ${body.vehicleType}\n`;
    }

    if (body.registrationNumber) {
      telegramMessage += `🔢 *Registration:* ${body.registrationNumber}\n`;
    }

    if (body.monthlyBill) {
      telegramMessage += `⚡ *Monthly Bill:* ₹${body.monthlyBill}\n`;
    }

    if (body.roofArea) {
      telegramMessage += `📐 *Roof Area:* ${body.roofArea} sq ft\n`;
    }

    if (body.city) {
      telegramMessage += `📍 *Location:* ${body.city}\n`;
    }

    if (body.propertyType) {
      telegramMessage += `🏠 *Property Type:* ${body.propertyType}\n`;
    }

    if (body.budget) {
      telegramMessage += `💰 *Budget:* ${body.budget}\n`;
    }

    if (body.message) {
      telegramMessage += `\n💬 *Message:*\n${body.message}\n`;
    }

    telegramMessage += `
⏰ *Time:* ${new Date().toLocaleString('en-IN', { 
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short'
    })}

---
📍 *Source:* MDNetwork Website
    `.trim();

    // === SEND TO TELEGRAM ===

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (botToken && chatId) {
      const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
      await fetch(telegramUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: 'Markdown',
        }),
      }).catch(err => console.error('Telegram API error:', err));
    } else {
      console.warn('Telegram credentials not configured');
    }

    // === SERVER-SIDE ANALYTICS (ADC) ===
    
    const GA_MEASUREMENT_ID = 'G-5VLVPV5R4K';
    const GA_API_SECRET = process.env.GA_MP_API_SECRET;

    if (GA_API_SECRET) {
      const gaUrl = `https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`;
      
      // Generate or use existing client_id
      const clientId = body.clientId || `ss-${Math.random().toString(36).substring(2, 15)}`;

      await fetch(gaUrl, {
        method: 'POST',
        body: JSON.stringify({
          client_id: clientId,
          events: [{
            name: 'generate_lead',
            params: {
              service_type: body.serviceType,
              city: body.city || 'not_specified',
              source: 'server_side_adc',
              currency: 'INR',
              value: body.budget ? parseInt(body.budget.replace(/\D/g, '')) || 0 : 0
            },
          }],
        }),
      }).catch(err => console.error('GA4 Measurement Protocol error:', err));
    }

    // === SUCCESS RESPONSE ===

    return NextResponse.json({ 
      success: true,
      message: 'Inquiry submitted successfully. Our team will contact you within 24 hours during business hours (Mon-Sat, 9 AM - 7 PM IST).' 
    });

  } catch (error) {
    console.error('Inquiry submission error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to submit inquiry',
        message: 'Please try again or contact us directly at +91 72259 91909'
      },
      { status: 500 }
    );
  }
}

// === HELPER FUNCTIONS ===

function formatServiceName(serviceType: string): string {
  const serviceNames: { [key: string]: string } = {
    'travel-insurance': 'Travel Insurance',
    'health-insurance': 'Health Insurance',
    'life-insurance': 'Life Insurance (Tata AIA)',
    'vehicle-insurance': 'Vehicle Insurance',
    'solar-residential': 'Solar - Residential',
    'solar-commercial': 'Solar - Commercial',
    'properties': 'Properties (Land/Flats/Houses)',
    'used-cars': 'Used Cars',
    'digital-services': 'Digital & Web Services',
    'media-marketing': 'Media & Marketing',
    'other': 'Other'
  };
  return serviceNames[serviceType] || serviceType;
}

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  } catch {
    return dateString;
  }
}

function calculateAge(dobString: string): number {
  try {
    const dob = new Date(dobString);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    return age;
  } catch {
    return 0;
  }
}

// === HEALTH CHECK ENDPOINT ===

export async function GET() {
  return NextResponse.json({ 
    status: 'ok',
    service: 'MDNetwork Inquiry API',
    version: '2.0.0',
    timestamp: new Date().toISOString(),
    supportedServices: VALID_SERVICES
  });
}