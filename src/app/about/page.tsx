import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import WhatsAppBtn from '@/components/WhatsAppBtn';

export const metadata = {
  title: 'About Krushiva – Balu Nagargoje, Nashik',
  description: 'Learn about Krushiva, founded and managed by Balu Nagargoje. A trusted B2B vegetable supply business based in Nashik, India.',
};

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section style={{
        paddingTop: '140px',
        paddingBottom: '80px',
        background: 'linear-gradient(135deg, #16220d 0%, #2e401d 60%, #394f23 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'rgba(116,157,71,0.06)',
          transform: 'translate(30%, -30%)',
        }} />
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div style={{ marginBottom: '12px' }}>
            <span style={{
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#c8962a',
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
            }}>
              Our Story
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
            Rooted in Nashik,<br />
            <em style={{ color: '#c8962a', fontStyle: 'italic' }}>Trusted by India</em>
          </h1>
        </div>
      </section>

      {/* MAIN ABOUT SECTION */}
      <section style={{ padding: '100px 0', background: '#fdf8f0' }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Image Column */}
            <div>
              {/* Owner Image with nameplate */}
              <div style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 30px 80px rgba(46,64,29,0.18)',
                border: '1px solid #d8e6c4',
              }}>
                <div style={{
                  position: 'relative',
                  height: '600px',
                  width: '100%',
                }}>
                  <Image
                    src="/images/owner.jpeg"
                    alt="Balu Nagargoje – Founder of Krushiva"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                    priority
                  />
                </div>
                <div style={{
                  padding: '22px 28px',
                  background: 'linear-gradient(135deg, #2e401d, #46632a)',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: '1.4rem',
                    color: 'white',
                    marginBottom: '5px',
                  }}>
                    Balu Nagargoje
                  </div>
                  <div style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#c8d8a0',
                  }}>
                    Founder &amp; Manager – Krushiva
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  { value: '15+',  label: 'Years Experience' },
                  { value: '50+',  label: 'Regular Buyers'   },
                  { value: '100%', label: 'Farm Direct'       },
                ].map((stat) => (
                  <div key={stat.label} style={{
                    background: 'white',
                    borderRadius: '14px',
                    padding: '20px 14px',
                    textAlign: 'center',
                    boxShadow: '0 2px 15px rgba(46,64,29,0.07)',
                    border: '1px solid #d8e6c4',
                  }}>
                    <div style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 800,
                      fontSize: '2rem',
                      color: '#2e401d',
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: '#749d47',
                      marginTop: '4px',
                    }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Column */}
            <div>
              <div style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#c8962a',
                marginBottom: '12px',
              }}>
                About Krushiva
              </div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                fontWeight: 700,
                color: '#2e401d',
                lineHeight: 1.2,
                marginBottom: '24px',
              }}>
                Founded and Managed by<br />
                <span style={{ color: '#46632a' }}>Balu Nagargoje</span>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <p style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '1rem',
                  color: '#4a5a3a',
                  lineHeight: '1.8',
                }}>
                  Krushiva is a B2B vegetable supply business based in{' '}
                  <strong>Bytco Point, Nashik Road, Nashik, Maharashtra</strong> — the
                  vegetable heartland of the country. Founded with a clear mission: to
                  eliminate unnecessary supply chain layers and bring farm-fresh produce
                  directly to those who need it most.
                </p>
                <p style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '1rem',
                  color: '#4a5a3a',
                  lineHeight: '1.8',
                }}>
                  We supply fresh vegetables directly from farms to{' '}
                  <strong>retailers, wholesalers, mandis, and bulk buyers</strong> across
                  the region. Our model is simple — strong farmer relationships, rigorous
                  quality checks, and transparent dealing.
                </p>
                <p style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '1rem',
                  color: '#4a5a3a',
                  lineHeight: '1.8',
                }}>
                  Nashik is known as India&apos;s premier vegetable growing region. Being
                  rooted here means our buyers get access to the freshest stock at the
                  most competitive prices — with no compromises on quality.
                </p>
              </div>

              {/* Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 mb-10">
                {[
                  { icon: '🌱', title: 'Farm Direct',    desc: 'Built on direct relationships with local farmers in the Nashik region.' },
                  { icon: '🤝', title: 'Honest Dealing', desc: 'Fair pricing and transparent communication — always.'                    },
                  { icon: '📦', title: 'Bulk Capable',   desc: 'Equipped to fulfill large and consistent bulk orders reliably.'          },
                  { icon: '🌿', title: 'Quality First',  desc: 'Every vegetable lot is inspected for freshness and grade before dispatch.'},
                ].map((v) => (
                  <div key={v.title} style={{
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'flex-start',
                    padding: '16px',
                    background: '#f7f9f2',
                    borderRadius: '12px',
                    border: '1px solid #d8e6c4',
                  }}>
                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{v.icon}</span>
                    <div>
                      <div style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: '#2e401d',
                        marginBottom: '4px',
                      }}>
                        {v.title}
                      </div>
                      <div style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: '0.82rem',
                        color: '#5a6a4a',
                        lineHeight: '1.5',
                      }}>
                        {v.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <WhatsAppBtn label="Enquire About Bulk Supply" size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section style={{ padding: '60px 0', background: '#2e401d' }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: <MapPin size={28} />,
                label: 'Location',
                value: 'Bytco Point, Nashik Road',
                sub: 'Nashik, Maharashtra, India',
              },
              {
                icon: <Phone size={28} />,
                label: 'Phone / WhatsApp',
                value: '+91 83907 66825',
                sub: '+91 89997 02877',
              },
              {
                icon: <Mail size={28} />,
                label: 'Email',
                value: 'krushiva4@gmail.com',
                sub: 'For bulk enquiries',
              },
            ].map((item) => (
              <div key={item.label} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
              }}>
                <div style={{ color: '#749d47' }}>{item.icon}</div>
                <div style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#c8962a',
                }}>
                  {item.label}
                </div>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 600,
                  fontSize: '1.05rem',
                  color: 'white',
                }}>
                  {item.value}
                </div>
                <div style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '0.82rem',
                  color: 'rgba(255,255,255,0.5)',
                }}>
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}