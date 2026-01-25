'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
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
      {/* Logo - Now with more space */}
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
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500/20 to-blue-500/10 p-6 no-underline outline-none focus:shadow-md"
                            href="/insurance/travel/international"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Travel Insurance
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Comprehensive coverage for international and domestic travel
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/insurance/health"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Health Insurance</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Medical coverage for you and your family
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/insurance/life"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Life Insurance</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Secure your family's future
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/insurance/vehicle"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Vehicle Insurance</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Car and two-wheeler insurance plans
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
              </NavigationMenuList>
            </NavigationMenu>

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

              {/* Other Links */}
              <div className="border-t pt-4 space-y-2">
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
