import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Award, Users, Heart, Target } from 'lucide-react'
import mohamedImg from '../assets/team-mohamed.jpg'
import karimaImg from '../assets/team-karima.jpg'
import kaisImg from '../assets/team-kais.jpg'
import soulaymanImg from '../assets/team-soulayman.jpg'

const NotreHistoire = () => {
  const [activeYear, setActiveYear] = useState(2024)

  const timeline = [
    {
      year: 2010,
      title: "Les Fondations",
      description: "Mohamed pose les premières pierres de M2KS avec une vision claire : allier expertise technique et valeurs familiales.",
      icon: Target,
      color: "var(--m2ks-blue)"
    },
    {
      year: 2015,
      title: "L'Expansion",
      description: "Karima rejoint l'aventure, apportant sa vision stratégique et développant les relations clients.",
      icon: Users,
      color: "var(--m2ks-green)"
    },
    {
      year: 2020,
      title: "Nouvelle Génération",
      description: "Kaïs intègre l'équipe technique, insufflant innovation et modernité aux méthodes traditionnelles.",
      icon: Award,
      color: "var(--m2ks-blue)"
    },
    {
      year: 2024,
      title: "L'Avenir en Marche",
      description: "Soulayman complète l'équipe familiale, garantissant la pérennité des valeurs M2KS.",
      icon: Heart,
      color: "var(--m2ks-green)"
    }
  ]

  const team = [
    {
      name: "Mohamed",
      role: "Fondateur & Expert Technique",
      description: "Visionnaire de M2KS, Mohamed a bâti l'entreprise sur des valeurs d'exigence et de fiabilité. Son expertise technique de plus de 20 ans guide chaque intervention.",
      image: mohamedImg,
      specialties: ["Réfrigération industrielle", "Formation équipe", "Innovation technique"]
    },
    {
      name: "Karima",
      role: "Directrice Développement",
      description: "Pilier stratégique de M2KS, Karima développe les relations clients et assure la croissance harmonieuse de l'entreprise familiale.",
      image: karimaImg,
      specialties: ["Relation client", "Développement commercial", "Gestion qualité"]
    },
    {
      name: "Kaïs",
      role: "Ingénieur Énergie",
      description: "Représentant de la nouvelle génération, Kaïs apporte innovation et modernité, spécialisé dans les solutions énergétiques durables.",
      image: kaisImg,
      specialties: ["Pompes à chaleur", "Domotique", "Audit énergétique"]
    },
    {
      name: "Soulayman",
      role: "Technicien Agencement",
      description: "Le plus jeune de l'équipe, Soulayman perpétue la tradition familiale avec passion, spécialisé dans l'agencement et la rénovation.",
      image: soulaymanImg,
      specialties: ["Cuisines professionnelles", "Agencement", "Rénovation"]
    }
  ]

  const values = [
    {
      title: "Le Choix de l'Exigence",
      description: "Nous ne sommes pas les moins chers, mais nous sommes les plus fiables. Cette philosophie guide chacune de nos décisions depuis la création de M2KS.",
      icon: Target
    },
    {
      title: "Transmission Familiale",
      description: "Chaque génération transmet son savoir-faire à la suivante, créant une expertise unique qui se bonifie avec le temps.",
      icon: Users
    },
    {
      title: "Innovation Respectueuse",
      description: "Nous embrassons les nouvelles technologies tout en préservant les méthodes artisanales qui font notre réputation.",
      icon: Award
    }
  ]

  return (
    <section id="histoire" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--m2ks-blue)' }}>
            Notre Histoire
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            L'aventure M2KS : une famille, une passion, une exigence. 
            Découvrez comment quatre prénoms sont devenus synonymes d'excellence technique.
          </p>
        </motion.div>

        {/* Timeline Interactive */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12" style={{ color: 'var(--m2ks-blue)' }}>
            Notre Évolution
          </h3>
          
          {/* Timeline Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4 bg-gray-100 rounded-full p-2">
              {timeline.map((item) => (
                <button
                  key={item.year}
                  onClick={() => setActiveYear(item.year)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeYear === item.year
                      ? 'text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  style={{
                    backgroundColor: activeYear === item.year ? 'var(--m2ks-green)' : 'transparent'
                  }}
                >
                  {item.year}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Content */}
          <div className="relative">
            {timeline.map((item) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ 
                    opacity: activeYear === item.year ? 1 : 0.3,
                    x: activeYear === item.year ? 0 : -20,
                    scale: activeYear === item.year ? 1 : 0.95
                  }}
                  transition={{ duration: 0.5 }}
                  className={`flex items-center mb-8 ${
                    activeYear === item.year ? 'z-10' : 'z-0'
                  }`}
                >
                  <div 
                    className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center mr-6"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <IconComponent 
                      className="h-8 w-8" 
                      style={{ color: item.color }}
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 
                      className="text-2xl font-bold mb-2"
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Équipe Familiale */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12" style={{ color: 'var(--m2ks-blue)' }}>
            Rencontrez Notre Équipe Familiale
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2" style={{ color: 'var(--m2ks-blue)' }}>
                    {member.name}
                  </h4>
                  <p className="text-sm font-semibold mb-3" style={{ color: 'var(--m2ks-green)' }}>
                    {member.role}
                  </p>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Spécialités
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Nos Valeurs */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12" style={{ color: 'var(--m2ks-blue)' }}>
            Nos Valeurs Fondamentales
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-6 flex justify-center">
                    <div 
                      className="p-4 rounded-full"
                      style={{ backgroundColor: 'var(--m2ks-green)15' }}
                    >
                      <IconComponent 
                        className="h-8 w-8" 
                        style={{ color: 'var(--m2ks-green)' }}
                      />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-4" style={{ color: 'var(--m2ks-blue)' }}>
                    {value.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Zones d'Intervention */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center p-8 rounded-2xl"
          style={{ backgroundColor: 'var(--m2ks-blue)' }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Nos Zones d'Intervention
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4" style={{ color: 'var(--m2ks-green)' }} />
              <h4 className="text-xl font-bold text-white mb-2">Nord</h4>
              <p className="text-gray-200">Lille, Valenciennes, Dunkerque et région</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4" style={{ color: 'var(--m2ks-green)' }} />
              <h4 className="text-xl font-bold text-white mb-2">Île-de-France</h4>
              <p className="text-gray-200">Paris et toute la région parisienne</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4" style={{ color: 'var(--m2ks-green)' }} />
              <h4 className="text-xl font-bold text-white mb-2">Benelux</h4>
              <p className="text-gray-200">Belgique, Pays-Bas, Luxembourg</p>
            </div>
          </div>
          <p className="text-xl text-gray-200 mb-6">
            Une couverture géographique étendue pour vous servir au plus près
          </p>
          <Button 
            size="lg"
            className="text-white"
            style={{ backgroundColor: 'var(--m2ks-green)' }}
          >
            Vérifier votre zone
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default NotreHistoire

