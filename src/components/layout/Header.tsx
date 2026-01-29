'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown, Shield, Plane, Heart, CarFront, ShieldCheck, TrendingUp, ArrowBigRight as ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 min-w-[180px]">
            <img 
              src="/images/branding/logo.svg" 
              alt="MDNetwork" 
              className="h-12 w-auto max-w-none"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Insurance Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Insurance</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li className="row-span-4">
                        <NavigationMenuLink asChild>
                          <Link
                            className="group relative flex h-full w-full select-none flex-col justify-end rounded-md overflow-hidden p-6 no-underline outline-none focus:shadow-md hover:shadow-lg transition-all"
                            href="/insurance"
                          >
                            {/* Animated gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/15 to-purple-500/20 group-hover:from-blue-500/30 group-hover:via-indigo-500/25 group-hover:to-purple-500/30 transition-all" />

                            {/* Animated circles */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-pulse" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-400/10 rounded-full blur-xl animate-pulse delay-300" />

                            {/* Icon */}
                            <div className="absolute top-4 right-4 p-2 rounded-full bg-white/80 shadow-sm group-hover:scale-110 transition-transform">
                              <Shield className="h-6 w-6 text-blue-600" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                              <div className="mb-2 text-lg font-bold text-gray-900">
                                Insurance Solutions
                              </div>
                              <p className="text-sm leading-tight text-gray-700 font-medium">
                                Tata AIG (travel, health, vehicle) & Tata AIA (life)
                              </p>
                              <div className="mt-3 inline-flex items-center text-xs text-blue-600 font-semibold">
                                View All Plans
                                <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/insurance/travel/international"
                            className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 focus:bg-blue-50 border border-transparent hover:border-blue-200"
                          >
                            <div className="text-sm font-semibold leading-none flex items-center gap-2">
                              <Plane className="h-4 w-4 text-blue-600 group-hover:translate-x-0.5 transition-transform" />
                              Travel Insurance
                            </div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                              International & domestic travel coverage
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/insurance/health"
                            className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 focus:bg-green-50 border border-transparent hover:border-green-200"
                          >
                            <div className="text-sm font-semibold leading-none flex items-center gap-2">
                              <Heart className="h-4 w-4 text-green-600 group-hover:scale-110 transition-transform" />
                              Health Insurance
                            </div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                              Medical coverage for you and your family
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/insurance/life"
                            className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-purple-50 focus:bg-purple-50 border border-transparent hover:border-purple-200"
                          >
                            <div className="text-sm font-semibold leading-none flex items-center gap-2">
                              <Shield className="h-4 w-4 text-purple-600 group-hover:rotate-6 transition-transform" />
                              Life Insurance
                            </div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                              Secure your family's future (Tata AIA)
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/insurance/vehicle"
                            className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-50 focus:bg-orange-50 border border-transparent hover:border-orange-200"
                          >
                            <div className="text-sm font-semibold leading-none flex items-center gap-2">
                              <CarFront className="h-4 w-4 text-orange-600 group-hover:translate-x-1 transition-transform" />
                              Vehicle Insurance
                            </div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                              Car and two-wheeler insurance plans
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/insurance/travel/compare"
                            className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-indigo-50 focus:bg-indigo-50 border border-transparent hover:border-indigo-200"
                          >
                            <div className="text-sm font-semibold leading-none flex items-center gap-2">
                              <TrendingUp className="h-4 w-4 text-indigo-600 group-hover:scale-110 transition-transform" />
                              Compare Plans
                            </div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                              Compare all insurance plans side-by-side
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Solar Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Solar Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/solar/residential"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Residential Solar</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Solar panels for homes with government subsidies
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/solar/commercial"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Commercial Solar</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Solar solutions for businesses and industries
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/solar/calculator"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Solar Calculator</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Calculate savings and ROI for solar installation
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Digital & Apps Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Digital & Apps</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/digital"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">All Digital Services</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Custom websites, SaaS apps, automation tools
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="https://mktgdime.com/"
                            target="_blank"
                            rel="noopener"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Web Development</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Next.js websites and responsive designs
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="https://mktgdime.com/"
                            target="_blank"
                            rel="noopener"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Automation Tools</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              API integrations and business automation
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Media & Marketing Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Media & Marketing</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/services/media"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">All Media Services</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Social media, ads, branding and creatives
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="https://mktgdime.com/"
                            target="_blank"
                            rel="noopener"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Social Media</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Instagram, Facebook, YouTube management
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="https://mktgdime.com/"
                            target="_blank"
                            rel="noopener"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Paid Ads</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Google Ads and Facebook advertising
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link 
              href="/services/used-cars" 
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Used Cars
            </Link>

            <Link 
              href="/blog" 
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Blog
            </Link>

            <Link 
              href="/about" 
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </Link>

            <Link 
              href="/contact" 
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button asChild variant="outline" size="sm">
              <Link href="/contact">Get Quote</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/insurance/travel/international">
                Buy Insurance
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col gap-4">
              {/* Insurance Mobile Menu */}
              <div className="space-y-2">
                <div className="font-semibold text-sm text-gray-900 px-2">Insurance</div>
                <Link
                  href="/insurance"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  All Insurance Plans
                </Link>
                <Link
                  href="/insurance/travel/international"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Travel Insurance
                </Link>
                <Link
                  href="/insurance/health"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Health Insurance
                </Link>
                <Link
                  href="/insurance/life"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Life Insurance
                </Link>
                <Link
                  href="/insurance/vehicle"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Vehicle Insurance
                </Link>
                <Link
                  href="/insurance/travel/compare"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Compare Plans
                </Link>
              </div>

              {/* Solar Mobile Menu */}
              <div className="space-y-2 border-t pt-4">
                <div className="font-semibold text-sm text-gray-900 px-2">Solar Solutions</div>
                <Link
                  href="/solar/residential"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Residential Solar
                </Link>
                <Link
                  href="/solar/commercial"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Commercial Solar
                </Link>
                <Link
                  href="/solar/calculator"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solar Calculator
                </Link>
              </div>

              {/* Digital Mobile Menu */}
              <div className="space-y-2 border-t pt-4">
                <div className="font-semibold text-sm text-gray-900 px-2">Digital & Apps</div>
                <Link
                  href="/services/digital"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  All Digital Services
                </Link>
                <Link
                  href="https://mktgdime.com/"
                  target="_blank"
                  rel="noopener"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Web Development
                </Link>
                <Link
                  href="https://mktgdime.com/"
                  target="_blank"
                  rel="noopener"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Automation Tools
                </Link>
              </div>

              {/* Media Mobile Menu */}
              <div className="space-y-2 border-t pt-4">
                <div className="font-semibold text-sm text-gray-900 px-2">Media & Marketing</div>
                <Link
                  href="/services/media"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  All Media Services
                </Link>
                <Link
                  href="https://mktgdime.com/"
                  target="_blank"
                  rel="noopener"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Social Media
                </Link>
                <Link
                  href="https://mktgdime.com/"
                  target="_blank"
                  rel="noopener"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Paid Ads
                </Link>
              </div>

              {/* Other Links */}
              <div className="border-t pt-4 space-y-2">
                <Link
                  href="/services/used-cars"
                  className="block px-2 py-2 text-sm font-medium text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Used Cars
                </Link>
                <Link
                  href="/blog"
                  className="block px-2 py-2 text-sm font-medium text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/about"
                  className="block px-2 py-2 text-sm font-medium text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block px-2 py-2 text-sm font-medium text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>

              {/* Mobile CTA */}
              <div className="border-t pt-4 space-y-2">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Get Quote
                  </Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/insurance/travel/international" onClick={() => setMobileMenuOpen(false)}>
                    Buy Insurance
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}