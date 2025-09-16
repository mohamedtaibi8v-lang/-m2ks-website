import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, MapPin, Calendar, Star } from 'lucide-react'

const Realisations = () => {
  const realisations = [
    {
      title: "Boulangerie Artisanale - Lille",
      category: "Réfrigération",
      location: "Lille, Nord",
      date: "2024",
      description: "Installation complète de chambres froides et vitrines réfrigérées pour une boulangerie artisanale. Système de refroidissement optimisé pour la conservation des produits frais.",
      image: "/api/placeholder/400/300",
      tags: ["Chambre froide", "Vitrine réfrigérée", "CHR"]
    },
    {
      title: "Bureaux Tertiaires - Paris",
      category: "Énergie & Confort",
      location: "Paris, Île-de-France",
      date: "2024",
      description: "Système de climatisation et ventilation pour 500m² de bureaux. Pompe à chaleur haute performance avec domotique intégrée pour un confort optimal.",
      image: "/api/placeholder/400/300",
      tags: ["Climatisation", "PAC", "Domotique"]
    },
    {
      title: "Appartement Familial - Bruxelles",
      category: "Concept & Agencement",
      location: "Bruxelles, Belgique",
      date: "2024",
      description: "Rénovation complète avec cuisine sur-mesure et dressings intégrés. Cloisonnements techniques et optimisation des espaces pour une famille de 4 personnes.",
      image: "/api/placeholder/400/300",
      tags: ["Cuisine", "Dressing", "Rénovation"]
    }
  ]

  const testimonials = [
    {
      name: "Marie Dubois",
      company: "Boulangerie des Saveurs",
      text: "M2KS a transformé notre boulangerie. Installation rapide, équipe professionnelle, et surtout un suivi irréprochable. Nos produits n'ont jamais été aussi bien conservés !",
      rating: 5
    },
    {
      name: "Jean-Pierre Martin",
      company: "Cabinet d'Architectes",
      text: "Intervention d'urgence un dimanche pour notre climatisation. Équipe réactive, diagnostic précis, réparation immédiate. C'est ça, le service M2KS !",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--m2ks-blue)' }}>
            Réalisations Récentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques-unes de nos interventions récentes. 
            Chaque projet reflète notre engagement pour l'excellence technique.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {realisations.map((projet, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--m2ks-blue)] to-[var(--m2ks-green)] opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">{projet.category.split(' ')[0]}</div>
                    <div className="text-sm opacity-90">{projet.category}</div>
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span 
                    className="px-3 py-1 text-xs font-semibold text-white rounded-full"
                    style={{ backgroundColor: 'var(--m2ks-green)' }}
                  >
                    {projet.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--m2ks-blue)' }}>
                  {projet.title}
                </h3>
                
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="mr-4">{projet.location}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{projet.date}</span>
                </div>

                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {projet.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {projet.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full group-hover:bg-[var(--m2ks-blue)] group-hover:text-white group-hover:border-[var(--m2ks-blue)] transition-all duration-300"
                >
                  Voir le projet
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-center mb-12" style={{ color: 'var(--m2ks-blue)' }}>
            Ils nous font confiance
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" style={{ color: 'var(--m2ks-green)' }} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold" style={{ color: 'var(--m2ks-blue)' }}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Prêt à rejoindre nos clients satisfaits ?
          </p>
          <Button 
            size="lg"
            className="text-white"
            style={{ backgroundColor: 'var(--m2ks-green)' }}
          >
            Voir toutes nos réalisations
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Realisations

