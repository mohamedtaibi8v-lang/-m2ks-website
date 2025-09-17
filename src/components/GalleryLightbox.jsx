import React, { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn, Download, Share2, Filter, Grid, List } from 'lucide-react'

const GalleryLightbox = ({ images = [], categories = [] }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [filteredImages, setFilteredImages] = useState(images)

  // Images d'exemple pour la galerie M2KS
  const defaultImages = [
    {
      id: 1,
      src: '/src/assets/hero-m2ks.jpg',
      title: 'Boulangerie Artisanale - Lille',
      category: 'refrigeration',
      description: 'Installation complète de chambres froides et vitrines réfrigérées pour une boulangerie artisanale.',
      location: 'Lille, Nord',
      year: '2024',
      tags: ['Chambre froide', 'Vitrine réfrigérée', 'CHR'],
      beforeAfter: false
    },
    {
      id: 2,
      src: '/src/assets/team-mohamed.jpg',
      title: 'Bureaux Tertiaires - Paris',
      category: 'energy',
      description: 'Système de climatisation et ventilation pour 500m² de bureaux avec pompe à chaleur haute performance.',
      location: 'Paris, Île-de-France',
      year: '2024',
      tags: ['Climatisation', 'PAC', 'Domotique'],
      beforeAfter: true
    },
    {
      id: 3,
      src: '/src/assets/team-karima.jpg',
      title: 'Appartement Familial - Bruxelles',
      category: 'concept',
      description: 'Rénovation complète avec cuisine sur-mesure et dressings intégrés.',
      location: 'Bruxelles, Belgique',
      year: '2024',
      tags: ['Cuisine', 'Dressing', 'Rénovation'],
      beforeAfter: false
    },
    {
      id: 4,
      src: '/src/assets/team-kais.jpg',
      title: 'Restaurant Gastronomique - Lille',
      category: 'refrigeration',
      description: 'Cuisine professionnelle avec système de réfrigération intégré et ventilation optimisée.',
      location: 'Lille, Nord',
      year: '2023',
      tags: ['Cuisine pro', 'Réfrigération', 'Ventilation'],
      beforeAfter: true
    },
    {
      id: 5,
      src: '/src/assets/team-soulayman.jpg',
      title: 'Maison Passive - Tourcoing',
      category: 'energy',
      description: 'Installation pompe à chaleur géothermique avec système domotique complet.',
      location: 'Tourcoing, Nord',
      year: '2023',
      tags: ['Géothermie', 'Domotique', 'Maison passive'],
      beforeAfter: false
    },
    {
      id: 6,
      src: '/src/assets/hero-m2ks.jpg',
      title: 'Showroom Automobile - Paris',
      category: 'concept',
      description: 'Agencement complet avec éclairage LED et climatisation discrète.',
      location: 'Paris, Île-de-France',
      year: '2023',
      tags: ['Showroom', 'Éclairage', 'Climatisation'],
      beforeAfter: true
    }
  ]

  const defaultCategories = [
    { id: 'all', name: 'Toutes les réalisations', count: defaultImages.length },
    { id: 'refrigeration', name: 'Réfrigération', count: defaultImages.filter(img => img.category === 'refrigeration').length },
    { id: 'energy', name: 'Énergie & Confort', count: defaultImages.filter(img => img.category === 'energy').length },
    { id: 'concept', name: 'Concept & Agencement', count: defaultImages.filter(img => img.category === 'concept').length }
  ]

  const galleryImages = images.length > 0 ? images : defaultImages
  const galleryCategories = categories.length > 0 ? categories : defaultCategories

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredImages(galleryImages)
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === selectedCategory))
    }
  }, [selectedCategory, galleryImages])

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setIsOpen(false)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? filteredImages.length - 1 : prevIndex - 1
    )
  }

  const handleKeyDown = (e) => {
    if (!isOpen) return
    
    switch (e.key) {
      case 'Escape':
        closeLightbox()
        break
      case 'ArrowRight':
        nextImage()
        break
      case 'ArrowLeft':
        prevImage()
        break
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const downloadImage = () => {
    const link = document.createElement('a')
    link.href = filteredImages[currentIndex].src
    link.download = `m2ks-${filteredImages[currentIndex].title.toLowerCase().replace(/\s+/g, '-')}.jpg`
    link.click()
  }

  const shareImage = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: filteredImages[currentIndex].title,
          text: filteredImages[currentIndex].description,
          url: window.location.href
        })
      } catch (err) {
        console.log('Erreur lors du partage:', err)
      }
    } else {
      // Fallback pour les navigateurs qui ne supportent pas l'API Web Share
      navigator.clipboard.writeText(window.location.href)
      alert('Lien copié dans le presse-papiers !')
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'refrigeration': return 'bg-blue-100 text-blue-800'
      case 'energy': return 'bg-green-100 text-green-800'
      case 'concept': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const renderGridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredImages.map((image, index) => (
        <div 
          key={image.id}
          className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
          onClick={() => openLightbox(index)}
        >
          <div className="relative overflow-hidden">
            <img 
              src={image.src} 
              alt={image.title}
              loading="lazy"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {image.beforeAfter && (
              <div className="absolute top-3 right-3 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                Avant/Après
              </div>
            )}
            <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(image.category)}`}>
              {galleryCategories.find(cat => cat.id === image.category)?.name || image.category}
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{image.title}</h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{image.description}</p>
            
            <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
              <span>{image.location}</span>
              <span>{image.year}</span>
            </div>
            
            <div className="flex flex-wrap gap-1">
              {image.tags.slice(0, 3).map((tag, tagIndex) => (
                <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                  {tag}
                </span>
              ))}
              {image.tags.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                  +{image.tags.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  const renderListView = () => (
    <div className="space-y-6">
      {filteredImages.map((image, index) => (
        <div 
          key={image.id}
          className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
          onClick={() => openLightbox(index)}
        >
          <div className="flex flex-col md:flex-row">
            <div className="relative md:w-80 h-48 md:h-auto overflow-hidden">
              <img 
                src={image.src} 
                alt={image.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            
            <div className="flex-1 p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900">{image.title}</h3>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(image.category)}`}>
                  {galleryCategories.find(cat => cat.id === image.category)?.name || image.category}
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{image.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span className="font-medium">{image.location}</span>
                <span>{image.year}</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {image.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header avec filtres */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Nos Réalisations</h2>
            <p className="text-gray-600">Découvrez nos projets récents et notre savoir-faire technique</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Filtres par catégorie */}
        <div className="flex flex-wrap gap-3">
          {galleryCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Galerie */}
      {filteredImages.length > 0 ? (
        viewMode === 'grid' ? renderGridView() : renderListView()
      ) : (
        <div className="text-center py-12">
          <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Aucune réalisation trouvée</h3>
          <p className="text-gray-600">Essayez de sélectionner une autre catégorie</p>
        </div>
      )}

      {/* Lightbox */}
      {isOpen && filteredImages.length > 0 && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Image principale */}
            <div className="relative max-w-4xl max-h-full">
              <img 
                src={filteredImages[currentIndex].src}
                alt={filteredImages[currentIndex].title}
                loading="lazy"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            {/* Contrôles */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Actions */}
            <div className="absolute bottom-4 left-4 flex gap-2">
              <button
                onClick={downloadImage}
                className="p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors"
              >
                <Download className="w-5 h-5" />
              </button>
              <button
                onClick={shareImage}
                className="p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
            
            {/* Informations */}
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded-lg max-w-md">
              <h3 className="text-lg font-semibold mb-1">{filteredImages[currentIndex].title}</h3>
              <p className="text-sm text-gray-300 mb-2">{filteredImages[currentIndex].description}</p>
              <div className="flex items-center justify-between text-sm">
                <span>{filteredImages[currentIndex].location}</span>
                <span>{filteredImages[currentIndex].year}</span>
              </div>
            </div>
            
            {/* Compteur */}
            <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GalleryLightbox

