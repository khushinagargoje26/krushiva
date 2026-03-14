import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Truck, Shield, Users, Star, Phone } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import WhatsAppBtn from '@/components/WhatsAppBtn';

const HERO_PRODUCTS = [
  { name: 'Onion', imagePath: '/images/onion.jpg', badge: 'Nashik Special' },
  { name: 'Potato', imagePath: '/images/potato.jpg', badge: 'Fresh Stock' },
  { name: 'Tomato', imagePath: '/images/tomato.jpg', badge: 'Daily Supply' },
  { name: 'Green Chilli', imagePath: '/images/green-chilli.jpg', badge: 'Premium Grade' },
  { name: 'Ginger', imagePath: '/images/ginger.jpg', badge: 'Farm Fresh' },
  { name: 'Amla', imagePath: '/images/amla.jpg', badge: 'Seasonal' },
  { name: 'Brinjal', imagePath: '/images/brinjal.jpg', badge: 'Fresh Stock' },
  { name: 'Haldi', imagePath: '/images/haldi.jpg', badge: 'Pure Quality' },
];

const CATEGORIES = [
  { name: 'Leafy Vegetables', imagePath: '/images/category-leafy.jpg', description: 'Spinach, Methi, Coriander & more' },
  { name: 'Root Vegetables', imagePath: '/images/category-root.jpg', description: 'Carrot, Radish, Beetroot & more' },
  { name: 'Bulbs & Tubers', imagePath: '/images/category-bulbs.jpg', description: 'Onion, Garlic, Potato & more' },
  { name: 'Fruit Vegetables', imagePath: '/images/category-fruit.jpg', description: 'Tomato, Brinjal, Capsicum & more' },
  { name: 'Seasonal Produce', imagePath: '/images/category-seasonal.jpg', description: 'Best picks of every season' },
];

const TRUST_ITEMS = [
  { icon: <Truck size={20} />, text: 'Farm-Direct Supply' },
  { icon: <Shield size={20} />, text: 'Quality Assured' },
  { icon: <Users size={20} />, text: 'B2B Specialists' },
  { icon: <Star size={20} />, text: 'Nashik Based' },
];

export default function HomePage() {
  return (
    <>
      {/* ====== HERO ====== */}
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-grain" />

        {/* Decorative diagonal lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div style={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: '1px',
            height: '200px',
            background: 'linear-gradient(to bottom, transparent, rgba(200,150,42,0.4), transparent)',
          }} />
          <div style={{
            position: 'absolute',
            bottom: '15%',
            left: '8%',
            width: '120px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(200,150,42,0.4), transparent)',
          }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-5 text-center">
          <div className="anim-fade-up" style={{ marginBottom: '20px' }}>
            <span style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#c8962a',
              display: 'inline-block',
              padding: '6px 20px',
              border: '1px solid rgba(200,150,42,0.4)',
              borderRadius: '50px',
            }}>
              Bytco Point, Nashik Road, Nashik
            </span>
          </div>

          <h1
            className="anim-fade-up anim-delay-1"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(3.5rem, 8vw, 7rem)',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '20px',
            }}
          >
            Farm to<br />
            <em style={{ color: '#c8962a', fontStyle: 'italic' }}>Kitchen</em>
          </h1>

          <p
            className="anim-fade-up anim-delay-2"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)',
              color: 'rgba(255,255,255,0.85)',
              marginBottom: '44px',
              fontWeight: 400,
              fontStyle: 'italic',
              letterSpacing: '0.01em',
            }}
          >
            Fresh Vegetables Direct from Indian Farms
          </p>

          <div className="anim-fade-up anim-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/products" className="cta-btn">
              Explore Fresh Produce
              <ChevronRight size={18} />
            </Link>
            <WhatsAppBtn label="Quick Enquiry" size="lg" />
          </div>

          {/* Scroll indicator */}
          <div className="anim-fade-up anim-delay-4 mt-16 flex flex-col items-center gap-2">
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontFamily: "'Lato', sans-serif" }}>
              Scroll
            </span>
            <div style={{
              width: '1px',
              height: '50px',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
              animation: 'fadeIn 1.5s ease infinite alternate',
            }} />
          </div>
        </div>
      </section>

      {/* ====== TRUST STRIP ====== */}
      <div className="trust-strip">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 divide-y-2 md:divide-y-0 md:divide-x divide-white/10">
            {TRUST_ITEMS.map((item, i) => (
              <div key={i} className="trust-item justify-center py-4 md:py-2 px-4">
                <span className="text-earth-400">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ====== FEATURED PRODUCTS ====== */}
      <section style={{ padding: '100px 0', background: '#fdf8f0' }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <div className="section-eyebrow">Our Products</div>
            <div className="leaf-divider" style={{ justifyContent: 'center' }}>
              <div className="leaf-divider-line" style={{ maxWidth: '80px' }} />
              <span style={{ color: '#749d47', fontSize: '1.2rem' }}>🌿</span>
              <div className="leaf-divider-line" style={{ maxWidth: '80px' }} />
            </div>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              Fresh from the Fields
            </h2>
            <p className="section-subtitle mx-auto text-center">
              Direct farm supply of premium vegetables — available for bulk orders and wholesale purchase.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {HERO_PRODUCTS.map((product) => (
              <ProductCard
                key={product.name}
                name={product.name}
                imagePath={product.imagePath}
                badge={product.badge}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#46632a',
                textDecoration: 'none',
                borderBottom: '2px solid #749d47',
                paddingBottom: '4px',
                transition: 'color 0.3s',
              }}
            >
              View All Products <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====== CATEGORIES ====== */}
      <section style={{ padding: '100px 0', background: 'white' }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="mb-16">
            <div className="section-eyebrow">Browse by Category</div>
            <div className="leaf-divider">
              <div className="leaf-divider-line" style={{ maxWidth: '40px' }} />
              <span style={{ color: '#749d47', fontSize: '1.2rem' }}>🌿</span>
              <div className="leaf-divider-line" />
            </div>
            <h2 className="section-title">
              What We Supply
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat, i) => (
              <a
                key={cat.name}
                href={`https://wa.me/918390766825?text=Hello%20Krushiva,%20I%20need%20bulk%20${encodeURIComponent(cat.name)}.%20Please%20share%20availability%20and%20pricing.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`category-card ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                style={{ display: 'block', textDecoration: 'none' }}
              >
                <div style={{ position: 'relative', height: i === 0 ? '320px' : '280px', overflow: 'hidden' }}>
                  <Image
                    src={cat.imagePath}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="category-card-img"
                  />
                </div>
                <div className="category-card-overlay">
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '1.4rem',
                        fontWeight: 700,
                        color: 'white',
                        marginBottom: '6px',
                      }}
                    >
                      {cat.name}
                    </h3>
                    <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginBottom: '14px' }}>
                      {cat.description}
                    </p>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: '#25D366',
                        color: 'white',
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 700,
                        fontSize: '0.78rem',
                        letterSpacing: '0.06em',
                        padding: '8px 16px',
                        borderRadius: '50px',
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Enquire Now
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ====== WHY KRUSHIVA ====== */}
      <section style={{ padding: '100px 0', background: '#f7f9f2' }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', height: '480px', boxShadow: '0 30px 80px rgba(46,64,29,0.15)' }}>
              <Image
                src="/images/about.jpg"
                alt="Krushiva farm operations"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '30px',
                left: '30px',
                background: 'white',
                borderRadius: '16px',
                padding: '18px 24px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
              }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.6rem', color: '#2e401d' }}>15+</div>
                <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#749d47' }}>Years of Trust</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="section-eyebrow">Why Choose Krushiva</div>
              <div className="leaf-divider">
                <div className="leaf-divider-line" style={{ maxWidth: '40px' }} />
                <span style={{ color: '#749d47', fontSize: '1.2rem' }}>🌿</span>
                <div className="leaf-divider-line" />
              </div>
              <h2 className="section-title" style={{ marginBottom: '24px' }}>
                Trusted by Buyers<br />Across India
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '32px' }}>
                Founded and managed by <strong>Balu Nagargoje</strong>, Krushiva has been a reliable partner for retailers, wholesalers, and bulk buyers who demand consistent quality and fair pricing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                {[
                  { emoji: '🌾', title: 'Farm Direct', desc: 'No middlemen. Fresh vegetables straight from Nashik-region farms.' },
                  { emoji: '⚡', title: 'Fast Enquiry', desc: 'WhatsApp-first process. Get pricing and availability instantly.' },
                  { emoji: '📦', title: 'Bulk Ready', desc: 'Capable of handling large orders for wholesalers and distributors.' },
                  { emoji: '✅', title: 'Quality Check', desc: 'Every lot inspected before dispatch for freshness and grade.' },
                ].map((item) => (
                  <div key={item.title} style={{
                    background: 'white',
                    borderRadius: '14px',
                    padding: '20px',
                    boxShadow: '0 2px 15px rgba(46,64,29,0.06)',
                    border: '1px solid #d8e6c4',
                  }}>
                    <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{item.emoji}</div>
                    <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.05rem', color: '#2e401d', marginBottom: '6px' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.85rem', color: '#5a6a4a', lineHeight: '1.6' }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppBtn label="Start Bulk Enquiry" size="lg" />
                <Link href="/about" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: '#46632a',
                  textDecoration: 'none',
                  padding: '14px 0',
                }}>
                  Our Story <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CTA BANNER ====== */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #2e401d 0%, #46632a 60%, #394f23 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(200,150,42,0.08)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-80px',
          left: '-40px',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'rgba(116,157,71,0.1)',
          pointerEvents: 'none',
        }} />

        <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
          <div style={{ marginBottom: '12px' }}>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c8962a', fontFamily: "'Lato', sans-serif", fontWeight: 700 }}>
              Ready to Order?
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 700,
            color: 'white',
            marginBottom: '16px',
          }}>
            Get Fresh Produce Delivered<br />to Your Doorstep
          </h2>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            color: 'rgba(255,255,255,0.7)',
            fontSize: '1.05rem',
            marginBottom: '40px',
          }}>
            Contact us on WhatsApp for pricing, availability, and bulk order arrangements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WhatsAppBtn label="WhatsApp Enquiry Now" size="lg" />
            <a
              href="tel:+918999702877"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'transparent',
                border: '2px solid rgba(255,255,255,0.3)',
                color: 'white',
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: '0.9rem',
                padding: '14px 28px',
                borderRadius: '50px',
                textDecoration: 'none',
                transition: 'border-color 0.3s, background 0.3s',
              }}
            >
              <Phone size={18} />
              Call Us: 8999702877
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
