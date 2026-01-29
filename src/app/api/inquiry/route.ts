// src/app/api/inquiry/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format Telegram message
    const telegramMessage = `
🔔 *NEW INQUIRY ALERT*

👤 *Name:* ${body.name}
📧 *Email:* ${body.email}
📱 *Phone:* ${body.phone}
🎯 *Service:* ${body.serviceType || 'General'}
${body.destination ? `✈️ *Destination:* ${body.destination}` : ''}
${body.travelDates ? `📅 *Travel Dates:* ${body.travelDates}` : ''}
${body.travelers ? `👥 *Travelers:* ${body.travelers}` : ''}
💬 *Message:*
${body.message || 'No message provided'}

⏰ *Time:* ${new Date().toLocaleString('en-IN', { 
  timeZone: 'Asia/Kolkata',
  dateStyle: 'medium',
  timeStyle: 'short'
})}

---
📍 *Source:* MDNetwork Website
    `.trim();

    // Send to Telegram
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error('Telegram credentials not configured');
      throw new Error('Notification service not configured');
    }

    const telegramUrl = 'https://api.telegram.org/bot' + botToken + '/sendMessage';

    const telegramResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'Markdown',
      }),
    });

    if (!telegramResponse.ok) {
      const errorText = await telegramResponse.text();
      console.error('Telegram API error:', errorText);
      throw new Error('Failed to send notification');
    }

    // Optional: Save to database or Google Sheets here
    // await saveToDatabase(body);

    return NextResponse.json({ 
      success: true,
      message: 'Inquiry submitted successfully. We will contact you within 24 hours.' 
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

// Health check endpoint
export async function GET() {
  return NextResponse.json({ 
    status: 'ok',
    service: 'inquiry-api',
    timestamp: new Date().toISOString()
  });
}