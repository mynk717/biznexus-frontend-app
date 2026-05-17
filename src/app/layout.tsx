import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import { Toaster } from "@/components/ui/toaster";
import FooterYear from '@/components/layout/FooterYear';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import Analytics, { GTMNoscript } from '@/components/Analytics';
import JsonLd from '@/components/SEO/JsonLd';


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mdn.mktgdime.com'),
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
    'Schengen visa insurance',
    'solar subsidy Raipur',
    'PM Surya Ghar Yojana Chhattisgarh'
  ],
  openGraph: {
    title: 'MDNetwork Raipur: TATA AIG Insurance & Solar Solutions',
    description: 'Get comprehensive insurance coverage and solar solutions in Raipur. TATA AIG travel, health, life insurance with instant policy issuance.',
    url: 'https://mdn.mktgdime.com/',
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
        <JsonLd />
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-8">
        <Analytics />
<GTMNoscript />
          {children}
        </main>

        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-16">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-1">
                <div className="mb-4">
                  <img 
                    src="/images/branding/logo-white.svg" 
                    alt="MDNetwork" 
                    className="h-10 w-auto"
                  />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Authorized TATA AIG Partner & Solar Energy Consultant. We simplify protection, energy, and business growth for Raipur and Chhattisgarh.
                </p>

                <div className="flex gap-4">
                  <a href="https://www.facebook.com/marketingdime360" className="text-gray-500 hover:text-white transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://x.com/MarketingDime" className="text-gray-500 hover:text-white transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/mktdm/" className="text-gray-500 hover:text-white transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
                  <li><Link href="/insurance" className="text-gray-400 hover:text-white transition">Insurance Plans</Link></li>
                  <li><Link href="/solar/residential" className="text-gray-400 hover:text-white transition">Solar Solutions</Link></li>
                  <li><Link href="/blog" className="text-gray-400 hover:text-white transition">Blog & Guides</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-white font-semibold mb-4">Our Services</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/insurance/travel/international" className="text-gray-400 hover:text-white transition">Travel Insurance</Link></li>
                  <li><Link href="/insurance/health" className="text-gray-400 hover:text-white transition">Health Insurance</Link></li>
                  <li><Link href="/solar/residential" className="text-gray-400 hover:text-white transition">Solar for Home</Link></li>
                  <li><Link href="/services/properties" className="text-gray-400 hover:text-white transition">Plots in Raipur</Link></li>
                  <li><Link href="/services/digital" className="text-gray-400 hover:text-white transition">Digital Growth</Link></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-white font-semibold mb-4">Connect</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2 text-gray-400">
                    <Phone className="h-4 w-4" />
                    <a href="tel:+917225991909" className="hover:text-white transition">+91 72259 91909</a>
                  </li>
                  <li className="flex items-center gap-2 text-gray-400">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:contact@mdn.mktgdime.com" className="hover:text-white transition">contact@mdn.mktgdime.com</a>
                  </li>
                  <li className="flex items-center gap-2 text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>Raipur, Chhattisgarh</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700/50 mt-12 pt-8">
              {/* Partner Logos - Simplified */}
              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 mb-8 opacity-60 grayscale hover:grayscale-0 transition-all">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Insurance Partner</span>
                  <span className="text-lg font-bold text-gray-300">TATA AIG</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Life Insurance</span>
                  <span className="text-lg font-bold text-gray-300">TATA AIA</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Digital Partner</span>
                  <span className="text-lg font-bold text-purple-400">Marketing Dime</span>
                </div>
              </div>

              {/* Copyright & Legal */}
              <div className="text-center space-y-4">
                <p className="text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
                  © <FooterYear /> MKTDM Media and Marketing OPC Pvt Ltd. All rights reserved. 
                  MDNetwork is a brand and division of MKTDM Media and Marketing, 
                  operating as an Authorized Insurance Advisor and Solar Consultant in Raipur.
                </p>
                <div className="flex justify-center gap-6 text-[10px] uppercase tracking-widest text-gray-500">
                  <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
                  <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <Toaster />
      </body>
    </html>
  );
}
