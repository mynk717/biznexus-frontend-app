
"use client";
// Force new deploy
import React, { useState, useEffect } from 'react';
import { Phone, AlertTriangle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/services/ServiceCard';
import type { Service } from '@/lib/types';
import Link from 'next/link';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase'; // Import the initialized db

const testimonials = [
  {
    quote:
      "BizNexus transformed our online presence. Their local SEO strategy put us on the map in Raipur, and our customer inquiries have doubled. A true partner in growth.",
    name: 'Rohan Sharma',
    role: 'Owner, Raipur Electronics',
  },
  {
    quote:
      "The solar panel installation was seamless and professional. We're already seeing huge savings on our electricity bills. Highly recommend their energy solutions.",
    name: 'Priya Singh',
    role: 'Homeowner, Shankar Nagar, Raipur',
  },
  {
    quote:
      "As a new startup, we needed a comprehensive digital marketing plan. BizNexus delivered with a strategy that was both effective and budget-friendly.",
    name: 'Amit Verma',
    role: 'Founder, CG Startups',
  },
];

export default function HomePage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        if (!db) {
           setError("Firestore is not initialized.");
           setLoading(false);
           return;
        }

        const servicesCollectionRef = collection(db, 'services');
        const querySnapshot = await getDocs(servicesCollectionRef);
        
        const fetchedServices = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title || 'Untitled Service',
            shortDescription: data.shortDescription || 'No description provided.',
            fullDetails: data.fullDetails || 'No detailed information available.',
            iconUrl: (data.iconUrl && typeof data.iconUrl === 'string' && data.iconUrl !== '')
           ? data.iconUrl
           : 'https://placehold.co/80x80/FBBF24/FFFFFF?text=Icon',
            price: data.price ? (typeof data.price === 'number' ? data.price : String(data.price)) : 'Contact for Price',
            keyFeatures: data.keyFeatures || [],
            slug: data.slug || doc.id,
          } as Service;
        });

        setServices(fetchedServices);
      } catch (err) {
        console.error("Error fetching services from Firestore:", err);
        setError("Failed to load services. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []); // Empty dependency array ensures this runs once on mount

  const openModal = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    if (service) {
      setSelectedService(service);
    }
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="flex flex-col gap-12 md:gap-20 py-8">
      {/* Hero Section */}
      <section className="text-center py-10 md:py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
          BizNexus: Your Local Partner in Raipur for Business Growth, Travel, Insurance & More
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          From expert digital marketing and custom tour packages to reliable insurance and solar solutions, BizNexus is your one-stop platform for success in Chhattisgarh.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/services">Explore Services</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="tel:+917225991909">Contact Us</a>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Explore Our Services</h2>
          <p className="mt-2 text-muted-foreground">
            A wide range of solutions tailored to meet your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <div className="col-span-full flex justify-center items-center p-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="ml-4 text-muted-foreground">Loading Services...</p>
            </div>
          ) : error ? (
            <div className="col-span-full flex justify-center items-center p-8 bg-destructive/10 rounded-lg">
                <AlertTriangle className="h-8 w-8 text-destructive" />
                <p className="ml-4 text-destructive">{error}</p>
            </div>
          ) : services.length === 0 ? (
             <p className="text-center text-muted-foreground col-span-full">No services are currently available.</p>
          ) : (
            services.map((service) => (
              <ServiceCard key={service.id} service={service} onViewDetails={() => openModal(service.id)} />
            ))
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted/50 rounded-lg py-12 px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">What Our Raipur Clients Say</h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
            We are proud to partner with businesses and individuals across Chhattisgarh.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <p className="italic text-card-foreground">"{testimonial.quote}"</p>
              <p className="mt-4 font-semibold">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-10 md:py-16 rounded-lg bg-primary/10">
        <h2 className="text-3xl font-bold tracking-tight">Ready to Grow Your Business?</h2>
        <p className="mt-3 max-w-xl mx-auto text-muted-foreground">
          Let's discuss how our tailored services can help you achieve your goals in Raipur and beyond. Get in touch for a free, no-obligation consultation.
        </p>
        <div className="mt-6">
          <Button asChild size="lg">
            <a href="tel:+917225991909">
              <Phone className="mr-2 h-5 w-5" />
              Call +91 72259 91909
            </a>
          </Button>
        </div>
      </section>

      {/* Modal for Detailed Service View */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60" onClick={closeModal}>
          <div className="bg-card rounded-lg shadow-2xl w-11/12 md:max-w-2xl mx-auto z-10" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{selectedService.title}</h3>
                <Button variant="ghost" size="icon" onClick={closeModal} className="h-8 w-8">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </Button>
              </div>
              <div className="prose dark:prose-invert max-w-none text-muted-foreground overflow-y-auto max-h-[60vh] pr-4">
                <p className="text-lg font-semibold mb-4 text-foreground">{selectedService.shortDescription}</p>
                
                {selectedService.fullDetails && (
                  <div dangerouslySetInnerHTML={{ __html: selectedService.fullDetails }} />
                )}
                
                {selectedService.keyFeatures && selectedService.keyFeatures.length > 0 && (
                  <div className="mt-6 border-t pt-4">
                    <h4 className="text-xl font-bold mb-3 text-foreground">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedService.keyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-6 text-right">
                    <span className="text-xl font-bold text-primary">
                        {typeof selectedService.price === 'number' ? `₹${selectedService.price.toLocaleString('en-IN')}` : selectedService.price}
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
