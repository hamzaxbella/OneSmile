import { useEffect, useContext } from 'react';
import { Context } from '../App';

export const SEO = ({ 
  title, 
  description, 
  keywords,
  canonicalUrl,
  ogImage,
  structuredData,
  noIndex = false 
}) => {
  const [selectedLanguage] = useContext(Context);
  
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }
    
    // Update meta description
    updateMetaTag('name', 'description', description);
    
    // Update keywords
    if (keywords) {
      updateMetaTag('name', 'keywords', keywords);
    }
    
    // Update canonical URL
    if (canonicalUrl) {
      updateLinkTag('canonical', canonicalUrl);
    }
    
    // Update Open Graph tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:url', canonicalUrl || window.location.href);
    
    if (ogImage) {
      updateMetaTag('property', 'og:image', ogImage);
    }
    
    // Update language
    document.documentElement.lang = selectedLanguage === 'FR' ? 'fr' : 'ar';
    updateMetaTag('property', 'og:locale', selectedLanguage === 'FR' ? 'fr_FR' : 'ar_MA');
    
    // Update robots
    updateMetaTag('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');
    
    // Add structured data
    if (structuredData) {
      addStructuredData(structuredData);
    }
    
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData, noIndex, selectedLanguage]);
  
  const updateMetaTag = (attribute, attributeValue, content) => {
    if (!content) return;
    
    let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
    if (element) {
      element.setAttribute('content', content);
    } else {
      element = document.createElement('meta');
      element.setAttribute(attribute, attributeValue);
      element.setAttribute('content', content);
      document.head.appendChild(element);
    }
  };
  
  const updateLinkTag = (rel, href) => {
    if (!href) return;
    
    let element = document.querySelector(`link[rel="${rel}"]`);
    if (element) {
      element.setAttribute('href', href);
    } else {
      element = document.createElement('link');
      element.setAttribute('rel', rel);
      element.setAttribute('href', href);
      document.head.appendChild(element);
    }
  };
  
  const addStructuredData = (data) => {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  };
  
  return null;
};

// Structured Data Templates
export const createLocalBusinessSchema = (language = 'FR') => ({
  "@context": "https://schema.org",
  "@type": "DentalClinic",
  "name": "OneSmile",
  "description": language === 'FR' 
    ? "Institut de blanchiment dentaire spécialisé dans l'éclat et la beauté de votre sourire à Agadir"
    : "معهد تبييض الأسنان المتخصص في إشراق وجمال ابتسامتك في أكادير",
  "url": "https://onesmile.ma",
  "logo": "https://onesmile.ma/title_logo.png",
  "image": "https://onesmile.ma/src/assets/images/hero.webp",
  "telephone": "+212 XX XX XX XX", // Update with actual phone
  "email": "contact@onesmile.ma", // Update with actual email
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Votre adresse", // Update with actual address
    "addressLocality": "Agadir",
    "addressRegion": "Souss-Massa",
    "postalCode": "80000", // Update with actual postal code
    "addressCountry": "MA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "30.4278", // Agadir coordinates
    "longitude": "-9.5981"
  },
  "openingHours": [
    "Mo-Fr 09:00-18:00",
    "Sa 09:00-14:00"
  ],
  "services": [
    "Teeth Whitening",
    "Dental Bonding", 
    "Teeth Wash",
    "Clear Aligners",
    "Cosmetic Dentistry",
    "Dental Aesthetics"
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Agadir"
    },
    {
      "@type": "Country", 
      "name": "Morocco"
    }
  ],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150"
  },
  "speciality": [
    "Teeth Whitening",
    "Cosmetic Dentistry",
    "Dental Aesthetics"
  ]
});

export const createWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "OneSmile",
  "url": "https://onesmile.ma",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://onesmile.ma/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const createServiceSchema = (service, language = 'FR') => ({
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": language === 'FR' ? service.FR.Title : service.AR.Title,
  "description": language === 'FR' ? service.FR.Description : service.AR.Description,
  "provider": {
    "@type": "Dentist",
    "name": "OneSmile",
    "url": "https://onesmile.ma"
  },
  "medicalSpecialty": "Dentistry"
});

export const createBreadcrumbSchema = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});
