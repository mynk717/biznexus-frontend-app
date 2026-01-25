export interface Destination {
  id: string;
  name: string;
  slug: string;
  region: 'europe' | 'asia' | 'americas' | 'africa' | 'oceania' | 'middle-east';
  dailyRate: number;
  planType: 'schengen' | 'asia' | 'usa' | 'worldwide';
  visaRequired: boolean;
  insuranceMandatory: boolean;
  recommendedCoverage: number;
  networkHospitals: number;
  popularCities: string[];
  travelTips: string[];
  imageUrl?: string;
}

export const destinations: Destination[] = [
  // Schengen Countries
  {
    id: 'france',
    name: 'France',
    slug: 'france',
    region: 'europe',
    dailyRate: 40.82,
    planType: 'schengen',
    visaRequired: true,
    insuranceMandatory: true,
    recommendedCoverage: 100000,
    networkHospitals: 5000,
    popularCities: ['Paris', 'Lyon', 'Marseille', 'Nice'],
    travelTips: [
      'Schengen visa requires minimum €30,000 coverage',
      'Public healthcare is excellent',
      'Keep insurance documents for visa application'
    ],
    imageUrl: '/images/destinations/france.jpg'
  },
  {
    id: 'germany',
    name: 'Germany',
    slug: 'germany',
    region: 'europe',
    dailyRate: 40.82,
    planType: 'schengen',
    visaRequired: true,
    insuranceMandatory: true,
    recommendedCoverage: 100000,
    networkHospitals: 4500,
    popularCities: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
    travelTips: [
      'Travel insurance mandatory for Schengen visa',
      'Medical costs are high',
      'Carry prescription medicines with doctor\'s note'
    ]
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    slug: 'switzerland',
    region: 'europe',
    dailyRate: 40.82,
    planType: 'schengen',
    visaRequired: true,
    insuranceMandatory: true,
    recommendedCoverage: 500000,
    networkHospitals: 3000,
    popularCities: ['Zurich', 'Geneva', 'Lucerne', 'Interlaken'],
    travelTips: [
      'Extremely high medical costs',
      'Recommend higher coverage',
      'Adventure sports add-on recommended'
    ]
  },
  // USA
  {
    id: 'usa',
    name: 'United States',
    slug: 'usa',
    region: 'americas',
    dailyRate: 60.32,
    planType: 'usa',
    visaRequired: true,
    insuranceMandatory: true,
    recommendedCoverage: 500000,
    networkHospitals: 15000,
    popularCities: ['New York', 'Los Angeles', 'San Francisco', 'Miami'],
    travelTips: [
      'Medical costs are extremely high in USA',
      'Minimum $500,000 coverage recommended',
      'Emergency room visits can cost $1000+',
      'Carry insurance card at all times'
    ]
  },
  // Asia
  {
    id: 'thailand',
    name: 'Thailand',
    slug: 'thailand',
    region: 'asia',
    dailyRate: 45.5,
    planType: 'asia',
    visaRequired: false,
    insuranceMandatory: false,
    recommendedCoverage: 50000,
    networkHospitals: 2000,
    popularCities: ['Bangkok', 'Phuket', 'Chiang Mai', 'Pattaya'],
    travelTips: [
      'Visa on arrival for Indians',
      'Good medical facilities in major cities',
      'Adventure sports popular - get add-on'
    ]
  },
  {
    id: 'singapore',
    name: 'Singapore',
    slug: 'singapore',
    region: 'asia',
    dailyRate: 45.5,
    planType: 'asia',
    visaRequired: true,
    insuranceMandatory: false,
    recommendedCoverage: 100000,
    networkHospitals: 500,
    popularCities: ['Singapore City'],
    travelTips: [
      'High quality healthcare',
      'Medical costs moderate to high',
      'Travel insurance recommended'
    ]
  },
  {
    id: 'maldives',
    name: 'Maldives',
    slug: 'maldives',
    region: 'asia',
    dailyRate: 45.5,
    planType: 'asia',
    visaRequired: false,
    insuranceMandatory: false,
    recommendedCoverage: 50000,
    networkHospitals: 100,
    popularCities: ['Male', 'Hulhumale'],
    travelTips: [
      'Visa on arrival for Indians',
      'Limited medical facilities',
      'Medical evacuation coverage important'
    ]
  },
  // Middle East
  {
    id: 'dubai',
    name: 'Dubai (UAE)',
    slug: 'dubai',
    region: 'middle-east',
    dailyRate: 45.5,
    planType: 'asia',
    visaRequired: true,
    insuranceMandatory: true,
    recommendedCoverage: 100000,
    networkHospitals: 1000,
    popularCities: ['Dubai', 'Abu Dhabi', 'Sharjah'],
    travelTips: [
      'Travel insurance mandatory',
      'World-class medical facilities',
      'High medical costs'
    ]
  }
];

export const getDestinationBySlug = (slug: string): Destination | undefined => {
  return destinations.find(dest => dest.slug === slug);
};

export const getDestinationsByRegion = (region: string): Destination[] => {
  return destinations.filter(dest => dest.region === region);
};

export const getDestinationsByPlanType = (planType: string): Destination[] => {
  return destinations.filter(dest => dest.planType === planType);
};
