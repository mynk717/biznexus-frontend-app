import React from 'react';

export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MDNetwork',
    alternateName: 'MKTDM Media and Marketing',
    url: 'https://mdn.mktgdime.com',
    logo: 'https://mdn.mktgdime.com/images/branding/logo.svg',
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
          name: 'TATA AIG Insurance',
          description: 'Comprehensive travel, health, life and vehicle insurance in Raipur.',
          provider: {
            '@type': 'Organization',
            name: 'TATA AIG',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Service',
          name: 'Solar Energy Solutions',
          description: 'Government subsidized solar panel installation in Chhattisgarh. Up to ₹1,08,000 subsidy.',
          offers: {
            '@type': 'Offer',
            description: 'Central + State Subsidy up to ₹1.08 Lakh',
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
