import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Krushiva – Fresh Vegetables from Nashik Farms',
  description: 'Krushiva supplies premium fresh vegetables directly from Indian farms to retailers, wholesalers, and bulk buyers. Based in Nashik, India. WhatsApp enquiries welcome.',
  keywords: 'fresh vegetables, Nashik, wholesale vegetables, farm to kitchen, onion supplier, potato supplier, bulk vegetables India, B2B vegetables',
  authors: [{ name: 'Balu Nagargoje' }],
  openGraph: {
    title: 'Krushiva – Farm to Kitchen',
    description: 'Fresh Vegetables Direct from Indian Farms. Bulk B2B supply from Nashik.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}