import React from 'react';

export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MDNetwork',
    alternateName: 'MKTDM Media and Marketing',
    description: 'MDNetwork is a specialized division of Marketing Dime, providing authorized TATA AIG Insurance advisory and Solar Energy consultancy in Raipur, Chhattisgarh.',
    url: 'https://mdn.mktgdime.com',
    logo: 'https://mdn.mktgdime.com/images/branding/logo.svg',
    parentOrganization: {
      '@type': 'Organization',
      name: 'MKTDM Media and Marketing OPC Pvt Ltd',
      url: 'https://mktgdime.com',
    },
    brand: {
      '@type': 'Brand',
      name: 'MDNetwork',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-72259-91909',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
    sameAs: [
      'https://www.facebook.com/marketingdime360',
      'https://x.com/MarketingDime',
      'https://www.linkedin.com/company/mktdm/',
      'https://www.instagram.com/marketingdime/',
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'MDNetwork Raipur',
    image: 'https://mdn.mktgdime.com/images/branding/logo.svg',
    '@id': 'https://mdn.mktgdime.com/#localbusiness',
    url: 'https://mdn.mktgdime.com',
    telephone: '+91-72259-91909',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Raipur',
      addressLocality: 'Raipur',
      addressRegion: 'Chhattisgarh',
      postalCode: '492001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.2514,
      longitude: 81.6296,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '19:00',
    },
  };

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Service',
          name: 'TATA AIG Insurance Agent Raipur',
          description: 'Official TATA AIG partner in Raipur providing Travel, Health, and Motor insurance with cashless hospital support.',
          provider: {
            '@type': 'Organization',
            name: 'TATA AIG',
          },
          areaServed: 'Raipur, Chhattisgarh',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Product',
          name: '3kW On-Grid Solar Rooftop System',
          description: 'Standard 3kW residential solar installation eligible for PM Surya Ghar and CG State subsidies.',
          brand: {
            '@type': 'Brand',
            name: 'PM Surya Ghar Muft Bijli Yojana',
          },
          offers: {
            '@type': 'Offer',
            price: '92000',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            description: 'Net cost after ₹1,08,000 government subsidy.',
            hasMerchantReturnPolicy: {
              '@type': 'MerchantReturnPolicy',
              applicableCountry: 'IN',
              returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnPeriod',
              merchantReturnDays: 30,
              returnMethod: 'https://schema.org/ReturnByMail',
              returnFees: 'https://schema.org/FreeReturn',
            },
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '154',
          },
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </>
  );
}
