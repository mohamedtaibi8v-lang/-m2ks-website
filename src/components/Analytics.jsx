import React, { useEffect } from 'react'

// Configuration des analytics
const ANALYTICS_CONFIG = {
  googleAnalytics: {
    measurementId: 'G-XXXXXXXXXX', // À remplacer par votre ID Google Analytics
    enabled: true
  },
  hotjar: {
    hjid: 'XXXXXXX', // À remplacer par votre ID Hotjar
    enabled: false
  },
  facebookPixel: {
    pixelId: 'XXXXXXXXXXXXXXXXX', // À remplacer par votre Pixel ID
    enabled: false
  }
}

const Analytics = () => {
  useEffect(() => {
    // Vérifier le consentement aux cookies
    const consent = localStorage.getItem('m2ks-cookie-consent')
    if (consent) {
      const preferences = JSON.parse(consent)
      
      // Charger Google Analytics si autorisé
      if (preferences.analytics && ANALYTICS_CONFIG.googleAnalytics.enabled) {
        loadGoogleAnalytics()
      }
      
      // Charger Hotjar si autorisé
      if (preferences.analytics && ANALYTICS_CONFIG.hotjar.enabled) {
        loadHotjar()
      }
      
      // Charger Facebook Pixel si autorisé
      if (preferences.marketing && ANALYTICS_CONFIG.facebookPixel.enabled) {
        loadFacebookPixel()
      }
    }
  }, [])

  const loadGoogleAnalytics = () => {
    // Charger le script Google Analytics
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.googleAnalytics.measurementId}`
    document.head.appendChild(script)

    // Initialiser gtag
    window.dataLayer = window.dataLayer || []
    function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag = gtag

    gtag('js', new Date())
    gtag('config', ANALYTICS_CONFIG.googleAnalytics.measurementId, {
      page_title: document.title,
      page_location: window.location.href
    })

    // Configuration du consentement
    gtag('consent', 'default', {
      'analytics_storage': 'granted',
      'ad_storage': 'denied'
    })

    console.log('Google Analytics chargé')
  }

  const loadHotjar = () => {
    // Charger Hotjar
    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}
      h._hjSettings={hjid:ANALYTICS_CONFIG.hotjar.hjid,hjsv:6}
      a=o.getElementsByTagName('head')[0]
      r=o.createElement('script');r.async=1
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv
      a.appendChild(r)
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')

    console.log('Hotjar chargé')
  }

  const loadFacebookPixel = () => {
    // Charger Facebook Pixel
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js')

    window.fbq('init', ANALYTICS_CONFIG.facebookPixel.pixelId)
    window.fbq('track', 'PageView')

    console.log('Facebook Pixel chargé')
  }

  return null // Ce composant ne rend rien visuellement
}

// Fonctions utilitaires pour le tracking
export const trackEvent = (eventName, parameters = {}) => {
  // Google Analytics
  if (window.gtag) {
    window.gtag('event', eventName, {
      event_category: parameters.category || 'engagement',
      event_label: parameters.label,
      value: parameters.value,
      ...parameters
    })
  }

  // Hotjar
  if (window.hj) {
    window.hj('event', eventName)
  }

  // Facebook Pixel
  if (window.fbq) {
    window.fbq('track', eventName, parameters)
  }

  console.log('Événement tracké:', eventName, parameters)
}

export const trackPageView = (pagePath, pageTitle) => {
  // Google Analytics
  if (window.gtag) {
    window.gtag('config', ANALYTICS_CONFIG.googleAnalytics.measurementId, {
      page_path: pagePath,
      page_title: pageTitle
    })
  }

  console.log('Page vue trackée:', pagePath, pageTitle)
}

export const trackConversion = (conversionType, value = 0, currency = 'EUR') => {
  const conversionData = {
    event_category: 'conversion',
    event_label: conversionType,
    value: value,
    currency: currency
  }

  // Google Analytics
  if (window.gtag) {
    window.gtag('event', 'conversion', conversionData)
  }

  // Facebook Pixel
  if (window.fbq) {
    window.fbq('track', 'Purchase', {
      value: value,
      currency: currency
    })
  }

  console.log('Conversion trackée:', conversionType, value, currency)
}

// Événements spécifiques à M2KS
export const trackM2KSEvents = {
  // Formulaires
  contactFormSubmit: (formType) => {
    trackEvent('form_submit', {
      category: 'lead_generation',
      label: formType,
      form_type: formType
    })
  },

  bookingFormSubmit: (service, date) => {
    trackEvent('booking_submit', {
      category: 'conversion',
      label: service,
      service_type: service,
      booking_date: date
    })
  },

  // Diagnostic énergétique
  diagnosticStart: () => {
    trackEvent('diagnostic_start', {
      category: 'tool_usage',
      label: 'energy_diagnostic'
    })
  },

  diagnosticComplete: (savings, investment) => {
    trackEvent('diagnostic_complete', {
      category: 'tool_usage',
      label: 'energy_diagnostic',
      estimated_savings: savings,
      estimated_investment: investment
    })
  },

  // Navigation
  pageNavigation: (fromPage, toPage) => {
    trackEvent('page_navigation', {
      category: 'navigation',
      from_page: fromPage,
      to_page: toPage
    })
  },

  // Engagement
  chatOpen: () => {
    trackEvent('chat_open', {
      category: 'engagement',
      label: 'customer_support'
    })
  },

  phoneClick: () => {
    trackEvent('phone_click', {
      category: 'conversion',
      label: 'emergency_contact'
    })
  },

  // Téléchargements
  brochureDownload: (brochureType) => {
    trackEvent('download', {
      category: 'engagement',
      label: brochureType,
      file_type: 'brochure'
    })
  },

  // Réseaux sociaux
  socialShare: (platform, content) => {
    trackEvent('social_share', {
      category: 'engagement',
      label: platform,
      content_type: content
    })
  },

  // Erreurs
  errorOccurred: (errorType, errorMessage) => {
    trackEvent('error', {
      category: 'technical',
      label: errorType,
      error_message: errorMessage
    })
  }
}

// Hook personnalisé pour utiliser les analytics
export const useAnalytics = () => {
  const trackCustomEvent = (eventName, parameters) => {
    trackEvent(eventName, parameters)
  }

  const trackCustomPageView = (path, title) => {
    trackPageView(path, title)
  }

  const trackCustomConversion = (type, value, currency) => {
    trackConversion(type, value, currency)
  }

  return {
    trackEvent: trackCustomEvent,
    trackPageView: trackCustomPageView,
    trackConversion: trackCustomConversion,
    m2ks: trackM2KSEvents
  }
}

export default Analytics

