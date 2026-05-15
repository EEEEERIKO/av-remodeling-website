export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://av-remodeling.vercel.app";
export const SITE_NAME = "AV Remodeling";
export const BUSINESS_PHONE = "+1-678-886-4393";
export const BUSINESS_EMAIL = "avremodeling37@gmail.com";
export const BUSINESS_ADDRESS = {
  streetAddress: "482 Architectural Way, Suite 100",
  addressLocality: "Atlanta",
  addressRegion: "GA",
  postalCode: "30301",
  addressCountry: "US",
};

export const SERVICE_AREAS = [
  "Atlanta",
  "Sandy Springs",
  "Marietta",
  "Roswell",
  "Alpharetta",
  "Decatur",
  "Brookhaven",
  "Dunwoody",
];

export const REMODELING_SERVICES = [
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Flooring Installation",
  "Interior and Exterior Painting",
  "Drywall Repair and Installation",
  "Concrete Work",
  "Retaining Walls",
  "Drainage Systems",
  "Exterior Home Maintenance",
];

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: BUSINESS_PHONE,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English", "Spanish"],
    },
  ],
  sameAs: [
    "https://www.instagram.com/avremodelingatl/",
    "https://www.youtube.com/@avremodelingatl8105/featured",
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: SITE_NAME,
  image: `${SITE_URL}/images/portfolio/kitchens/01.jpg`,
  url: SITE_URL,
  telephone: BUSINESS_PHONE,
  email: BUSINESS_EMAIL,
  address: {
    "@type": "PostalAddress",
    ...BUSINESS_ADDRESS,
  },
  areaServed: SERVICE_AREAS.map((city) => ({
    "@type": "City",
    name: city,
  })),
  serviceType: REMODELING_SERVICES,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/gallery#all`,
    "query-input": "required name=service",
  },
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Residential Remodeling",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: SITE_NAME,
  },
  areaServed: SERVICE_AREAS,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Remodeling Services in Atlanta",
    itemListElement: REMODELING_SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
      },
    })),
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does a kitchen remodel take in Atlanta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most kitchen remodeling projects take 6 to 12 weeks depending on design scope, material lead times, and permitting requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide bathroom and flooring remodeling services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AV Remodeling handles bathrooms, flooring, painting, drywall, concrete, drainage improvements, and exterior maintenance services.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas around Atlanta do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve Atlanta and surrounding cities including Sandy Springs, Marietta, Roswell, Alpharetta, Decatur, Brookhaven, and Dunwoody.",
      },
    },
  ],
};

export const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "AV Remodeling Residential Services",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "2",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sarah L." },
      reviewBody:
        "AV Remodeling transformed our kitchen and improved our daily routine with exceptional craftsmanship.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Marcus Thornton" },
      reviewBody:
        "Professional team, clear communication, and high-end finishing details from start to finish.",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
  ],
};

export const breadcrumbSchema = (
  items: Array<{ name: string; path: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});