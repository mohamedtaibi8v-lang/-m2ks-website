import React from 'react'
import { Button } from '@/components/ui/button'
import { Snowflake, Zap, Home, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Expertises = () => {
  const expertises = [
    {
      icon: Snowflake,
      title: "Réfrigération",
      subtitle: "Solutions professionnelles sur-mesure",
      description: "Dépannage urgent 7j/7, maintenance préventive et installations pour CHR, GMS, industrie agroalimentaire. Interventions multisites et contrats transparents.",
      features: [
        "Dépannage urgent 7j/7",
        "CHR, GMS, industrie agroalimentaire", 
        "Contrats de maintenance clairs",
        "Interventions multisites"
      ],
      color: "var(--m2ks-blue)"
    },
    {
      icon: Zap,
      title: "Énergie & Confort",
      subtitle: "Solutions énergétiques intelligentes",
      description: "Pompes à chaleur, climatisation, ventilation et audit énergétique. Solutions hybrides avec domotique pour un confort optimal et des économies durables.",
      features: [
        "Pompes à chaleur & climatisation",
        "Ventilation & qualité de l'air",
        "Audit énergétique global",
        "Solutions hybrides intelligentes"
      ],
      color: "var(--m2ks-green)"
    },
    {
      icon: Home,
      title: "Concept & Agencement",
      subtitle: "Design et technique sans compromis",
      description: "Cuisines professionnelles, dressings sur-mesure, cloisonnements techniques et rénovation complète. Alliance parfaite du design et de la technique.",
      features: [
        "Cuisines professionnelles",
        "Dressings et rangements intégrés",
        "Cloisonnements techniques",
        "Rénovation complète"
      ],
      color: "var(--m2ks-gray)"
    }
  ]

  return (
    <motion.section 
      className="py-20 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6" 
            style={{ color: 'var(--m2ks-blue)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Nos Expertises
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Trois pôles d'excellence pour répondre à tous vos besoins techniques. 
            Une approche intégrée, sans sous-traitance, pour votre tranquillité.
          </motion.p>
        </motion.div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {expertises.map((expertise, index) => {
            const IconComponent = expertise.icon
            return (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + (index * 0.2) }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Card Header */}
                <div className="p-8 pb-6">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="p-3 rounded-xl mr-4"
                      style={{ backgroundColor: `${expertise.color}15` }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: 1 + (index * 0.2) }}
                        viewport={{ once: true }}
                      >
                        <IconComponent 
                          className="h-8 w-8" 
                          style={{ color: expertise.color }}
                        />
                      </motion.div>
                    </motion.div>
                    <div>
                      <motion.h3 
                        className="text-2xl font-bold"
                        style={{ color: expertise.color }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 + (index * 0.2) }}
                        viewport={{ once: true }}
                      >
                        {expertise.title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-600 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 + (index * 0.2) }}
                        viewport={{ once: true }}
                      >
                        {expertise.subtitle}
                      </motion.p>
                    </div>
                  </div>
                  
                  <motion.p 
                    className="text-gray-700 mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 + (index * 0.2) }}
                    viewport={{ once: true }}
                  >
                    {expertise.description}
                  </motion.p>

                  {/* Features List */}
                  <motion.ul 
                    className="space-y-3 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.8 + (index * 0.2) }}
                    viewport={{ once: true }}
                  >
                    {expertise.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 2 + (index * 0.2) + (featureIndex * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                          style={{ backgroundColor: expertise.color }}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 2.2 + (index * 0.2) + (featureIndex * 0.1) }}
                          viewport={{ once: true }}
                        ></motion.div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {/* Card Footer */}
                <div className="px-8 pb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.4 + (index * 0.2) }}
                    viewport={{ once: true }}
                  >
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-[var(--m2ks-blue)] group-hover:text-white group-hover:border-[var(--m2ks-blue)] transition-all duration-300"
                    >
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-lg text-gray-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Besoin d'une solution sur-mesure combinant plusieurs expertises ?
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg"
              className="text-white transition-all duration-300"
              style={{ backgroundColor: 'var(--m2ks-green)' }}
            >
              Discutons de votre projet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Expertises

