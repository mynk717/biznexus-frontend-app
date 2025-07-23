
import type { Service } from './types';

// This mock data will be used as a fallback if services cannot be fetched from Firestore.
// Ensure the slugs match those defined in src/components/services/ServiceIcon.tsx for correct icon display.
export const mockServices: Omit<Service, 'title'>[] = [
  {
    id: 'mock-dm-01',
    title: 'Digital Marketing & Print Media',
    shortDescription: 'Reach more customers in Raipur online and offline with powerful marketing strategies.',
    slug: 'digital-marketing',
    sections: [
      { title: 'SEO Strategy', content: 'Enhance your online visibility with our expert SEO services.', type: 'text' },
      { title: 'Social Media Outreach', content: 'Engage your audience through our targeted social media campaigns.', type: 'text' },
      { title: 'Print Design', content: 'Eye-catching designs for your print needs, from brochures to banners.', type: 'text' },
    ],
    offerings: [
      { title: "Search Engine Optimization (SEO)", description: "Improve organic search rankings and website visibility." },
      { title: "Pay-Per-Click (PPC) Advertising", description: "Targeted ad campaigns for immediate results." },
      { title: "Social Media Marketing", description: "Engage audiences and build brand presence across platforms." },
      { title: "Content Marketing", description: "Create valuable content to attract and retain customers." },
      { title: "Web Design & Development", description: "Build responsive and user-friendly websites." },
      { title: "Graphic Design & Print Solutions", description: "High-quality designs for branding, brochures, and marketing materials." }
    ],
    brands: ['Google Ads', 'Facebook Ads', 'Canva'],
    categories: ['Online Presence', 'Offline Marketing'],
    examplePackages: [
        { name: 'Basic Online Starter', type: 'Digital Only', duration: '3 Months'},
        { name: 'Full Campaign', type: 'Digital & Print', duration: '6 Months'},
    ]
  },
  {
    id: 'mock-tours-07',
    title: 'Tour Packages',
    shortDescription: 'Curated domestic and international travel experiences to create lasting memories.',
    slug: 'tour-packages',
    sections: [
      { title: 'International Tours', content: 'Explore the world with our all-inclusive international holiday packages.', type: 'text' },
      { title: 'Domestic Getaways', content: 'Discover the beauty of India with our customized domestic tour packages.', type: 'text' },
      { title: 'Pilgrimage Tours', content: 'Spiritual journeys to sacred destinations with comfort and convenience.', type: 'text' },
    ],
  },
  {
    id: 'mock-solar-03',
    title: 'Solar Panel Installation',
    shortDescription: 'Sustainable and cost-effective energy solutions for homes & businesses in Chhattisgarh.',
    slug: 'solar-panel-installation',
    sections: [
        { title: 'Residential Solar', content: 'Solar panel systems designed for homes to reduce electricity bills.', type: 'text'},
        { title: 'Commercial Solar', content: 'Large-scale solar installations for businesses to cut operational costs.', type: 'text'},
    ],
    brands: ['Waree Energies', 'Luminous', 'Havells Solar'],
    examplePackages: [
        { name: 'Home Basic (3kW)', type: 'Residential On-Grid', duration: 'Installation + Monitoring'},
        { name: 'Business Premium (10kW)', type: 'Commercial On-Grid', duration: 'Installation + AMC'},
    ]
  },
  {
    id: 'mock-insurance-04',
    title: 'Tata AIG Health Insurance',
    shortDescription: 'Secure your family’s future with comprehensive and reliable health insurance plans.',
    slug: 'tata-aig-health-insurance',
    sections: [
      { title: 'Family Floater Plans', content: 'One policy for the entire family, offering convenience and affordability.', type: 'text' },
      { title: 'Individual Coverage', content: 'Tailored health plans to meet the specific needs of an individual.', type: 'text' },
    ],
  },
  {
    id: 'mock-properties-05',
    title: 'Properties for Sale',
    shortDescription: 'Find your dream home or next investment property in and around Raipur.',
    slug: 'properties-for-sale',
    sections: [
      { title: 'Residential Sales', content: 'Explore a wide range of apartments, houses, and plots for sale.', type: 'text' },
      { title: 'Commercial Properties', content: 'Discover office spaces, shops, and commercial land for your business.', type: 'text' },
    ],
  },
  {
    id: 'mock-cars-06',
    title: 'Used Cars for Sale',
    shortDescription: 'Quality, certified pre-owned vehicles with transparent pricing and history.',
    slug: 'used-cars-for-sale',
    sections: [
      { title: 'Certified Pre-Owned', content: 'Thoroughly inspected vehicles with warranty for peace of mind.', type: 'text' },
      { title: 'Easy Financing', content: 'Assistance with financing options to make your purchase smoother.', type: 'text' },
    ],
  },
].map(s => ({ ...s, iconUrl: ''}));
