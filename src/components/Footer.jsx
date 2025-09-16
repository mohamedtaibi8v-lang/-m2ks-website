import React from 'react'
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--m2ks-gray)] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2">M2KS</h3>
              <p className="text-gray-300 text-lg">
                Spécialiste en Réfrigération, Énergies & Agencement
              </p>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Entreprise familiale fondée sur l'exigence technique et la fiabilité. 
              Mohamed, Karima, Kaïs, Soulayman : une promesse de qualité transmise 
              de génération en génération.
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3" style={{ color: 'var(--m2ks-green)' }} />
                <span>03 74 47 48 29</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3" style={{ color: 'var(--m2ks-green)' }} />
                <span>contact@m2ks.fr</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3" style={{ color: 'var(--m2ks-green)' }} />
                <span>Nord, Île-de-France, Benelux</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#refrigeration" className="hover:text-[var(--m2ks-green)] transition-colors">
                  Réfrigération
                </a>
              </li>
              <li>
                <a href="#energie" className="hover:text-[var(--m2ks-green)] transition-colors">
                  Énergie & Confort
                </a>
              </li>
              <li>
                <a href="#concept" className="hover:text-[var(--m2ks-green)] transition-colors">
                  Concept & Agencement
                </a>
              </li>
              <li>
                <a href="#maintenance" className="hover:text-[var(--m2ks-green)] transition-colors">
                  Maintenance
                </a>
              </li>
              <li>
                <a href="#urgence" className="hover:text-[var(--m2ks-green)] transition-colors">
                  Dépannage 7j/7
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#histoire" className="hover:text-[var(--m2ks-green)] transition-colors">
                  Notre Histoire
                </a>
              </li>
              <li>
                <a href="#realisations" className="hover:text-[var(--m2ks-green)] transition-colors">
                  Réalisations
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-[var(--m2ks-green)] transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#zones" className="hover:text-[var(--m2ks-green)] transition-colors">
                  Zones d'intervention
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[var(--m2ks-green)] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Nos Certifications</h4>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-2 mx-auto"
                  style={{ backgroundColor: 'var(--m2ks-green)' }}
                >
                  <span className="text-white font-bold text-sm">QualiPAC</span>
                </div>
              </div>
              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-2 mx-auto"
                  style={{ backgroundColor: 'var(--m2ks-green)' }}
                >
                  <span className="text-white font-bold text-sm">FEEBAT</span>
                </div>
              </div>
              <div className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-2 mx-auto"
                  style={{ backgroundColor: 'var(--m2ks-green)' }}
                >
                  <span className="text-white font-bold text-sm">KNX</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="p-3 rounded-full bg-gray-700 hover:bg-[var(--m2ks-green)] transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-gray-700 hover:bg-[var(--m2ks-green)] transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-gray-700 hover:bg-[var(--m2ks-green)] transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} M2KS. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#mentions" className="hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#rgpd" className="hover:text-white transition-colors">
                Politique RGPD
              </a>
              <a href="#cgv" className="hover:text-white transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

