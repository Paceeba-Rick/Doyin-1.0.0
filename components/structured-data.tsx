export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Doyin',
    url: 'https://doyin.site',
    logo: '/images/doyin.jpeg',
    description: 'Campus-based e-commerce marketplace connecting students to food, groceries, accessories, and stationery vendors',
    sameAs: [
      'https://www.facebook.com/doyinapp',
      'https://twitter.com/doyinapp',
      'https://www.instagram.com/doyinapp',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      url: 'https://wa.me/0594473819',
    },
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Doyin Campus Marketplace',
    description: 'E-commerce platform for campus-based shopping and delivery',
    image: '/images/doyin.jpeg',
    url: 'https://doyin.site',
    telephone: '+234-594-473-819',
    priceRange: '$-$$$',
    areaServed: 'Campus',
    serviceType: ['Delivery Service', 'Errand Service', 'Marketplace'],
  }

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Doyin',
    url: 'https://doyin.site',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://doyin.site/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  )
}
