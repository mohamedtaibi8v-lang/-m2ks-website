import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  Palette, 
  Ruler, 
  Lightbulb, 
  Home,
  ChefHat,
  Shirt,
  Wrench,
  CheckCircle,
  ArrowRight,
  Eye,
  Calendar,
  Phone
} from 'lucide-react'

const PageConcept = () => {
  const [configuratorStep, setConfiguratorStep] = useState(1)
  const [configuratorData, setConfiguratorData] = useState({
    projectType: '',
    surface: '',
    budget: '',
    style: '',
    timeline: ''
  })

  const services = [
    {
      title: "Cuisines Professionnelles",
      description: "Conception et installation de cuisines sur-mesure pour restaurants, hôtels et collectivités.",
      icon: ChefHat,
      features: [
        "Étude ergonomique personnalisée",
        "Équipements professionnels intégrés",
        "Respect des normes HACCP",
        "Formation de vos équipes"
      ],
      gallery: [
        { before: "/api/placeholder/300/200", after: "/api/placeholder/300/200", title: "Restaurant Le Gourmet" },
        { before: "/api/placeholder/300/200", after: "/api/placeholder/300/200", title: "Hôtel 4 étoiles" },
        { before: "/api/placeholder/300/200", after: "/api/placeholder/300/200", title: "Cantine scolaire" }
      ],
      color: "var(--m2ks-blue)"
    },
    {
      title: "Dressings & Rangements",
      description: "Aménagements sur-mesure pour optimiser vos espaces de rangement avec style et fonctionnalité.",
      icon: Shirt,
      features: [
        "Conception 3D personnalisée",
        "Matériaux haut de gamme",
        "Optimisation de l'espace",
        "Éclairage LED intégré"
      ],
      gallery: [
        { before: "/api/placeholder/300/200", after: "/api/placeholder/300/200", title: "Suite parentale" },
        { before: "/api/placeholder/300/200", after: "/api/placeholder/300/200", title: "Appartement parisien" },
        { before: "/api/placeholder/300/200", after: "/api/placeholder/300/200", title: "Maison familiale" }
      ],
      color: "var(--m2ks-green)"
    },
    {
      title: "Rénovation Complète",
      description: "Transformation totale de vos espaces avec une approche globale design et technique.",
      icon: Home,
      features: [
        "Gestion de projet complète",
        "Coordination des corps d'état",
        "Suivi qualité rigoureux",
        "Respect des délais"
      ],
      gallery: [
        { before: "/api/placeholder/300/200", after: "/api/placeholder/300/200", title: "Loft industriel" },
        { before: "/api/placeholder/300/200", after: "/api/placeholder/300/200", title: "Maison de ville" },
        { before: "/api/placeholder/300/200", after: "/api/placeholder/300/200", title: "Bureau moderne" }
      ],
      color: "#f59e0b"
    }
  ]

  const configuratorSteps = [
    {
      title: "Type de projet",
      options: [
        { value: "cuisine", label: "Cuisine professionnelle", icon: ChefHat },
        { value: "dressing", label: "Dressing sur-mesure", icon: Shirt },
        { value: "renovation", label: "Rénovation complète", icon: Home }
      ]
    },
    {
      title: "Surface approximative",
      options: [
        { value: "small", label: "Moins de 20m²" },
        { value: "medium", label: "20 à 50m²" },
        { value: "large", label: "50 à 100m²" },
        { value: "xlarge", label: "Plus de 100m²" }
      ]
    },
    {
      title: "Budget envisagé",
      options: [
        { value: "budget1", label: "10 000 - 25 000€" },
        { value: "budget2", label: "25 000 - 50 000€" },
        { value: "budget3", label: "50 000 - 100 000€" },
        { value: "budget4", label: "Plus de 100 000€" }
      ]
    },
    {
      title: "Style souhaité",
      options: [
        { value: "moderne", label: "Moderne & épuré" },
        { value: "industriel", label: "Industriel & urbain" },
        { value: "classique", label: "Classique & intemporel" },
        { value: "contemporain", label: "Contemporain & design" }
      ]
    }
  ]

  const handleConfiguratorNext = () => {
    if (configuratorStep < configuratorSteps.length) {
      setConfiguratorStep(configuratorStep + 1)
    } else {
      // Générer le devis
      console.log('Configuration terminée:', configuratorData)
    }
  }

  const processSteps = [
    {
      step: 1,
      title: "Consultation Initiale",
      description: "Analyse de vos besoins et visite technique gratuite",
      icon: Eye
    },
    {
      step: 2,
      title: "Conception 3D",
      description: "Création de plans détaillés et visualisation 3D",
      icon: Palette
    },
    {
      step: 3,
      title: "Validation & Devis",
      description: "Présentation du projet et devis détaillé",
      icon: CheckCircle
    },
    {
      step: 4,
      title: "Réalisation",
      description: "Installation par nos équipes expertes",
      icon: Wrench
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-900 to-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Concept & Agencement
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Créateurs d'espaces de vie exceptionnels. Cuisines professionnelles sur mesure, dressings optimisés, rénovations complètes : nous transformons vos idées en réalité avec un savoir-faire artisanal unique et 15 ans d'expérience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Palette className="mr-2 h-5 w-5" />
                Configurateur 3D
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-900">
                Consultation gratuite
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Configurateur Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--m2ks-blue)' }}>
              Configurateur de Projet
            </h2>
            <p className="text-xl text-gray-600">
              Obtenez une première estimation en quelques clics
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold text-gray-600">
                  Étape {configuratorStep} sur {configuratorSteps.length}
                </span>
                <span className="text-sm font-semibold" style={{ color: 'var(--m2ks-green)' }}>
                  {Math.round((configuratorStep / configuratorSteps.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="h-2 rounded-full transition-all duration-300"
                  style={{ 
                    backgroundColor: 'var(--m2ks-green)',
                    width: `${(configuratorStep / configuratorSteps.length) * 100}%`
                  }}
                ></div>
              </div>
            </div>

            {configuratorStep <= configuratorSteps.length && (
              <motion.div
                key={configuratorStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--m2ks-blue)' }}>
                  {configuratorSteps[configuratorStep - 1]?.title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {configuratorSteps[configuratorStep - 1]?.options.map((option, index) => {
                    const IconComponent = option.icon
                    return (
                      <button
                        key={option.value}
                        onClick={() => {
                          const stepKey = ['projectType', 'surface', 'budget', 'style'][configuratorStep - 1]
                          setConfiguratorData({...configuratorData, [stepKey]: option.value})
                        }}
                        className={`p-6 rounded-xl border-2 transition-all duration-300 text-left hover:shadow-lg ${
                          configuratorData[['projectType', 'surface', 'budget', 'style'][configuratorStep - 1]] === option.value
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 hover:border-green-300'
                        }`}
                      >
                        <div className="flex items-center">
                          {IconComponent && (
                            <IconComponent className="h-6 w-6 mr-3" style={{ color: 'var(--m2ks-green)' }} />
                          )}
                          <span className="font-semibold">{option.label}</span>
                        </div>
                      </button>
                    )
                  })}
                </div>

                <div className="text-center">
                  <Button 
                    onClick={handleConfiguratorNext}
                    size="lg"
                    disabled={!configuratorData[['projectType', 'surface', 'budget', 'style'][configuratorStep - 1]]}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    {configuratorStep === configuratorSteps.length ? 'Obtenir mon devis' : 'Étape suivante'}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            )}

            {configuratorStep > configuratorSteps.length && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <CheckCircle className="h-16 w-16 mx-auto mb-6" style={{ color: 'var(--m2ks-green)' }} />
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--m2ks-blue)' }}>
                  Configuration Terminée !
                </h3>
                <p className="text-gray-600 mb-6">
                  Nos experts vont étudier votre projet et vous contacter sous 24h
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Être rappelé immédiatement
                </Button>
              </motion.div>
            )}
          </div>
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
              Nos Spécialités
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions sur-mesure pour chaque projet, du concept à la réalisation
            </p>
          </motion.div>

          <div className="space-y-20">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="lg:w-1/2">
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
                      <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--m2ks-blue)' }}>
                        {service.title}
                      </h3>
                      <p className="text-lg text-gray-700 mb-6">
                        {service.description}
                      </p>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      size="lg"
                      style={{ backgroundColor: service.color }}
                      className="text-white"
                    >
                      Voir nos réalisations
                    </Button>
                  </div>

                  <div className="lg:w-1/2">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {service.gallery.map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="relative group">
                            <div className="bg-gray-300 rounded-lg h-32 flex items-center justify-center">
                              <span className="text-gray-500 text-sm">Avant</span>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <Eye className="h-6 w-6 text-white" />
                            </div>
                          </div>
                          <div className="relative group">
                            <div className="bg-gray-300 rounded-lg h-32 flex items-center justify-center">
                              <span className="text-gray-500 text-sm">Après</span>
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <Eye className="h-6 w-6 text-white" />
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 text-center">{item.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--m2ks-blue)' }}>
              Notre Processus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De l'idée à la réalisation, un accompagnement sur-mesure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: 'var(--m2ks-blue)' }}
                    >
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <div 
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                      style={{ backgroundColor: 'var(--m2ks-green)' }}
                    >
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--m2ks-blue)' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-700">
                    {step.description}
                  </p>
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
              Prêt à Concrétiser votre Projet ?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Bénéficiez d'une consultation gratuite avec nos experts en agencement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                <Lightbulb className="mr-2 h-5 w-5" />
                Consultation gratuite
              </Button>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Calendar className="mr-2 h-5 w-5" />
                Prendre rendez-vous
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PageConcept

