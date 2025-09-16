import React from 'react'
import { Eye, Shield, Target, Heart, Clock } from 'lucide-react'

const Engagements = () => {
  const engagements = [
    {
      icon: Eye,
      title: "Transparence",
      description: "Devis clairs, délais respectés, communication constante. Aucune surprise, que de la confiance."
    },
    {
      icon: Shield,
      title: "Fiabilité",
      description: "Interventions sans sous-traitance, équipe formée et certifiée. Votre tranquillité est garantie."
    },
    {
      icon: Target,
      title: "Exigence",
      description: "Pas les moins chers, mais les plus fiables. L'excellence technique avant tout."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "L'amour du travail bien fait, transmis de génération en génération dans notre famille."
    },
    {
      icon: Clock,
      title: "Pérennité",
      description: "Solutions durables, maintenance préventive, relation client sur le long terme."
    }
  ]

  return (
    <section className="py-20" style={{ backgroundColor: 'var(--m2ks-blue)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos Engagements
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Cinq valeurs qui guident chacune de nos interventions. 
            L'ADN d'une entreprise familiale au service de votre réussite.
          </p>
        </div>

        {/* Engagements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {engagements.map((engagement, index) => {
            const IconComponent = engagement.icon
            return (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div 
                    className="p-6 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300"
                  >
                    <IconComponent 
                      className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[var(--m2ks-green)] transition-colors duration-300">
                  {engagement.title}
                </h3>

                {/* Description */}
                <p className="text-gray-200 text-sm leading-relaxed">
                  {engagement.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16 max-w-4xl mx-auto">
          <blockquote className="text-2xl md:text-3xl font-light text-white italic leading-relaxed">
            "M2KS, c'est le choix de l'exigence. 
            <span className="block mt-2 font-normal" style={{ color: 'var(--m2ks-green)' }}>
              Mohamed, Karima, Kaïs, Soulayman : une promesse familiale."
            </span>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default Engagements

