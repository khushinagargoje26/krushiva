'use client';
import { useState, useRef, useEffect } from 'react';
import { X, Send, Minimize2, Leaf } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const WA_LINK = 'https://wa.me/918390766825';

const QUICK_QUESTIONS = [
  '🥬 What vegetables do you supply?',
  '🏨 Do you supply to hotels & restaurants?',
  '📦 Do you offer bulk supply?',
  '📍 Where are you located?',
  '💰 What are your prices?',
];

const WELCOME_MESSAGE: Message = {
  role: 'assistant',
  content: `Namaste! 🌿 Welcome to **Krushiva**.\n\nI'm here to help you with fresh vegetable supply for your business.\n\nAre you a hotel, restaurant, caterer, or bulk buyer? Ask me anything!`,
};

function renderText(text: string) {
  // Convert **bold** and links to JSX
  const parts = text.split(/(\*\*[^*]+\*\*|https?:\/\/[^\s]+|\n)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('https://wa.me')) {
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            background: '#25D366',
            color: 'white',
            padding: '5px 12px',
            borderRadius: '20px',
            fontSize: '0.78rem',
            fontWeight: 700,
            textDecoration: 'none',
            margin: '4px 0',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp Us
        </a>
      );
    }
    if (part === '\n') return <br key={i} />;
    return <span key={i}>{part}</span>;
  });
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (open) {
      setShowBubble(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return;

    const userMsg: Message = { role: 'user', content: text.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.message }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `Sorry, I couldn't connect. Please reach us directly on WhatsApp: ${WA_LINK}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <>
      {/* ===== FLOATING BUTTON ===== */}
      <div style={{ position: 'fixed', bottom: '28px', right: '28px', zIndex: 9999 }}>
        {/* Notification bubble */}
        {showBubble && !open && (
          <div
            onClick={() => setOpen(true)}
            style={{
              position: 'absolute',
              bottom: '72px',
              right: '0',
              background: 'white',
              borderRadius: '16px 16px 4px 16px',
              padding: '12px 16px',
              boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
              width: '220px',
              cursor: 'pointer',
              animation: 'fadeUp 0.4s ease',
              border: '1px solid #d8e6c4',
            }}
          >
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.82rem', color: '#2e401d', margin: 0, lineHeight: 1.5 }}>
              👋 Need fresh vegetables for your business? <strong>Ask us anything!</strong>
            </p>
            <div style={{ position: 'absolute', bottom: '-8px', right: '20px', width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop: '8px solid white' }} />
          </div>
        )}

        {/* Main FAB */}
        <button
          onClick={() => { setOpen(!open); setMinimized(false); }}
          style={{
            width: '62px',
            height: '62px',
            borderRadius: '50%',
            background: open ? '#2e401d' : 'linear-gradient(135deg, #46632a, #2e401d)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 6px 25px rgba(46,64,29,0.45)',
            transition: 'all 0.3s ease',
            transform: open ? 'rotate(0deg)' : 'scale(1)',
          }}
          aria-label="Open Krushiva Chat"
        >
          {open ? (
            <X size={24} color="white" />
          ) : (
            <Leaf size={26} color="white" />
          )}
        </button>

        {/* Unread dot */}
        {!open && (
          <div style={{
            position: 'absolute',
            top: '4px',
            right: '4px',
            width: '14px',
            height: '14px',
            background: '#c8962a',
            borderRadius: '50%',
            border: '2px solid white',
            animation: 'pulse 2s infinite',
          }} />
        )}
      </div>

      {/* ===== CHAT WINDOW ===== */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '105px',
            right: '28px',
            width: 'min(380px, calc(100vw - 40px))',
            height: minimized ? 'auto' : '540px',
            background: 'white',
            borderRadius: '20px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: 9998,
            animation: 'slideUp 0.3s ease',
            border: '1px solid #d8e6c4',
          }}
        >
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #2e401d 0%, #46632a 100%)',
            padding: '16px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexShrink: 0,
          }}>
            {/* Avatar */}
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              border: '2px solid rgba(255,255,255,0.3)',
            }}>
              <Leaf size={20} color="white" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1rem', color: 'white' }}>
                Krushiva Assistant
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '2px' }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80' }} />
                <span style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.72rem', color: 'rgba(255,255,255,0.75)' }}>
                  Online · Replies instantly
                </span>
              </div>
            </div>
            <button
              onClick={() => setMinimized(!minimized)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.7)', padding: '4px' }}
            >
              <Minimize2 size={16} />
            </button>
          </div>

          {!minimized && (
            <>
              {/* Messages */}
              <div style={{
                flex: 1,
                overflowY: 'auto',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                background: '#f7f9f2',
              }}>
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                      animation: 'fadeUp 0.3s ease',
                    }}
                  >
                    <div style={{
                      maxWidth: '85%',
                      padding: '10px 14px',
                      borderRadius: msg.role === 'user'
                        ? '16px 16px 4px 16px'
                        : '16px 16px 16px 4px',
                      background: msg.role === 'user'
                        ? 'linear-gradient(135deg, #46632a, #2e401d)'
                        : 'white',
                      color: msg.role === 'user' ? 'white' : '#2d2d2d',
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '0.875rem',
                      lineHeight: '1.55',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    }}>
                      {renderText(msg.content)}
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {loading && (
                  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <div style={{
                      background: 'white',
                      borderRadius: '16px 16px 16px 4px',
                      padding: '12px 16px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      display: 'flex',
                      gap: '4px',
                      alignItems: 'center',
                    }}>
                      {[0, 1, 2].map((n) => (
                        <div key={n} style={{
                          width: '7px',
                          height: '7px',
                          borderRadius: '50%',
                          background: '#749d47',
                          animation: `bounce 1.2s ease infinite`,
                          animationDelay: `${n * 0.2}s`,
                        }} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick questions — show after welcome */}
                {messages.length === 1 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '4px' }}>
                    <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.72rem', color: '#8a9a7a', textAlign: 'center', margin: 0 }}>
                      Quick questions:
                    </p>
                    {QUICK_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        style={{
                          background: 'white',
                          border: '1px solid #c8e0a0',
                          borderRadius: '20px',
                          padding: '8px 14px',
                          fontFamily: "'Lato', sans-serif",
                          fontSize: '0.78rem',
                          color: '#46632a',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.2s',
                          fontWeight: 600,
                        }}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* WhatsApp CTA bar */}
              <div style={{
                background: '#f0faf4',
                borderTop: '1px solid #d8e6c4',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexShrink: 0,
              }}>
                <span style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.75rem', color: '#5a6a4a' }}>
                  Prefer direct chat?
                </span>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: '#25D366',
                    color: 'white',
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    textDecoration: 'none',
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Open WhatsApp
                </a>
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} style={{
                padding: '12px 16px',
                borderTop: '1px solid #e8f0d8',
                display: 'flex',
                gap: '8px',
                background: 'white',
                flexShrink: 0,
              }}>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about vegetables, pricing..."
                  disabled={loading}
                  style={{
                    flex: 1,
                    padding: '10px 14px',
                    border: '1.5px solid #d8e6c4',
                    borderRadius: '25px',
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '0.85rem',
                    outline: 'none',
                    background: '#f7f9f2',
                    color: '#2d2d2d',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = '#46632a'; }}
                  onBlur={(e) => { e.target.style.borderColor = '#d8e6c4'; }}
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: input.trim() ? '#46632a' : '#c8d8b4',
                    border: 'none',
                    cursor: input.trim() ? 'pointer' : 'default',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'background 0.2s',
                  }}
                >
                  <Send size={16} color="white" />
                </button>
              </form>
            </>
          )}
        </div>
      )}

      <style jsx global>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
      `}</style>
    </>
  );
}
