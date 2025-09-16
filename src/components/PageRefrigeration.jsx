import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  Thermometer, 
  Clock, 
  Shield, 
  Wrench, 
  CheckCircle, 
  AlertTriangle,
  Phone,
  Calendar,
  MapPin,
  Award
} from 'lucide-react'

const PageRefrigeration = () => {
  const services = [
    {
      title: "Dépannage Urgent 7j/7",
      description: "Intervention rapide pour toute panne de réfrigération. Notre équipe technique est disponible 24h/24 pour assurer la continuité de votre activité.",
      icon: AlertTriangle,
      features: [
        "Diagnostic précis en moins de 30 minutes",
        "Pièces détachées en stock permanent",
        "Intervention dans les 2h en urgence",
        "Garantie sur toutes les réparations"
      ],
      color: "#ef4444"
    },
    {
      title: "Maintenance Préventive",
      description: "Contrats de maintenance personnalisés pour optimiser la durée de vie de vos équipements et prévenir les pannes.",
      icon: Calendar,
      features: [
        "Planification sur mesure",
        "Contrôles réglementaires inclus",
        "Rapport détaillé après chaque visite",
        "Tarifs préférentiels sur les réparations"
      ],
      color: "var(--m2ks-green)"
    },
    {
      title: "Installation Complète",
      description: "Conception, installation et mise en service d'équipements de réfrigération adaptés à votre secteur d'activité.",
      icon: Wrench,
      features: [
        "Étude thermique personnalisée",
        "Installation aux normes CE",
        "Formation de vos équipes",
        "Garantie constructeur étendue"
      ],
      color: "var(--m2ks-blue)"
    }
  ]

  const sectors = [
    {
      name: "CHR (Cafés, Hôtels, Restaurants)",
      description: "Solutions adaptées aux contraintes de la restauration : chambres froides, vitrines réfrigérées, machines à glaçons.",
      equipments: ["Chambres froides positives/négatives", "Vitrines réfrigérées", "Machines à glaçons", "Refroidisseurs de boissons"],
      image: "/api/placeholder/400/300"
    },
    {
      name: "GMS (Grandes et Moyennes Surfaces)",
      description: "Équipements haute performance pour la grande distribution : meubles frigorifiques, centrales de froid.",
      equipments: ["Meubles frigorifiques", "Centrales de froid", "Systèmes de surveillance", "Portes frigorifiques"],
      image: "/api/placeholder/400/300"
    },
    {
      name: "Industrie Agroalimentaire",
      description: "Solutions industrielles pour la conservation et la transformation : tunnels de congélation, chambres de maturation.",
      equipments: ["Tunnels de congélation", "Chambres de maturation", "Systèmes de refroidissement rapide", "Équipements ATEX"],
      image: "/api/placeholder/400/300"
    }
  ]

  const certifications = [
    {
      name: "Attestation de Capacité",
      description: "Manipulation des fluides frigorigènes selon la réglementation F-Gas",
      icon: Award
    },
    {
      name: "Qualifications RGE",
      description: "Reconnu Garant de l'Environnement pour les équipements frigorifiques",
      icon: Shield
    },
    {
      name: "Norme EN 378",
      description: "Systèmes de réfrigération et pompes à chaleur - Exigences de sécurité",
      icon: CheckCircle
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Réfrigération Professionnelle
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expertise technique et fiabilité garantie pour tous vos équipements de froid professionnel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Phone className="mr-2 h-5 w-5" />
                Urgence 7j/7 : 03 74 47 48 29
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Demander un devis
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--m2ks-blue)' }}>
              Nos Services Réfrigération
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de services pour assurer le bon fonctionnement de vos équipements frigorifiques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-6">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <IconComponent 
                        className="h-8 w-8" 
                        style={{ color: service.color }}
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--m2ks-blue)' }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--m2ks-blue)' }}>
              Secteurs d'Activité
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à chaque métier, des contraintes spécifiques aux normes les plus strictes
            </p>
          </motion.div>

          <div className="space-y-12">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-gray-300 rounded-2xl h-80 flex items-center justify-center">
                    <span className="text-gray-500 text-lg">Image {sector.name}</span>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--m2ks-blue)' }}>
                    {sector.name}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    {sector.description}
                  </p>
                  
                  <h4 className="text-xl font-semibold mb-4" style={{ color: 'var(--m2ks-green)' }}>
                    Équipements spécialisés :
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {sector.equipments.map((equipment, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{equipment}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--m2ks-blue)' }}>
              Certifications & Qualifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre expertise reconnue par les organismes officiels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon
              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-6">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: 'var(--m2ks-green)15' }}
                    >
                      <IconComponent 
                        className="h-8 w-8" 
                        style={{ color: 'var(--m2ks-green)' }}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--m2ks-blue)' }}>
                      {cert.name}
                    </h3>
                    <p className="text-gray-700">
                      {cert.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--m2ks-blue)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Besoin d'une Intervention ?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Notre équipe technique est à votre disposition pour tous vos besoins en réfrigération professionnelle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Urgence 7j/7
              </Button>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Calendar className="mr-2 h-5 w-5" />
                Planifier une intervention
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PageRefrigeration

