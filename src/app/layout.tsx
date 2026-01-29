import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import { Toaster } from "@/components/ui/toaster";
import FooterYear from '@/components/layout/FooterYear';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mdnetwork.in'),
  title: {
    default: 'MDNetwork: TATA AIG Insurance & Solar Solutions in Raipur',
    template: '%s | MDNetwork',
  },
  description: 'MDNetwork offers comprehensive TATA AIG travel, health, life insurance and solar energy solutions in Raipur, Chhattisgarh. Get instant quotes and expert guidance.',
  keywords: [
    'TATA AIG insurance Raipur',
    'travel insurance India',
    'health insurance Chhattisgarh',
    'solar panels Raipur',
    'international travel insurance',
    'Schengen visa insurance'
  ],
  openGraph: {
    title: 'MDNetwork Raipur: TATA AIG Insurance & Solar Solutions',
    description: 'Get comprehensive insurance coverage and solar solutions in Raipur. TATA AIG travel, health, life insurance with instant policy issuance.',
    url: 'https://mdnetwork.in/',
    siteName: 'MDNetwork',
    images: [
      {
        url: '/images/branding/logo.svg',
        width: 1200,
        height: 630,
        alt: 'MDNetwork - Insurance & Solar Solutions',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MDNetwork: TATA AIG Insurance & Solar Solutions Raipur',
    description: 'Comprehensive insurance and solar energy solutions for Raipur and Chhattisgarh.',
    images: ['/images/branding/logo.svg'],
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
  verification: {
    google: 'google4b566dcd00eccdcc',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/images/branding/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-16">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-1">
                <div className="mb-4">
                  <img 
                    src="/images/branding/logo-white.svg" 
                    alt="MDNetwork" 
                    className="h-12 w-auto"
                  />
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Your trusted partner for insurance, solar solutions, digital services, and business growth in Raipur, Chhattisgarh.
                </p>

                {/* Operated By Badge */}
                <div className="mb-4 p-3 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-lg border border-purple-500/20">
                  <p className="text-xs text-gray-400 mb-1">Operated by</p>
                  <a 
                    href="https://mktgdime.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-300 hover:to-pink-300 transition-all"
                  >
                    Marketing Dime (MKTDM)
                  </a>
                  <p className="text-[10px] text-gray-500 mt-0.5">Digital Marketing & Business Solutions</p>
                </div>

                <div className="flex gap-4">
                  <a href="https://www.facebook.com/marketingdime360" className="text-gray-400 hover:text-white transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://x.com/MarketingDime" className="text-gray-400 hover:text-white transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/mktdm/" className="text-gray-400 hover:text-white transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/marketingdime/" target="_blank" rel="noopener" className="text-gray-400 hover:text-white transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-white transition">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-white transition">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/insurance" className="text-gray-400 hover:text-white transition">
                      Insurance Plans
                    </Link>
                  </li>
                  <li>
                    <Link href="/solar/residential" className="text-gray-400 hover:text-white transition">
                      Solar Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/digital" className="text-gray-400 hover:text-white transition">
                      Digital Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-gray-400 hover:text-white transition">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-white transition">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/insurance/travel/international" className="text-gray-400 hover:text-white transition">
                      Travel Insurance
                    </Link>
                  </li>
                  <li>
                    <Link href="/insurance/health" className="text-gray-400 hover:text-white transition">
                      Health Insurance
                    </Link>
                  </li>
                  <li>
                    <Link href="/insurance/life" className="text-gray-400 hover:text-white transition">
                      Life Insurance (Tata AIA)
                    </Link>
                  </li>
                  <li>
                    <Link href="/insurance/vehicle" className="text-gray-400 hover:text-white transition">
                      Vehicle Insurance
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/properties" className="text-gray-400 hover:text-white transition">
                      Properties in Raipur
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/used-cars" className="text-gray-400 hover:text-white transition">
                      Used Cars
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/media" className="text-gray-400 hover:text-white transition">
                      Media & Marketing
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Phone className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="tel:+917225991909" className="text-gray-400 hover:text-white transition">
                        +91 72259 91909
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Mail className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <a href="mailto:contact@mdnetwork.in" className="text-gray-400 hover:text-white transition">
                        contact@mdnetwork.in
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div className="text-gray-400">
                      Raipur, Chhattisgarh, India
                    </div>
                  </li>
                </ul>

                {/* Marketing Partner Badge */}
                <div className="mt-6 p-3 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-500/20">
                  <p className="text-[10px] text-gray-500 mb-1">Digital Partner</p>
                  <a 
                    href="https://mktgdime.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition"
                  >
                    MKTDM Media & Marketing
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8">
              {/* Company Legal Info */}
              <div className="text-center mb-6">
                <p className="text-sm font-semibold text-gray-300 mb-2">
                  MDNetwork - A Brand of MKTDM Media and Marketing OPC Pvt Ltd
                </p>
                <p className="text-xs text-gray-500">
                  Authorized Insurance Advisor | Solar Energy Consultant | Digital Business Solutions
                </p>
              </div>

              {/* Partner Logos */}
              <div className="flex flex-wrap justify-center items-center gap-6 mb-6 pb-6 border-b border-gray-700">
                <div className="text-center">
                  <p className="text-[10px] text-gray-500 mb-1">Insurance Partner</p>
                  <p className="text-sm font-semibold text-gray-300">Tata AIG</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-gray-500 mb-1">Life Insurance Partner</p>
                  <p className="text-sm font-semibold text-gray-300">Tata AIA</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-gray-500 mb-1">Digital Services</p>
                  <p className="text-sm font-semibold text-purple-400">Marketing Dime</p>
                </div>
              </div>

              {/* Copyright */}
              <div className="text-center text-sm text-gray-400">
                <p>
                  &copy; <FooterYear /> MKTDM Media and Marketing OPC Pvt Ltd. All rights reserved. | 
                  <Link href="/privacy" className="hover:text-white ml-2">Privacy Policy</Link> | 
                  <Link href="/terms" className="hover:text-white ml-2">Terms of Service</Link>
                </p>
                <p className="mt-2 text-xs text-gray-500">
                  Website operated by MDNetwork, a division of MKTDM Media and Marketing OPC Pvt Ltd
                </p>
              </div>
            </div>
          </div>
        </footer>

        <Toaster />
      </body>
    </html>
  );
}
