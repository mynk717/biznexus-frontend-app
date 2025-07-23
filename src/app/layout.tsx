
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import { AuthProvider } from '@/hooks/useAuth';
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
  metadataBase: new URL('https://biznexus.mktgdime.com'),
  title: {
    default: 'BizNexus: Your Partner for Business & Personal Growth in Raipur',
    template: '%s | BizNexus',
  },
  description: 'BizNexus offers comprehensive services in digital marketing, travel, insurance, and more, tailored for success in Raipur and Chhattisgarh.',
  openGraph: {
    title: 'BizNexus Raipur: Your Partner for Business & Personal Growth',
    description: 'From expert digital marketing and custom tour packages to reliable insurance and solar solutions, BizNexus is your local partner in Raipur for growth and security.',
    url: 'https://biznexus.mktgdime.com/',
    siteName: 'BizNexus',
    images: [
      {
        url: '/images/blog/local-digital-marketing-raipur-growth.jpg',
        width: 1200,
        height: 630,
        alt: 'BizNexus Services Banner',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BizNexus Raipur: Your Partner for Business & Personal Growth',
    description: 'From expert digital marketing and custom tour packages to reliable insurance and solar solutions, BizNexus is your local partner in Raipur for growth and security.',
    images: ['/images/blog/local-digital-marketing-raipur-growth.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`} suppressHydrationWarning>
        <AuthProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="container mx-auto px-4">{children}</main>
            <footer className="border-t bg-background">
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-bold text-lg mb-2">BizNexus</h3>
                    <p className="text-muted-foreground text-sm">Your local partner in Raipur for business growth, travel, insurance, and more.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-sm">
                      <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                      <li><Link href="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
                      <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
                      <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Contact Us</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <a href="tel:+917225991909" className="hover:text-primary">+91 72259 91909</a>
                      </li>
                      <li className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <a href="mailto:contact@biznexus.mktgdime.com" className="hover:text-primary">contact@biznexus.mktgdime.com</a>
                      </li>
                       <li className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 mt-1 text-primary" />
                        <span>Raipur, Chhattisgarh, India</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 border-t pt-6">
                  <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
                    &copy; <FooterYear /> BizNexus. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
