// Business Configuration - Grupo Grande Inc.
export const businessConfig = {
  // Basic Business Information
  name: 'Grupo Grande Inc.',
  description: 'Leading fiber optic network design and FTTX deployment specialists. 25+ years experience serving telecommunications providers across North America with complete fiber solutions from core to edge infrastructure.',
  phone: '+1-305-555-FIBER',
  email: 'info@grupogrande.com',
  
  // Address Information
  address: {
    street: '1200 Biscayne Boulevard',
    city: 'Miami',
    state: 'Florida',
    zip: '33132',
    country: 'US',
  },
  
  // Geographic Coordinates (Miami, FL)
  coordinates: {
    latitude: 25.7617,
    longitude: -80.1918,
  },
  
  // Service Areas
  serviceAreas: [
    'Miami',
    'Fort Lauderdale',
    'Orlando',
    'Tampa',
    'Jacksonville',
    'Atlanta',
    'Charlotte',
    'Nashville',
    'Dallas',
    'Houston',
  ],
  
  // Social Media
  social: {
    linkedin: 'https://www.linkedin.com/company/grupo-grande-inc',
    twitter: 'https://twitter.com/grupogrande',
    facebook: 'https://www.facebook.com/grupogrande',
  },
  
  // Business Hours
  hours: 'Mo-Fr 07:00-19:00, Sa 08:00-16:00',
  priceRange: '$$$',
  
  // Website Configuration
  website: {
    url: 'https://grupogrande.com',
    title: 'Grupo Grande Inc. - Fiber Optic Network Design & FTTX Deployment',
    keywords: 'fiber optic network design, FTTX deployment, telecom infrastructure consulting, fiber cable manufacturing, broadband expansion, enterprise fiber networks, municipal broadband, Miami telecommunications',
  },
};

// SEO Configuration
export const seoConfig = {
  // Default meta tags
  defaultTitle: `${businessConfig.name} - Local Service Provider`,
  defaultDescription: businessConfig.description,
  canonical: businessConfig.website.url,
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: businessConfig.website.url,
    siteName: businessConfig.name,
    title: businessConfig.website.title,
    description: businessConfig.description,
  },
  
  // Twitter
  twitter: {
    handle: '@yourbusiness',
    site: '@yourbusiness',
    cardType: 'summary_large_image',
  },
  
  // Additional meta tags
  additionalMetaTags: [
    {
      name: 'keywords',
      content: businessConfig.website.keywords,
    },
    {
      name: 'geo.region',
      content: businessConfig.address.state,
    },
    {
      name: 'geo.placename',
      content: businessConfig.address.city,
    },
    {
      name: 'geo.position',
      content: `${businessConfig.coordinates.latitude};${businessConfig.coordinates.longitude}`,
    },
    {
      name: 'ICBM',
      content: `${businessConfig.coordinates.latitude}, ${businessConfig.coordinates.longitude}`,
    },
  ],
};

// Schema.org Local Business Markup
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: businessConfig.name,
  description: businessConfig.description,
  url: businessConfig.website.url,
  telephone: businessConfig.phone,
  email: businessConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: businessConfig.address.street,
    addressLocality: businessConfig.address.city,
    addressRegion: businessConfig.address.state,
    postalCode: businessConfig.address.zip,
    addressCountry: businessConfig.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: businessConfig.coordinates.latitude,
    longitude: businessConfig.coordinates.longitude,
  },
  openingHours: businessConfig.hours,
  priceRange: businessConfig.priceRange,
  sameAs: [
    businessConfig.social.facebook,
    businessConfig.social.linkedin,
    businessConfig.social.instagram,
  ],
  areaServed: {
    '@type': 'City',
    name: businessConfig.address.city,
  },
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: businessConfig.coordinates.latitude,
      longitude: businessConfig.coordinates.longitude,
    },
    geoRadius: '50000',
  },
};
