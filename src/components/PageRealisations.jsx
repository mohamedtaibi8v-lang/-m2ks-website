import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Filter, MapPin, Calendar, Eye, ExternalLink } from 'lucide-react'

const PageRealisations = ({ onBookingClick }) => {
  const [activeFilter, setActiveFilter] = useState('tous')
  const [viewMode, setViewMode] = useState('grid') // grid ou list

  const categories = [
    { id: 'tous', name: 'Tous les projets', count: 12 },
    { id: 'refrigeration', name: 'Réfrigération', count: 5 },
    { id: 'energie', name: 'Énergie & Confort', count: 4 },
    { id: 'concept', name: 'Concept & Agencement', count: 3 }
  ]

  const realisations = [
    {
      id: 1,
      title: "Boulangerie Artisanale - Lille",
      category: "refrigeration",
      location: "Lille, Nord",
      year: "2024",
      description: "Installation complète de chambres froides et vitrines réfrigérées pour une boulangerie artisanale. Système de refroidissement optimisé pour la conservation des produits frais.",
      tags: ["Chambre froide", "Vitrine réfrigérée", "CHR"],
      image: "/api/placeholder/400/300",
      details: "Projet de 3 semaines incluant l'installation de 2 chambres froides (positive et négative), 4 vitrines réfrigérées et un système de surveillance température 24h/24.",
      client: "Boulangerie des Saveurs",
      surface: "120m²",
      budget: "45 000€"
    },
    {
      id: 2,
      title: "Bureaux Tertiaires - Paris",
      category: "energie",
      location: "Paris, Île-de-France",
      year: "2024",
      description: "Système de climatisation et ventilation pour 500m² de bureaux. Pompe à chaleur haute performance avec domotique intégrée pour un confort optimal.",
      tags: ["Climatisation", "PAC", "Domotique"],
      image: "/api/placeholder/400/300",
      details: "Installation d'un système VRV avec 12 unités intérieures, pompe à chaleur air/eau 25kW et système de gestion centralisée.",
      client: "Cabinet d'Architectes Martin",
      surface: "500m²",
      budget: "85 000€"
    },
    {
      id: 3,
      title: "Appartement Familial - Bruxelles",
      category: "concept",
      location: "Bruxelles, Belgique",
      year: "2024",
      description: "Rénovation complète avec cuisine sur-mesure et dressings intégrés. Cloisonnements techniques et optimisation des espaces pour une famille de 4 personnes.",
      tags: ["Cuisine", "Dressing", "Rénovation"],
      image: "/api/placeholder/400/300",
      details: "Rénovation complète d'un appartement de 140m² avec création d'une cuisine ouverte, 3 dressings sur-mesure et optimisation des espaces de vie.",
      client: "Famille Dubois",
      surface: "140m²",
      budget: "65 000€"
    },
    {
      id: 4,
      title: "Restaurant Gastronomique - Valenciennes",
      category: "refrigeration",
      location: "Valenciennes, Nord",
      year: "2024",
      description: "Cuisine professionnelle complète avec chambres froides, plan de travail réfrigéré et système de conservation sous-vide.",
      tags: ["Cuisine pro", "Chambre froide", "Conservation"],
      image: "/api/placeholder/400/300",
      details: "Installation d'une cuisine professionnelle de 80m² avec 3 chambres froides, îlot central réfrigéré et système de traçabilité HACCP.",
      client: "Restaurant Le Gourmet",
      surface: "80m²",
      budget: "120 000€"
    },
    {
      id: 5,
      title: "Maison Passive - Dunkerque",
      category: "energie",
      location: "Dunkerque, Nord",
      year: "2023",
      description: "Maison passive avec pompe à chaleur géothermique, VMC double flux et système de récupération d'eau de pluie.",
      tags: ["Géothermie", "VMC", "Passive"],
      image: "/api/placeholder/400/300",
      details: "Maison BBC de 180m² avec pompe à chaleur géothermique 12kW, VMC double flux haut rendement et système domotique KNX.",
      client: "Famille Leroy",
      surface: "180m²",
      budget: "95 000€"
    },
    {
      id: 6,
      title: "Showroom Automobile - Roubaix",
      category: "concept",
      location: "Roubaix, Nord",
      year: "2023",
      description: "Aménagement complet d'un showroom automobile avec éclairage LED, cloisons vitrées et espace d'accueil moderne.",
      tags: ["Showroom", "Éclairage", "Aménagement"],
      image: "/api/placeholder/400/300",
      details: "Aménagement de 400m² avec éclairage LED sur rails, cloisons vitrées modulaires et espace d'accueil avec mobilier sur-mesure.",
      client: "Concession Auto Plus",
      surface: "400m²",
      budget: "75 000€"
    }
  ]

  const filteredRealisations = activeFilter === 'tous' 
    ? realisations 
    : realisations.filter(item => item.category === activeFilter)

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
              Nos Réalisations
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Découvrez nos projets récents et l'excellence technique M2KS à travers nos interventions dans le Nord, l'Île-de-France et le Benelux
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span className="font-semibold">12+</span> Projets réalisés
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span className="font-semibold">3</span> Zones d'intervention
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span className="font-semibold">100%</span> Sans sous-traitance
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filtres et Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Filtres par catégorie */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Mode d'affichage */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                {filteredRealisations.length} projet{filteredRealisations.length > 1 ? 's' : ''}
              </span>
              <div className="flex border rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1 text-sm ${
                    viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
                  }`}
                >
                  Grille
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-1 text-sm ${
                    viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
                  }`}
                >
                  Liste
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie de Réalisations */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            : "space-y-8"
          }>
            {filteredRealisations.map((projet, index) => (
              <motion.div
                key={projet.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${viewMode === 'list' ? 'w-1/3' : 'h-64'} bg-gray-200`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {categories.find(c => c.id === projet.category)?.name}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {projet.location}
                    </div>
                    <div className="flex items-center text-sm mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {projet.year}
                    </div>
                  </div>
                </div>

                {/* Contenu */}
                <div className={`p-6 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {projet.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {projet.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projet.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Détails projet */}
                  {viewMode === 'list' && (
                    <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-500">Client:</span>
                        <div className="font-medium">{projet.client}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Surface:</span>
                        <div className="font-medium">{projet.surface}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Budget:</span>
                        <div className="font-medium">{projet.budget}</div>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Voir le projet
                    </Button>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={onBookingClick}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Projet similaire
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Votre Projet Mérite l'Excellence M2KS
            </h2>
            <p className="text-xl mb-8">
              Chaque réalisation reflète notre engagement : l'exigence technique, la fiabilité et l'authenticité d'une entreprise familiale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={onBookingClick}
              >
                Planifier un Rendez-vous
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900"
                onClick={() => window.open('tel:0374474829')}
              >
                Appeler : 03 74 47 48 29
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PageRealisations

