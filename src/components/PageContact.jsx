import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, Calendar, MessageSquare, AlertCircle, CheckCircle } from 'lucide-react'

const PageContact = ({ onBookingClick }) => {
  const [formData, setFormData] = useState({
    type: '',
    nom: '',
    email: '',
    telephone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulation d'envoi de formulaire
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        type: '',
        nom: '',
        email: '',
        telephone: '',
        message: ''
      })
      
      // Reset status après 5 secondes
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 2000)
  }

  const zones = [
    {
      region: "Nord",
      villes: ["Lille", "Valenciennes", "Dunkerque", "Roubaix", "Tourcoing"],
      description: "Intervention rapide dans tout le département du Nord"
    },
    {
      region: "Île-de-France",
      villes: ["Paris", "Versailles", "Créteil", "Nanterre", "Bobigny"],
      description: "Couverture complète de la région parisienne"
    },
    {
      region: "Benelux",
      villes: ["Bruxelles", "Anvers", "Amsterdam", "Luxembourg"],
      description: "Service international de qualité"
    }
  ]

  const services = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Urgence 7j/7",
      description: "Intervention d'urgence 24h/24, même le week-end",
      contact: "03 74 47 48 29",
      action: () => window.open('tel:0374474829')
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Rendez-vous planifié",
      description: "Planification de votre intervention selon vos disponibilités",
      contact: "Planifier",
      action: onBookingClick
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Devis gratuit",
      description: "Estimation détaillée et transparente de votre projet",
      contact: "Demander",
      action: () => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contactez M2KS
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Votre partenaire de confiance pour tous vos projets de réfrigération, énergie et agencement
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <Phone className="h-4 w-4 inline mr-2" />
                <span className="font-semibold">03 74 47 48 29</span>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <Mail className="h-4 w-4 inline mr-2" />
                <span className="font-semibold">contact@m2ks.fr</span>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <Clock className="h-4 w-4 inline mr-2" />
                <span className="font-semibold">7j/7 - 24h/24</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services de Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comment Nous Contacter ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez le mode de contact qui vous convient le mieux. Notre équipe familiale est à votre écoute.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <Button
                  onClick={service.action}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  {service.contact}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de Contact */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Demande de Contact
            </h2>
            <p className="text-xl text-gray-600">
              Décrivez-nous votre projet, nous vous recontactons rapidement
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span className="text-green-800">
                  Votre message a été envoyé avec succès ! Nous vous recontacterons rapidement.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type de demande *
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Sélectionnez le type de demande</option>
                  <option value="devis">Demande de devis</option>
                  <option value="urgence">Intervention d'urgence</option>
                  <option value="maintenance">Contrat de maintenance</option>
                  <option value="conseil">Conseil technique</option>
                  <option value="autre">Autre demande</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre nom et prénom"
                  />
                </div>

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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="03 XX XX XX XX"
                  />
                </div>
              </div>

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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Zones d'Intervention */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Zones d'Intervention
            </h2>
            <p className="text-xl text-gray-600">
              M2KS intervient dans trois grandes régions pour vous servir au plus près
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {zones.map((zone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {zone.region}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {zone.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {zone.villes.map((ville) => (
                    <span
                      key={ville}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
                    >
                      {ville}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Informations Pratiques */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Phone className="h-12 w-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-lg font-bold mb-2">Téléphone</h3>
              <p className="text-blue-200">03 74 47 48 29</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Mail className="h-12 w-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-blue-200">contact@m2ks.fr</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Clock className="h-12 w-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-lg font-bold mb-2">Horaires</h3>
              <p className="text-blue-200">Lun-Ven : 8h-18h</p>
              <p className="text-blue-200">Urgences : 7j/7, 24h/24</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <AlertCircle className="h-12 w-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-lg font-bold mb-2">Urgences</h3>
              <p className="text-blue-200">Intervention rapide</p>
              <p className="text-blue-200">7 jours sur 7</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Démarrer Votre Projet ?
            </h2>
            <p className="text-xl mb-8">
              L'équipe familiale M2KS vous accompagne de A à Z. Votre tranquillité est notre métier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100"
                onClick={() => window.open('tel:0374474829')}
              >
                <Phone className="h-5 w-5 mr-2" />
                Appeler Maintenant
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600"
                onClick={onBookingClick}
              >
                <Calendar className="h-5 w-5 mr-2" />
                Planifier un RDV
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PageContact

