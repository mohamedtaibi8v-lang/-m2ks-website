import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEOHead = ({ 
  title = "M2KS - Spécialiste en Réfrigération, Énergies & Agencement",
  description = "M2KS : Entreprise familiale spécialisée en réfrigération, énergie & confort, agencement technique. Interventions sans sous-traitance dans le Nord, Île-de-France, Benelux. Votre tranquillité est notre métier.",
  keywords = "réfrigération, climatisation, pompe à chaleur, agencement, M2KS, Lille, Paris, dépannage, maintenance, installation",
  canonical,
  ogImage = "/og-image.jpg",
  structuredData
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "M2KS",
    "description": "Spécialiste en Réfrigération, Énergies & Agencement",
    "url": "https://www.m2ks.fr",
    "telephone": "03 74 47 48 29",
    "email": "contact@m2ks.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "171 Rue Bruant des Roseaux",
      "addressLocality": "Lille",
      "postalCode": "59000",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.6292",
      "longitude": "3.0573"
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Hauts-de-France"
      },
      {
        "@type": "State", 
        "name": "Île-de-France"
      },
      {
        "@type": "Country",
        "name": "Belgique"
      }
    ],
    "serviceType": [
      "Réfrigération commerciale et industrielle",
      "Installation pompe à chaleur",
      "Climatisation",
      "Maintenance CVC",
      "Agencement technique",
      "Dépannage urgence 7j/7"
    ],
    "priceRange": "€€",
    "openingHours": [
      "Mo-Fr 08:00-18:00"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services M2KS",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Réfrigération",
            "description": "Installation, maintenance et dépannage de systèmes de réfrigération commerciale et industrielle"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Énergie & Confort",
            "description": "Pompes à chaleur, climatisation, ventilation et solutions énergétiques"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Concept & Agencement",
            "description": "Agencement technique sur-mesure et coordination multi-métiers"
          }
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "Mohamed Taibi"
    },
    "slogan": "Votre tranquillité est notre métier",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  }

  return (
    <Helmet>
      {/* Titre et méta descriptions */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical || "https://www.m2ks.fr"} />
      <meta property="og:site_name" content="M2KS" />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Données géographiques */}
      <meta name="geo.region" content="FR-59" />
      <meta name="geo.placename" content="Lille" />
      <meta name="geo.position" content="50.6292;3.0573" />
      <meta name="ICBM" content="50.6292, 3.0573" />
      
      {/* Informations business */}
      <meta name="business:contact_data:street_address" content="171 Rue Bruant des Roseaux" />
      <meta name="business:contact_data:locality" content="Lille" />
      <meta name="business:contact_data:postal_code" content="59000" />
      <meta name="business:contact_data:country_name" content="France" />
      <meta name="business:contact_data:phone_number" content="03 74 47 48 29" />
      <meta name="business:contact_data:email" content="contact@m2ks.fr" />
      
      {/* Données structurées JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      
      {/* Optimisations techniques */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Préchargement des ressources critiques */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicon et icônes */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Optimisation mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Performance et sécurité */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
    </Helmet>
  )
}

export default SEOHead

