import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Clock, MapPin, Shield, Award, Users } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const faqData = [
    {
      question: "Quels sont vos délais d'intervention en urgence ?",
      answer: "Nous intervenons 7j/7 pour les urgences. En cas de panne critique (réfrigération, climatisation), nous nous engageons à intervenir dans les 2h en journée et dans les 4h en soirée/week-end dans nos zones de couverture principales (Lille métropole, Paris intra-muros). Pour les autres zones, le délai peut être étendu à 6h maximum.",
      icon: <Clock className="h-6 w-6" style={{ color: 'var(--m2ks-green)' }} />
    },
    {
      question: "Quelles sont vos zones d'intervention ?",
      answer: "M2KS intervient principalement dans les Hauts-de-France (Nord, Pas-de-Calais), l'Île-de-France, ainsi qu'en Belgique et au Luxembourg. Nos équipes sont basées à Lille et disposent d'antennes mobiles pour couvrir efficacement ces territoires. Pour des projets spécifiques hors zone, nous étudions chaque demande au cas par cas.",
      icon: <MapPin className="h-6 w-6" style={{ color: 'var(--m2ks-green)' }} />
    },
    {
      question: "Proposez-vous des contrats de maintenance ?",
      answer: "Oui, nous proposons des contrats de maintenance préventive adaptés à vos équipements et à votre activité. Nos contrats incluent : visites programmées, maintenance préventive, dépannage prioritaire, pièces détachées, et suivi technique personnalisé. Nous établissons un planning sur mesure selon la criticité de vos installations.",
      icon: <Shield className="h-6 w-6" style={{ color: 'var(--m2ks-green)' }} />
    },
    {
      question: "Travaillez-vous avec des sous-traitants ?",
      answer: "Non, c'est l'un de nos engagements fondamentaux. Toutes nos interventions sont réalisées par nos équipes internes M2KS. Cette approche nous permet de garantir la qualité, la cohérence de nos méthodes, et un suivi personnalisé de chaque client. Vous avez toujours affaire aux mêmes techniciens qui connaissent vos installations.",
      icon: <Users className="h-6 w-6" style={{ color: 'var(--m2ks-green)' }} />
    },
    {
      question: "Quelles sont vos certifications et qualifications ?",
      answer: "M2KS dispose de toutes les certifications nécessaires pour intervenir en toute légalité : QualiPAC pour les pompes à chaleur, FEEBAT pour l'efficacité énergétique, certification KNX pour la domotique, attestation de capacité pour la manipulation des fluides frigorigènes, et qualification RGE (Reconnu Garant de l'Environnement). Nos techniciens suivent une formation continue pour maintenir ces qualifications.",
      icon: <Award className="h-6 w-6" style={{ color: 'var(--m2ks-green)' }} />
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--m2ks-blue)' }}>
            Questions Fréquentes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Retrouvez les réponses aux questions les plus courantes sur nos services, 
            nos zones d'intervention et nos engagements qualité.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-center space-x-4">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openItems[index] ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openItems[index] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 pl-16">
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div 
          className="mt-12 text-center bg-white rounded-lg p-8 shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--m2ks-blue)' }}>
            Vous ne trouvez pas la réponse à votre question ?
          </h2>
          <p className="text-gray-600 mb-6">
            Notre équipe est à votre disposition pour répondre à toutes vos questions spécifiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0374474829"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: 'var(--m2ks-green)' }}
            >
              <Clock className="mr-2 h-5 w-5" />
              Urgence 7j/7 : 03 74 47 48 29
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 text-base font-medium rounded-md transition-all duration-300 hover:scale-105"
              style={{ 
                borderColor: 'var(--m2ks-blue)', 
                color: 'var(--m2ks-blue)',
                backgroundColor: 'transparent'
              }}
            >
              Nous contacter
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FAQ

