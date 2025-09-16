import React, { useState, useEffect } from 'react'
import { Cookie, Settings, X, Check, Shield } from 'lucide-react'

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true, // Toujours activé
    analytics: false,
    marketing: false,
    functional: false
  })

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà donné son consentement
    const consent = localStorage.getItem('m2ks-cookie-consent')
    if (!consent) {
      // Délai pour laisser le temps à la page de se charger
      setTimeout(() => setShowBanner(true), 2000)
    } else {
      // Charger les préférences sauvegardées
      const savedPreferences = JSON.parse(consent)
      setPreferences(savedPreferences)
      loadCookies(savedPreferences)
    }
  }, [])

  const loadCookies = (prefs) => {
    // Charger Google Analytics si autorisé
    if (prefs.analytics) {
      loadGoogleAnalytics()
    }
    
    // Charger les cookies marketing si autorisés
    if (prefs.marketing) {
      loadMarketingCookies()
    }
    
    // Charger les cookies fonctionnels si autorisés
    if (prefs.functional) {
      loadFunctionalCookies()
    }
  }

  const loadGoogleAnalytics = () => {
    // Exemple d'intégration Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'analytics_storage': 'granted'
      })
    }
  }

  const loadMarketingCookies = () => {
    // Exemple d'intégration cookies marketing
    if (typeof gtag !== 'undefined') {
      gtag('consent', 'update', {
        'ad_storage': 'granted'
      })
    }
  }

  const loadFunctionalCookies = () => {
    // Cookies pour améliorer l'expérience utilisateur
    // Ex: préférences de langue, thème, etc.
  }

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    }
    setPreferences(allAccepted)
    saveConsent(allAccepted)
    loadCookies(allAccepted)
    setShowBanner(false)
  }

  const acceptNecessaryOnly = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    }
    setPreferences(necessaryOnly)
    saveConsent(necessaryOnly)
    setShowBanner(false)
  }

  const savePreferences = () => {
    saveConsent(preferences)
    loadCookies(preferences)
    setShowSettings(false)
    setShowBanner(false)
  }

  const saveConsent = (prefs) => {
    localStorage.setItem('m2ks-cookie-consent', JSON.stringify(prefs))
    localStorage.setItem('m2ks-cookie-consent-date', new Date().toISOString())
  }

  const handlePreferenceChange = (type) => {
    if (type === 'necessary') return // Les cookies nécessaires ne peuvent pas être désactivés
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  const resetConsent = () => {
    localStorage.removeItem('m2ks-cookie-consent')
    localStorage.removeItem('m2ks-cookie-consent-date')
    setShowBanner(true)
    setShowSettings(false)
  }

  if (!showBanner && !showSettings) return null

  return (
    <>
      {/* Banner principal */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex items-start gap-4">
                <Cookie className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Respect de votre vie privée
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    M2KS utilise des cookies pour améliorer votre expérience de navigation, 
                    analyser l'utilisation du site et vous proposer des contenus personnalisés. 
                    Vous pouvez accepter tous les cookies ou personnaliser vos préférences.
                  </p>
                  <div className="mt-3">
                    <button
                      onClick={() => setShowSettings(true)}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium underline"
                    >
                      Personnaliser mes choix
                    </button>
                    <span className="text-gray-400 mx-2">•</span>
                    <a 
                      href="/politique-confidentialite" 
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium underline"
                    >
                      Politique de confidentialité
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                <button
                  onClick={acceptNecessaryOnly}
                  className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
                >
                  Cookies nécessaires uniquement
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Accepter tous les cookies
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal des paramètres */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Settings className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Paramètres des cookies
                  </h2>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="text-sm text-gray-600">
                Gérez vos préférences de cookies. Vous pouvez activer ou désactiver 
                différents types de cookies selon vos besoins.
              </div>
              
              {/* Cookies nécessaires */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-600" />
                    <h3 className="font-medium text-gray-900">Cookies nécessaires</h3>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-green-600 font-medium mr-2">Toujours actif</span>
                    <div className="w-10 h-6 bg-green-600 rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Ces cookies sont essentiels au fonctionnement du site web et ne peuvent pas être désactivés. 
                  Ils permettent la navigation, la sécurité et l'accès aux zones sécurisées.
                </p>
              </div>
              
              {/* Cookies analytiques */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-gray-900">Cookies analytiques</h3>
                  <button
                    onClick={() => handlePreferenceChange('analytics')}
                    className={`w-10 h-6 rounded-full flex items-center transition-colors ${
                      preferences.analytics ? 'bg-blue-600 justify-end' : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                  </button>
                </div>
                <p className="text-sm text-gray-600">
                  Ces cookies nous aident à comprendre comment les visiteurs utilisent notre site web 
                  en collectant des informations anonymes sur les pages visitées et les interactions.
                </p>
              </div>
              
              {/* Cookies marketing */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-gray-900">Cookies marketing</h3>
                  <button
                    onClick={() => handlePreferenceChange('marketing')}
                    className={`w-10 h-6 rounded-full flex items-center transition-colors ${
                      preferences.marketing ? 'bg-blue-600 justify-end' : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                  </button>
                </div>
                <p className="text-sm text-gray-600">
                  Ces cookies sont utilisés pour vous proposer des publicités pertinentes 
                  et mesurer l'efficacité de nos campagnes marketing.
                </p>
              </div>
              
              {/* Cookies fonctionnels */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-gray-900">Cookies fonctionnels</h3>
                  <button
                    onClick={() => handlePreferenceChange('functional')}
                    className={`w-10 h-6 rounded-full flex items-center transition-colors ${
                      preferences.functional ? 'bg-blue-600 justify-end' : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                  </button>
                </div>
                <p className="text-sm text-gray-600">
                  Ces cookies permettent d'améliorer votre expérience en mémorisant vos préférences 
                  (langue, région, paramètres d'affichage).
                </p>
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={savePreferences}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <Check className="w-4 h-4" />
                Enregistrer mes préférences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CookieConsent

