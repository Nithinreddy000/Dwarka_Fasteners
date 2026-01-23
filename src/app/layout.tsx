import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { EnquiryButton } from '@/components/ui/EnquiryButton';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Dwarka Fasteners - India\'s Leading Manufacturer of Stainless Steel Fasteners',
    template: '%s | Dwarka Fasteners',
  },
  description: 'Precision-engineered bolts, nuts, screws & washers, delivering excellence across industries for 40+ years. ISO 9001:2015 certified.',
  keywords: ['stainless steel fasteners', 'bolts', 'nuts', 'screws', 'washers', 'industrial fasteners', 'manufacturer India', 'Dwarka'],
  authors: [{ name: 'Dwarka Fasteners' }],
  creator: 'Dwarka Fasteners',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Dwarka Fasteners',
    title: 'Dwarka Fasteners - Premium Stainless Steel Fasteners',
    description: 'Precision-engineered bolts, nuts, screws & washers. 40+ years of excellence.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dwarka Fasteners',
    description: 'Premium quality stainless steel fasteners and hardware solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#1d4ed8',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans scroll-smooth">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
