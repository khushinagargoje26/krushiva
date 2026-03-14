import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import WhatsAppBtn from '@/components/WhatsAppBtn';

export const metadata = {
  title: 'Products - Krushiva Fresh Vegetables',
  description: "Browse Krushiva's fresh vegetable catalogue. Bulk B2B supply from Nashik.",
};

const ALL_PRODUCTS = [
  { name: 'Onion',        imagePath: '/images/onion.jpg',        badge: 'Nashik Special' },
  { name: 'Potato',       imagePath: '/images/potato.jpg',       badge: 'Fresh Stock'    },
  { name: 'Tomato',       imagePath: '/images/tomato.jpg',       badge: 'Daily Supply'   },
  { name: 'Green Chilli', imagePath: '/images/green-chilli.jpg', badge: 'Premium Grade'  },
  { name: 'Ginger',       imagePath: '/images/ginger.jpg',       badge: 'Farm Fresh'     },
  { name: 'Amla',         imagePath: '/images/amla.jpg',         badge: 'Seasonal'       },
  { name: 'Brinjal',      imagePath: '/images/brinjal.jpg',      badge: 'Fresh Stock'    },
  { name: 'Haldi',        imagePath: '/images/haldi.jpg',        badge: 'Pure Quality'   },
];

const CATEGORIES = [
  { name: 'Leafy Vegetables', imagePath: '/images/category-leafy.jpg',    description: 'Spinach, Methi, Coriander and more' },
  { name: 'Root Vegetables',  imagePath: '/images/category-root.jpg',     description: 'Carrot, Radish, Beetroot and more'  },
  { name: 'Bulbs and Tubers', imagePath: '/images/category-bulbs.jpg',    description: 'Onion, Garlic, Potato and more'     },
  { name: 'Fruit Vegetables', imagePath: '/images/category-fruit.jpg',    description: 'Tomato, Brinjal, Capsicum and more' },
  { name: 'Seasonal Produce', imagePath: '/images/category-seasonal.jpg', description: 'Best picks of every season'        },
];

const STEPS = [
  { step: '01', title: 'Browse Products', desc: 'Find the vegetable you need.'            },
  { step: '02', title: 'Click Enquire',   desc: 'Opens WhatsApp with pre-filled message.' },
  { step: '03', title: 'Get Pricing',     desc: 'We respond with price and bulk details.' },
];

export default function ProductsPage() {
  return (
    <div>

      <section style={{
        paddingTop: '140px',
        paddingBottom: '80px',
        background: 'linear-gradient(135deg, #16220d 0%, #2e401d 60%, #394f23 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'rgba(116,157,71,0.06)',
        }} />
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div style={{ marginBottom: '12px' }}>
            <span style={{
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#c8962a',
              fontFamily: 'Lato, sans-serif',
              fontWeight: 700,
            }}>
              Fresh Stock · Farm Direct
            </span>
          </div>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 800,
            color: 'white',
            lineHeight: 1.1,
            maxWidth: '700px',
          }}>
            Our Vegetable Catalogue
          </h1>
          <p style={{
            fontFamily: 'Lato, sans-serif',
            color: 'rgba(255,255,255,0.65)',
            fontSize: '1rem',
            marginTop: '16px',
            maxWidth: '500px',
          }}>
            All products available for bulk B2B orders. Click any item to send a WhatsApp enquiry instantly.
          </p>
        </div>
      </section>

      <section style={{
        padding: '50px 0',
        background: 'white',
        borderBottom: '1px solid #e8f0d8',
      }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {STEPS.map((s) => (
              <div key={s.step} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
              }}>
                <div style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: 'rgba(116,157,71,0.2)',
                  lineHeight: 1,
                }}>
                  {s.step}
                </div>
                <div style={{
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: '#2e401d',
                }}>
                  {s.title}
                </div>
                <div style={{
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '0.85rem',
                  color: '#6a7a5a',
                }}>
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#fdf8f0' }}>
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
            <div>
              <div style={{
                fontFamily: 'Lato, sans-serif',
                fontWeight: 700,
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#c8962a',
                marginBottom: '8px',
              }}>
                Available Now
              </div>
              <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '2.2rem',
                fontWeight: 700,
                color: '#2e401d',
              }}>
                Fresh Vegetables
              </h2>
            </div>
            <WhatsAppBtn label="Bulk Order Enquiry" size="md" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {ALL_PRODUCTS.map((product) => (
              <ProductCard
                key={product.name}
                name={product.name}
                imagePath={product.imagePath}
                badge={product.badge}
              />
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="max-w-7xl mx-auto px-5">
          <div style={{ marginBottom: '48px' }}>
            <div style={{
              fontFamily: 'Lato, sans-serif',
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#c8962a',
              marginBottom: '10px',
            }}>
              Browse by Category
            </div>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '2.2rem',
              fontWeight: 700,
              color: '#2e401d',
            }}>
              What We Supply
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => (
              <a
                key={cat.name}
                href={
                  'https://wa.me/918390766825?text=Hello%20Krushiva,%20I%20need%20bulk%20' +
                  encodeURIComponent(cat.name) +
                  '.%20Please%20share%20availability%20and%20pricing.'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="category-card"
                style={{ display: 'block', textDecoration: 'none' }}
              >
                <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                  <Image
                    src={cat.imagePath}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="category-card-overlay">
                  <div>
                    <h3 style={{
                      fontFamily: 'Playfair Display, serif',
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      color: 'white',
                      marginBottom: '5px',
                    }}>
                      {cat.name}
                    </h3>
                    <p style={{
                      fontFamily: 'Lato, sans-serif',
                      fontSize: '0.82rem',
                      color: 'rgba(255,255,255,0.7)',
                      marginBottom: '12px',
                    }}>
                      {cat.description}
                    </p>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: '#25D366',
                      color: 'white',
                      fontFamily: 'Lato, sans-serif',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      padding: '7px 14px',
                      borderRadius: '50px',
                    }}>
                      Enquire Now
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{
        padding: '80px 0',
        background: '#fdf8f0',
        borderTop: '1px solid #e8f0d8',
      }}>
        <div className="max-w-2xl mx-auto px-5 text-center">
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🌾</div>
          <h3 style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            fontSize: '1.8rem',
            color: '#2e401d',
            marginBottom: '12px',
          }}>
            Do Not See What You Need?
          </h3>
          <p style={{
            fontFamily: 'Lato, sans-serif',
            color: '#6a7a5a',
            fontSize: '0.95rem',
            marginBottom: '28px',
            lineHeight: '1.7',
          }}>
            Our catalogue changes seasonally. WhatsApp us with your requirement
            and we likely have it or can source it from our farmer network.
          </p>
          <WhatsAppBtn label="Ask About Any Vegetable" size="lg" />
        </div>
      </section>
    </div>
  );
}