import React, { useState, useEffect } from 'react'
import { MapPin, Clock, Phone, Navigation, Filter, Search, Calendar } from 'lucide-react'

const InterventionMap = () => {
  const [selectedZone, setSelectedZone] = useState('all')
  const [selectedService, setSelectedService] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [interventions, setInterventions] = useState([])
  const [filteredInterventions, setFilteredInterventions] = useState([])

  // Données d'exemple des interventions récentes
  const mockInterventions = [
    {
      id: 1,
      client: "Boulangerie Martin",
      adresse: "15 Rue de la Paix, 59000 Lille",
      service: "Réfrigération",
      type: "Maintenance préventive",
      date: "2024-09-15",
      heure: "09:00",
      statut: "Terminé",
      zone: "Nord",
      coordonnees: { lat: 50.6292, lng: 3.0573 },
      technicien: "Mohamed T.",
      duree: "2h30",
      satisfaction: 5
    },
    {
      id: 2,
      client: "Restaurant Le Gourmet",
      adresse: "42 Avenue des Champs, 75008 Paris",
      service: "Climatisation",
      type: "Dépannage urgence",
      date: "2024-09-14",
      heure: "14:30",
      statut: "En cours",
      zone: "Île-de-France",
      coordonnees: { lat: 48.8566, lng: 2.3522 },
      technicien: "Équipe Paris",
      duree: "1h45",
      satisfaction: null
    },
    {
      id: 3,
      client: "Pharmacie Centrale",
      adresse: "8 Place du Marché, 1000 Bruxelles",
      service: "Concept",
      type: "Agencement",
      date: "2024-09-13",
      heure: "10:00",
      statut: "Planifié",
      zone: "Belgique",
      coordonnees: { lat: 50.8503, lng: 4.3517 },
      technicien: "Mohamed T.",
      duree: "4h00",
      satisfaction: null
    },
    {
      id: 4,
      client: "Supermarché Fresh",
      adresse: "67 Rue du Commerce, 59200 Tourcoing",
      service: "Réfrigération",
      type: "Installation",
      date: "2024-09-12",
      heure: "08:00",
      statut: "Terminé",
      zone: "Nord",
      coordonnees: { lat: 50.7236, lng: 3.1609 },
      technicien: "Équipe Nord",
      duree: "6h15",
      satisfaction: 5
    },
    {
      id: 5,
      client: "Hôtel Business",
      adresse: "23 Boulevard Haussmann, 75009 Paris",
      service: "Énergie",
      type: "Audit énergétique",
      date: "2024-09-11",
      heure: "13:00",
      statut: "Terminé",
      zone: "Île-de-France",
      coordonnees: { lat: 48.8738, lng: 2.3364 },
      technicien: "Expert Énergie",
      duree: "3h20",
      satisfaction: 4
    }
  ]

  const zones = [
    { id: 'all', name: 'Toutes les zones', color: 'gray' },
    { id: 'Nord', name: 'Nord (59-62)', color: 'blue' },
    { id: 'Île-de-France', name: 'Île-de-France', color: 'green' },
    { id: 'Belgique', name: 'Belgique', color: 'purple' }
  ]

  const services = [
    { id: 'all', name: 'Tous les services' },
    { id: 'Réfrigération', name: 'Réfrigération' },
    { id: 'Climatisation', name: 'Climatisation' },
    { id: 'Énergie', name: 'Énergie & Confort' },
    { id: 'Concept', name: 'Concept & Agencement' }
  ]

  useEffect(() => {
    setInterventions(mockInterventions)
  }, [])

  useEffect(() => {
    let filtered = interventions

    if (selectedZone !== 'all') {
      filtered = filtered.filter(intervention => intervention.zone === selectedZone)
    }

    if (selectedService !== 'all') {
      filtered = filtered.filter(intervention => intervention.service === selectedService)
    }

    if (searchTerm) {
      filtered = filtered.filter(intervention => 
        intervention.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        intervention.adresse.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFilteredInterventions(filtered)
  }, [interventions, selectedZone, selectedService, searchTerm])

  const getStatusColor = (statut) => {
    switch (statut) {
      case 'Terminé': return 'bg-green-100 text-green-800'
      case 'En cours': return 'bg-blue-100 text-blue-800'
      case 'Planifié': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getZoneColor = (zone) => {
    const zoneObj = zones.find(z => z.id === zone)
    return zoneObj ? zoneObj.color : 'gray'
  }

  const renderStars = (rating) => {
    if (!rating) return null
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
            ★
          </span>
        ))}
      </div>
    )
  }

  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    // Formule de Haversine simplifiée pour calculer la distance
    const R = 6371 // Rayon de la Terre en km
    const dLat = (lat2 - lat1) * Math.PI / 180
    const dLng = (lng2 - lng1) * Math.PI / 180
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    return Math.round(R * c)
  }

  const openInMaps = (adresse) => {
    const encodedAddress = encodeURIComponent(adresse)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank')
  }

  const callClient = (intervention) => {
    // Simulation d'un appel client
    alert(`Appel vers ${intervention.client} - ${intervention.adresse}`)
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Carte des Interventions M2KS</h2>
              <p className="text-blue-100">Suivi en temps réel de nos interventions</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{filteredInterventions.length}</div>
              <div className="text-sm text-blue-100">Interventions</div>
            </div>
          </div>
        </div>

        {/* Filtres */}
        <div className="p-6 bg-gray-50 border-b">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Search className="w-4 h-4 inline mr-1" />
                Rechercher
              </label>
              <input
                type="text"
                placeholder="Client ou adresse..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4 inline mr-1" />
                Zone d'intervention
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
              >
                {zones.map(zone => (
                  <option key={zone.id} value={zone.id}>{zone.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Filter className="w-4 h-4 inline mr-1" />
                Service
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
              >
                {services.map(service => (
                  <option key={service.id} value={service.id}>{service.name}</option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Navigation className="w-4 h-4 inline mr-2" />
                Optimiser tournée
              </button>
            </div>
          </div>
        </div>

        {/* Statistiques rapides */}
        <div className="p-6 bg-white border-b">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {filteredInterventions.filter(i => i.statut === 'Terminé').length}
              </div>
              <div className="text-sm text-gray-600">Terminées</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {filteredInterventions.filter(i => i.statut === 'En cours').length}
              </div>
              <div className="text-sm text-gray-600">En cours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">
                {filteredInterventions.filter(i => i.statut === 'Planifié').length}
              </div>
              <div className="text-sm text-gray-600">Planifiées</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {Math.round(filteredInterventions.reduce((acc, i) => acc + (i.satisfaction || 0), 0) / filteredInterventions.filter(i => i.satisfaction).length * 10) / 10 || 0}
              </div>
              <div className="text-sm text-gray-600">Satisfaction moy.</div>
            </div>
          </div>
        </div>

        {/* Liste des interventions */}
        <div className="p-6">
          <div className="space-y-4">
            {filteredInterventions.map(intervention => (
              <div key={intervention.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{intervention.client}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(intervention.statut)}`}>
                        {intervention.statut}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${getZoneColor(intervention.zone)}-100 text-${getZoneColor(intervention.zone)}-800`}>
                        {intervention.zone}
                      </span>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                          {intervention.adresse}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                          {intervention.date} à {intervention.heure}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-gray-400" />
                          Durée: {intervention.duree}
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div>
                          <span className="font-medium">Service:</span> {intervention.service}
                        </div>
                        <div>
                          <span className="font-medium">Type:</span> {intervention.type}
                        </div>
                        <div>
                          <span className="font-medium">Technicien:</span> {intervention.technicien}
                        </div>
                        {intervention.satisfaction && (
                          <div className="flex items-center">
                            <span className="font-medium mr-2">Satisfaction:</span>
                            {renderStars(intervention.satisfaction)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2 ml-4">
                    <button
                      onClick={() => openInMaps(intervention.adresse)}
                      className="flex items-center px-3 py-2 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      <Navigation className="w-4 h-4 mr-1" />
                      Itinéraire
                    </button>
                    
                    <button
                      onClick={() => callClient(intervention)}
                      className="flex items-center px-3 py-2 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-1" />
                      Appeler
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredInterventions.length === 0 && (
            <div className="text-center py-12">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Aucune intervention trouvée</h3>
              <p className="text-gray-600">Essayez de modifier vos filtres de recherche</p>
            </div>
          )}
        </div>

        {/* Zone de couverture */}
        <div className="p-6 bg-gray-50 border-t">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Zones de Couverture M2KS</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg border">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <h4 className="font-medium">Nord (59-62)</h4>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Lille, Tourcoing, Roubaix, Valenciennes, Douai, Arras, Calais, Dunkerque
              </p>
              <div className="text-xs text-blue-600">
                Intervention sous 2h • Maintenance 7j/7
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <h4 className="font-medium">Île-de-France</h4>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Paris, Boulogne, Neuilly, Créteil, Nanterre, Saint-Denis, Versailles
              </p>
              <div className="text-xs text-green-600">
                Intervention sous 4h • Équipe dédiée
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                <h4 className="font-medium">Belgique</h4>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Bruxelles, Anvers, Gand, Charleroi, Liège, Bruges, Namur
              </p>
              <div className="text-xs text-purple-600">
                Intervention planifiée • Partenaire local
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InterventionMap

