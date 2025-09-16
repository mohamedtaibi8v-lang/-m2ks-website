// Données SEO optimisées pour chaque page du site M2KS

export const seoData = {
  home: {
    title: "M2KS - Spécialiste en Réfrigération, Énergies & Agencement",
    description: "M2KS — Spécialiste en réfrigération, énergies & agencement. Interventions 7j/7. Hauts-de-France & Benelux.",
    keywords: "réfrigération, pompe à chaleur, agencement, dépannage, Lille, Hauts-de-France, Benelux",
    canonical: "https://m2ks.com/"
  },
  refrigeration: {
    title: "Réfrigération Professionnelle - M2KS",
    description: "Dépannage 7j/7, maintenance et installations froid commercial et industriel en Hauts-de-France et Benelux.",
    keywords: "réfrigération commerciale, froid industriel, dépannage urgence, maintenance",
    canonical: "https://m2ks.com/refrigeration"
  },
  energie: {
    title: "Énergie & Confort - Pompes à Chaleur - M2KS",
    description: "Pompes à chaleur, ventilation, audit énergétique. Solutions hybrides intelligentes. Zones Hauts-de-France et Benelux.",
    keywords: "pompe à chaleur, ventilation, audit énergétique, économies énergie",
    canonical: "https://m2ks.com/energie"
  },
  concept: {
    title: "Concept & Agencement - Cuisines sur Mesure - M2KS",
    description: "Cuisines, dressings, cloisons et rénovations sur mesure. Hauts-de-France & Benelux.",
    keywords: "cuisine sur mesure, dressing, agencement, rénovation, cloisons",
    canonical: "https://m2ks.com/concept"
  },
  histoire: {
    title: "Notre Histoire - Entreprise Familiale M2KS",
    description: "Une entreprise familiale, sans sous-traitance. ADN M2KS : exigence, fiabilité et proximité.",
    keywords: "entreprise familiale, histoire M2KS, sans sous-traitance, fiabilité",
    canonical: "https://m2ks.com/histoire"
  },
  realisations: {
    title: "Nos Réalisations - Projets M2KS",
    description: "Galerie de projets M2KS — réfrigération, énergie & agencement. Hauts-de-France & Benelux.",
    keywords: "réalisations, projets, galerie, références clients",
    canonical: "https://m2ks.com/realisations"
  },
  contact: {
    title: "Contact M2KS - Devis & Urgences",
    description: "Contactez M2KS pour devis, urgences ou projets. Tél. 03 74 47 48 29.",
    keywords: "contact, devis, urgence, téléphone, Lille",
    canonical: "https://m2ks.com/contact"
  },
  faq: {
    title: "FAQ - Questions Fréquentes - M2KS",
    description: "Réponses aux questions fréquentes sur nos services, zones d'intervention et certifications M2KS.",
    keywords: "FAQ, questions fréquentes, délais, zones intervention, certifications",
    canonical: "https://m2ks.com/faq"
  },
  mentions: {
    title: "Mentions Légales - M2KS",
    description: "Mentions légales du site M2KS - Informations légales et coordonnées de l'entreprise.",
    keywords: "mentions légales, informations légales, SIRET",
    canonical: "https://m2ks.com/mentions-legales"
  },
  rgpd: {
    title: "Politique de Confidentialité - M2KS",
    description: "Politique de confidentialité et protection des données personnelles - M2KS conforme RGPD.",
    keywords: "RGPD, confidentialité, données personnelles, protection",
    canonical: "https://m2ks.com/politique-rgpd"
  }
}

// Mots-clés locaux pour le SEO géographique
export const localKeywords = {
  lille: [
    "réfrigération Lille", "climatisation Lille", "pompe à chaleur Lille",
    "dépannage froid Lille", "maintenance CVC Lille", "agencement Lille"
  ],
  paris: [
    "réfrigération Paris", "climatisation Paris", "pompe à chaleur Paris", 
    "dépannage froid Paris", "maintenance CVC Paris", "agencement Paris"
  ],
  nord: [
    "réfrigération Nord", "climatisation Hauts-de-France", "pompe à chaleur Nord",
    "dépannage froid Nord", "maintenance CVC Nord"
  ],
  idf: [
    "réfrigération Île-de-France", "climatisation IDF", "pompe à chaleur IDF",
    "dépannage froid Île-de-France", "maintenance CVC IDF"
  ],
  belgique: [
    "réfrigération Belgique", "climatisation Belgique", "pompe à chaleur Belgique",
    "dépannage froid Belgique", "maintenance CVC Belgique"
  ]
}

// Données structurées pour les avis clients
export const reviewsStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "M2KS",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Marie Dubois"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "M2KS a transformé notre boulangerie. Installation rapide, équipe professionnelle, et surtout un suivi irréprochable. Nos produits n'ont jamais été aussi bien conservés !",
      "datePublished": "2024-08-15"
    },
    {
      "@type": "Review", 
      "author": {
        "@type": "Person",
        "name": "Jean-Pierre Martin"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Intervention d'urgence un dimanche pour notre climatisation. Équipe réactive, diagnostic précis, réparation immédiate. C'est ça, le service M2KS !",
      "datePublished": "2024-07-22"
    }
  ]
}

