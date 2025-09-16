import React, { useState, useEffect } from 'react'
import { Accessibility, Type, Eye, Contrast, Volume2, Keyboard, Settings } from 'lucide-react'

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [settings, setSettings] = useState({
    fontSize: 100,
    contrast: 'normal',
    animations: true,
    screenReader: false,
    keyboardNav: true,
    focusIndicator: true
  })

  useEffect(() => {
    // Charger les paramètres sauvegardés
    const savedSettings = localStorage.getItem('m2ks-accessibility-settings')
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings)
      setSettings(parsed)
      applySettings(parsed)
    }
  }, [])

  const applySettings = (newSettings) => {
    const root = document.documentElement

    // Taille de police
    root.style.fontSize = `${newSettings.fontSize}%`

    // Contraste
    if (newSettings.contrast === 'high') {
      root.classList.add('high-contrast')
      root.classList.remove('dark-mode')
    } else if (newSettings.contrast === 'dark') {
      root.classList.add('dark-mode')
      root.classList.remove('high-contrast')
    } else {
      root.classList.remove('high-contrast', 'dark-mode')
    }

    // Animations
    if (!newSettings.animations) {
      root.classList.add('reduce-motion')
    } else {
      root.classList.remove('reduce-motion')
    }

    // Indicateur de focus
    if (newSettings.focusIndicator) {
      root.classList.add('enhanced-focus')
    } else {
      root.classList.remove('enhanced-focus')
    }

    // Navigation clavier
    if (newSettings.keyboardNav) {
      enableKeyboardNavigation()
    }
  }

  const enableKeyboardNavigation = () => {
    // Ajouter des raccourcis clavier
    document.addEventListener('keydown', handleKeyboardShortcuts)
  }

  const handleKeyboardShortcuts = (e) => {
    // Alt + A : Ouvrir le widget d'accessibilité
    if (e.altKey && e.key === 'a') {
      e.preventDefault()
      setIsOpen(!isOpen)
    }
    
    // Alt + H : Aller au contenu principal
    if (e.altKey && e.key === 'h') {
      e.preventDefault()
      const main = document.querySelector('main') || document.querySelector('#main-content')
      if (main) main.focus()
    }
    
    // Alt + M : Aller au menu
    if (e.altKey && e.key === 'm') {
      e.preventDefault()
      const nav = document.querySelector('nav') || document.querySelector('#navigation')
      if (nav) nav.focus()
    }
  }

  const updateSetting = (key, value) => {
    const newSettings = { ...settings, [key]: value }
    setSettings(newSettings)
    applySettings(newSettings)
    localStorage.setItem('m2ks-accessibility-settings', JSON.stringify(newSettings))
  }

  const resetSettings = () => {
    const defaultSettings = {
      fontSize: 100,
      contrast: 'normal',
      animations: true,
      screenReader: false,
      keyboardNav: true,
      focusIndicator: true
    }
    setSettings(defaultSettings)
    applySettings(defaultSettings)
    localStorage.setItem('m2ks-accessibility-settings', JSON.stringify(defaultSettings))
  }

  const increaseFontSize = () => {
    const newSize = Math.min(settings.fontSize + 10, 150)
    updateSetting('fontSize', newSize)
  }

  const decreaseFontSize = () => {
    const newSize = Math.max(settings.fontSize - 10, 80)
    updateSetting('fontSize', newSize)
  }

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'fr-FR'
      speechSynthesis.speak(utterance)
    }
  }

  return (
    <>
      {/* Bouton d'ouverture du widget */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-40 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Ouvrir les options d'accessibilité"
        title="Options d'accessibilité (Alt + A)"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Widget d'accessibilité */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 z-50 bg-white border border-gray-200 rounded-xl shadow-xl w-80 max-h-96 overflow-y-auto">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Accessibility className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Accessibilité</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                aria-label="Fermer les options d'accessibilité"
              >
                ×
              </button>
            </div>
          </div>

          <div className="p-4 space-y-4">
            {/* Taille de police */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Type className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">Taille du texte</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={decreaseFontSize}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Diminuer la taille du texte"
                >
                  A-
                </button>
                <span className="text-sm text-gray-600 flex-1 text-center">
                  {settings.fontSize}%
                </span>
                <button
                  onClick={increaseFontSize}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Augmenter la taille du texte"
                >
                  A+
                </button>
              </div>
            </div>

            {/* Contraste */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Contrast className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">Contraste</span>
              </div>
              <select
                value={settings.contrast}
                onChange={(e) => updateSetting('contrast', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                aria-label="Sélectionner le mode de contraste"
              >
                <option value="normal">Normal</option>
                <option value="high">Contraste élevé</option>
                <option value="dark">Mode sombre</option>
              </select>
            </div>

            {/* Animations */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">Animations</span>
              </div>
              <button
                onClick={() => updateSetting('animations', !settings.animations)}
                className={`w-10 h-6 rounded-full flex items-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  settings.animations ? 'bg-blue-600 justify-end' : 'bg-gray-300 justify-start'
                }`}
                aria-label={`${settings.animations ? 'Désactiver' : 'Activer'} les animations`}
              >
                <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
              </button>
            </div>

            {/* Indicateur de focus */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">Focus visible</span>
              </div>
              <button
                onClick={() => updateSetting('focusIndicator', !settings.focusIndicator)}
                className={`w-10 h-6 rounded-full flex items-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  settings.focusIndicator ? 'bg-blue-600 justify-end' : 'bg-gray-300 justify-start'
                }`}
                aria-label={`${settings.focusIndicator ? 'Désactiver' : 'Activer'} l'indicateur de focus`}
              >
                <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
              </button>
            </div>

            {/* Navigation clavier */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Keyboard className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">Navigation clavier</span>
              </div>
              <button
                onClick={() => updateSetting('keyboardNav', !settings.keyboardNav)}
                className={`w-10 h-6 rounded-full flex items-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  settings.keyboardNav ? 'bg-blue-600 justify-end' : 'bg-gray-300 justify-start'
                }`}
                aria-label={`${settings.keyboardNav ? 'Désactiver' : 'Activer'} la navigation clavier`}
              >
                <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
              </button>
            </div>

            {/* Lecture audio */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Volume2 className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">Lecture audio</span>
              </div>
              <button
                onClick={() => speakText("Bienvenue sur le site M2KS, spécialiste en réfrigération, énergie et agencement")}
                className="w-full px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Lire le contenu de la page"
              >
                Lire cette page
              </button>
            </div>

            {/* Raccourcis clavier */}
            <div className="border-t border-gray-200 pt-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Raccourcis clavier</h4>
              <div className="text-xs text-gray-600 space-y-1">
                <div><kbd className="bg-gray-100 px-1 rounded">Alt + A</kbd> : Ouvrir l'accessibilité</div>
                <div><kbd className="bg-gray-100 px-1 rounded">Alt + H</kbd> : Aller au contenu</div>
                <div><kbd className="bg-gray-100 px-1 rounded">Alt + M</kbd> : Aller au menu</div>
              </div>
            </div>

            {/* Bouton de réinitialisation */}
            <button
              onClick={resetSettings}
              className="w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Réinitialiser tous les paramètres d'accessibilité"
            >
              Réinitialiser
            </button>
          </div>
        </div>
      )}

      {/* Styles CSS pour l'accessibilité */}
      <style jsx global>{`
        .high-contrast {
          filter: contrast(150%) brightness(120%);
        }
        
        .dark-mode {
          filter: invert(1) hue-rotate(180deg);
        }
        
        .reduce-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .enhanced-focus *:focus {
          outline: 3px solid #3B82F6 !important;
          outline-offset: 2px !important;
        }
        
        /* Skip links */
        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #3B82F6;
          color: white;
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 1000;
        }
        
        .skip-link:focus {
          top: 6px;
        }
      `}</style>
    </>
  )
}

export default AccessibilityWidget

