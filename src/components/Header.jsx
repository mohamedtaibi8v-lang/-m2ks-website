import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, Calendar } from 'lucide-react'

const Header = ({ onBookingClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Notre Histoire', href: '/notre-histoire' },
    { name: 'Réfrigération', href: '/refrigeration' },
    { name: 'Énergie & Confort', href: '/energie' },
    { name: 'Concept & Agencement', href: '/concept' },
    { name: 'Réalisations', href: '/realisations' },
    { name: 'Contact', href: '/contact' }
  ]

  const handleNavClick = (href) => {
    setIsMenuOpen(false)
    if (href.startsWith('/#')) {
      // Pour les ancres, on navigue vers la page d'accueil puis on scroll
      if (location.pathname !== '/') {
        window.location.href = href
      } else {
        const element = document.querySelector(href.substring(1))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold" style={{ color: 'var(--m2ks-blue)' }}>
                M2KS
              </div>
              <div className="ml-2 text-sm text-gray-600 hidden sm:block">
                Spécialiste en Réfrigération, Énergies & Agencement
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              item.href.startsWith('/#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className="text-gray-700 hover:text-[var(--m2ks-blue)] px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-[var(--m2ks-blue)] px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-1" style={{ color: 'var(--m2ks-green)' }} />
              <span className="font-semibold">03 74 47 48 29</span>
            </div>
            <Button 
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50"
              onClick={() => window.open('tel:0374474829')}
            >
              <Phone className="h-4 w-4 mr-2" />
              Urgence 7j/7
            </Button>
            <Button 
              className="text-white"
              style={{ backgroundColor: 'var(--m2ks-green)' }}
              onClick={onBookingClick}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Planifier RDV
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                item.href.startsWith('/#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[var(--m2ks-blue)] hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[var(--m2ks-blue)] hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="px-3 py-2 border-t border-gray-200 mt-2 space-y-2">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Phone className="h-4 w-4 mr-1" style={{ color: 'var(--m2ks-green)' }} />
                  <span className="font-semibold">03 74 47 48 29</span>
                </div>
                <Button 
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-50"
                  onClick={() => {
                    window.open('tel:0374474829')
                    setIsMenuOpen(false)
                  }}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Urgence 7j/7
                </Button>
                <Button 
                  className="w-full text-white"
                  style={{ backgroundColor: 'var(--m2ks-green)' }}
                  onClick={() => {
                    onBookingClick()
                    setIsMenuOpen(false)
                  }}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Planifier RDV
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

