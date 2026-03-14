import Link from 'next/link';
import { MapPin, Phone, Mail, Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-5 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-earth-700 flex items-center justify-center">
              <Leaf size={20} className="text-earth-200" />
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>
                Krushiva
              </div>
              <div style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#749d47', fontWeight: 700 }}>
                Farm to Kitchen
              </div>
            </div>
          </div>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', fontSize: '0.95rem', maxWidth: '320px' }}>
            Supplying fresh, farm-direct vegetables to retailers, wholesalers, and bulk buyers across India. Rooted in Nashik, trusted by the trade.
          </p>
          <div className="mt-6">
            <a
              href="https://wa.me/918390766825?text=Hello%20Krushiva,%20I%20am%20interested%20in%20bulk%20vegetables.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="wa-btn"
              style={{ fontSize: '0.82rem', padding: '11px 22px' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Start WhatsApp Enquiry
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#749d47', marginBottom: '20px' }}>
            Navigation
          </h4>
          <ul className="space-y-3">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About Us' },
              { href: '/products', label: 'Products' },
              { href: '/contact', label: 'Contact' },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.6)', fontSize: '0.92rem', textDecoration: 'none', transition: 'color 0.2s' }}
                  className="hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#749d47', marginBottom: '20px' }}>
            Contact
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone size={15} className="text-earth-400 mt-1 flex-shrink-0" />
              <div>
                <a href="https://wa.me/918390766825" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', display: 'block' }}>
                  +91 83907 66825 (WhatsApp)
                </a>
                <a href="tel:+918999702877" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', display: 'block' }}>
                  +91 89997 02877
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={15} className="text-earth-400 mt-1 flex-shrink-0" />
              <a href="mailto:krushiva4@gmail.com" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                krushiva4@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={15} className="text-earth-400 mt-1 flex-shrink-0" />
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                Bytco Point, Nashik Road, Nashik
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} Krushiva. All rights reserved. Founded by Balu Nagargoje.
          </p>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
            Bytco Point, Nashik Road, Nashik 🌿
          </p>
        </div>
      </div>
    </footer>
  );
}
