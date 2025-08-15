import { DefaultSeoProps } from 'next-seo';

export const defaultSEOConfig: DefaultSeoProps = {
  titleTemplate: '%s | Your Business Name',
  defaultTitle: 'Your Business Name - Local Service Provider',
  description: 'Professional local services in [Your City]. Trusted by the community for quality work and reliable service. Call us today!',
  canonical: 'https://yourdomain.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Your Business Name',
    title: 'Your Business Name - Local Service Provider',
    description: 'Professional local services in [Your City]. Trusted by the community for quality work and reliable service.',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Business Name - Local Service Provider',
      },
    ],
  },
  twitter: {
    handle: '@yourbusiness',
    site: '@yourbusiness',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#000000',
    },
    {
      name: 'author',
      content: 'Your Business Name',
    },
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Your Business Name',
  description: 'Professional local services in [Your City]. Trusted by the community for quality work and reliable service.',
  url: 'https://yourdomain.com',
  telephone: '+1-555-123-4567',
  email: 'info@yourdomain.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Main Street',
    addressLocality: 'Your City',
    addressRegion: 'Your State',
    postalCode: '12345',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.7128,
    longitude: -74.0060,
  },
  openingHours: 'Mo-Fr 08:00-18:00',
  priceRange: '$$',
  sameAs: [
    'https://www.facebook.com/yourbusiness',
    'https://www.linkedin.com/company/yourbusiness',
    'https://www.instagram.com/yourbusiness',
  ],
  areaServed: {
    '@type': 'City',
    name: 'Your City',
  },
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 40.7128,
      longitude: -74.0060,
    },
    geoRadius: '50000',
  },
};
