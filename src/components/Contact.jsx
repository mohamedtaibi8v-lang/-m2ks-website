import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, AlertCircle, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    type: 'devis',
    nom: '',
    email: '',
    telephone: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--m2ks-blue)' }}>
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Besoin d'une intervention ou d'un conseil ? 
            <strong> M2KS est votre partenaire de confiance.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--m2ks-blue)' }}>
              Demande de contact
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Type de demande */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type de demande
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--m2ks-green)] focus:border-transparent"
                >
                  <option value="devis">Demande de devis</option>
                  <option value="urgence">Intervention urgente</option>
                  <option value="info">Demande d'information</option>
                  <option value="maintenance">Contrat de maintenance</option>
                </select>
              </div>

              {/* Nom */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--m2ks-green)] focus:border-transparent"
                  placeholder="Votre nom et prénom"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--m2ks-green)] focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>

              {/* Téléphone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--m2ks-green)] focus:border-transparent"
                  placeholder="03 XX XX XX XX"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--m2ks-green)] focus:border-transparent"
                  placeholder="Décrivez votre projet ou votre problème..."
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full text-white"
                style={{ backgroundColor: 'var(--m2ks-green)' }}
              >
                Envoyer ma demande
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Urgence */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-6 w-6 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-red-800">Urgence 7j/7</h3>
              </div>
              <p className="text-red-700 mb-4">
                Panne de réfrigération, climatisation ou chauffage ? 
                Nous intervenons rapidement, même le week-end.
              </p>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-red-600 mr-2" />
                <span className="text-2xl font-bold text-red-800">03 74 47 48 29</span>
              </div>
            </div>

            {/* Coordonnées */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--m2ks-blue)' }}>
                Nos coordonnées
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mt-1 mr-3" style={{ color: 'var(--m2ks-green)' }} />
                  <div>
                    <div className="font-semibold">Zones d'intervention</div>
                    <div className="text-gray-600 text-sm">
                      Nord, Île-de-France, Benelux
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 mt-1 mr-3" style={{ color: 'var(--m2ks-green)' }} />
                  <div>
                    <div className="font-semibold">Téléphone</div>
                    <div className="text-gray-600 text-sm">03 74 47 48 29</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 mt-1 mr-3" style={{ color: 'var(--m2ks-green)' }} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600 text-sm">contact@m2ks.fr</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 mt-1 mr-3" style={{ color: 'var(--m2ks-green)' }} />
                  <div>
                    <div className="font-semibold">Horaires</div>
                    <div className="text-gray-600 text-sm">
                      Lun-Ven : 8h-18h<br />
                      Urgences : 7j/7, 24h/24
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--m2ks-blue)' }}>
                Nos certifications
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-sm" style={{ color: 'var(--m2ks-green)' }}>
                    QualiPAC
                  </div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-sm" style={{ color: 'var(--m2ks-green)' }}>
                    FEEBAT
                  </div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-sm" style={{ color: 'var(--m2ks-green)' }}>
                    KNX
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 p-8 rounded-2xl" style={{ backgroundColor: 'var(--m2ks-blue)' }}>
          <h3 className="text-3xl font-bold text-white mb-4">
            Confiez-nous votre projet
          </h3>
          <p className="text-xl text-gray-200 mb-6">
            Votre tranquillité est notre métier
          </p>
          <Button 
            size="lg"
            className="text-white"
            style={{ backgroundColor: 'var(--m2ks-green)' }}
          >
            Demander un devis gratuit
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Contact

