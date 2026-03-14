'use client';
import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hello Krushiva,%0AName: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/918390766825?text=${text}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <>
      {/* ====== PAGE HERO ====== */}
      <section style={{
        paddingTop: '140px',
        paddingBottom: '80px',
        background: 'linear-gradient(135deg, #16220d 0%, #2e401d 60%, #394f23 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div style={{ marginBottom: '12px' }}>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c8962a', fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>
              Get in Touch
            </span>
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 800,
            color: 'white',
            lineHeight: 1.1,
            maxWidth: '700px',
          }}>
            Contact<br />
            <em style={{ color: '#c8962a', fontStyle: 'italic' }}>Krushiva</em>
          </h1>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.65)', fontSize: '1rem', marginTop: '16px', maxWidth: '480px' }}>
            Reach out via WhatsApp, phone, or the form below. We respond fast to all bulk enquiries.
          </p>
        </div>
      </section>

      {/* ====== CONTACT MAIN ====== */}
      <section style={{ padding: '100px 0', background: '#fdf8f0' }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">

            {/* Left – Contact Info */}
            <div className="lg:col-span-2">
              <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c8962a', marginBottom: '12px' }}>
                Contact Details
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 700, color: '#2e401d', marginBottom: '36px' }}>
                We're Here to Help
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* WhatsApp */}
                <a
                  href="https://wa.me/918390766825"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '20px',
                    background: 'white',
                    borderRadius: '16px',
                    boxShadow: '0 2px 15px rgba(46,64,29,0.07)',
                    border: '1px solid #d8e6c4',
                    textDecoration: 'none',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  className="group hover:shadow-lg hover:-translate-y-1"
                >
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#749d47', marginBottom: '4px' }}>
                      WhatsApp (Preferred)
                    </div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: '1.1rem', color: '#2e401d' }}>
                      +91 83907 66825
                    </div>
                    <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.8rem', color: '#6a7a5a', marginTop: '3px' }}>
                      Fastest way to reach us
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+918999702877"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '20px',
                    background: 'white',
                    borderRadius: '16px',
                    boxShadow: '0 2px 15px rgba(46,64,29,0.07)',
                    border: '1px solid #d8e6c4',
                    textDecoration: 'none',
                  }}
                >
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#46632a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={20} color="white" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#749d47', marginBottom: '4px' }}>
                      Contact Number
                    </div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: '1.1rem', color: '#2e401d' }}>
                      +91 89997 02877
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:krushiva4@gmail.com"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '20px',
                    background: 'white',
                    borderRadius: '16px',
                    boxShadow: '0 2px 15px rgba(46,64,29,0.07)',
                    border: '1px solid #d8e6c4',
                    textDecoration: 'none',
                  }}
                >
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#c8962a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={20} color="white" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#749d47', marginBottom: '4px' }}>
                      Email
                    </div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: '1rem', color: '#2e401d' }}>
                      krushiva4@gmail.com
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  padding: '20px',
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 2px 15px rgba(46,64,29,0.07)',
                  border: '1px solid #d8e6c4',
                }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#c4622d', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={20} color="white" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#749d47', marginBottom: '4px' }}>
                      Location
                    </div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: '1.1rem', color: '#2e401d' }}>
                      Bytco Point, Nashik Road, Nashik
                    </div>
                    <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.8rem', color: '#6a7a5a', marginTop: '3px' }}>
                      India
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 18px',
                  background: 'rgba(70,99,42,0.06)',
                  borderRadius: '12px',
                  border: '1px solid rgba(70,99,42,0.15)',
                }}>
                  <Clock size={16} color="#749d47" />
                  <span style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.82rem', color: '#4a5a3a' }}>
                    <strong>Business Hours:</strong> Mon – Sat, 8:00 AM – 7:00 PM IST
                  </span>
                </div>
              </div>
            </div>

            {/* Right – Form */}
            <div className="lg:col-span-3">
              <div style={{
                background: 'white',
                borderRadius: '24px',
                padding: 'clamp(28px, 5vw, 50px)',
                boxShadow: '0 10px 50px rgba(46,64,29,0.1)',
                border: '1px solid #d8e6c4',
              }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.7rem', color: '#2e401d', marginBottom: '8px' }}>
                  Send an Enquiry
                </h3>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.88rem', color: '#6a7a5a', marginBottom: '32px' }}>
                  Fill the form — it'll open WhatsApp with your message pre-filled for instant response.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <label style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#46632a', display: 'block', marginBottom: '8px' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Patil"
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <label style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#46632a', display: 'block', marginBottom: '8px' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210"
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <label style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#46632a', display: 'block', marginBottom: '8px' }}>
                      Message / Requirement *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="e.g. I need 500 kg onion and 200 kg potato. Please share price and delivery details."
                      rows={5}
                      className="contact-input"
                      style={{ resize: 'vertical', minHeight: '130px' }}
                    />
                  </div>

                  <button type="submit" className="wa-btn justify-center" style={{ fontSize: '1rem', padding: '16px 28px', borderRadius: '12px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Send via WhatsApp
                  </button>

                  {submitted && (
                    <div style={{
                      background: 'rgba(37,211,102,0.1)',
                      border: '1px solid rgba(37,211,102,0.4)',
                      borderRadius: '10px',
                      padding: '14px',
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '0.88rem',
                      color: '#1a7a40',
                      textAlign: 'center',
                    }}>
                      ✅ WhatsApp opened! Your message is pre-filled and ready to send.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== GOOGLE MAP ====== */}
      <section style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto px-5 pb-16">
          <div style={{ borderRadius: '20px', overflow: 'hidden', height: '420px', boxShadow: '0 10px 40px rgba(46,64,29,0.12)', border: '1px solid #d8e6c4' }}>
            <iframe
              title="Krushiva – Nashik Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118946.62742977174!2d73.7276718!3d19.9974533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebbb9aaaaaab%3A0xe1e1e1e1e1e1e1e1!2sNashik%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
