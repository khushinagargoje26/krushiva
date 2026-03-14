import { NextRequest, NextResponse } from 'next/server';
import { KRUSHIVA_SYSTEM_PROMPT } from '@/lib/systemPrompt';

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages' }, { status: 400 });
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 400,
        system: KRUSHIVA_SYSTEM_PROMPT,
        messages: messages.slice(-10), // keep last 10 messages for context
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Anthropic API error:', error);
      return NextResponse.json({ error: 'AI service error' }, { status: 500 });
    }

    const data = await response.json();
    const text = data.content?.[0]?.text || "I'm sorry, I couldn't process that. Please contact us on WhatsApp: https://wa.me/918390766825";

    return NextResponse.json({ message: text });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { message: "Sorry, something went wrong. Please reach us directly on WhatsApp: https://wa.me/918390766825" },
      { status: 200 }
    );
  }
}
