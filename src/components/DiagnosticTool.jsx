import React, { useState, useEffect } from 'react'
import { Calculator, Thermometer, Zap, Home, TrendingUp, Download, MapPin } from 'lucide-react'

const DiagnosticTool = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Informations générales
    typeLogement: '',
    surface: '',
    anneeConstruction: '',
    nbOccupants: '',
    
    // Localisation
    ville: '',
    codePostal: '',
    orientation: '',
    
    // Chauffage actuel
    typeChauffage: '',
    energieActuelle: '',
    factureAnnuelle: '',
    
    // Isolation
    isolationCombles: '',
    isolationMurs: '',
    typeVitrage: '',
    
    // Besoins spécifiques
    climatisation: false,
    eauChaudeSanitaire: false,
    ventilation: false
  })
  
  const [results, setResults] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const calculateDiagnostic = () => {
    setIsCalculating(true)
    
    // Simulation de calcul complexe
    setTimeout(() => {
      const surface = parseFloat(formData.surface) || 100
      const factureActuelle = parseFloat(formData.factureAnnuelle) || 2000
      
      // Calculs basés sur des coefficients réalistes
      const coefficientIsolation = getIsolationCoefficient()
      const coefficientAge = getAgeCoefficient()
      const coefficientRegion = getRegionCoefficient()
      
      const consommationActuelle = factureActuelle / 0.15 // kWh estimé
      const consommationOptimisee = consommationActuelle * coefficientIsolation * coefficientAge * coefficientRegion
      
      const economiesAnnuelles = factureActuelle - (consommationOptimisee * 0.15)
      const investissementPAC = surface * 120 // Estimation PAC
      const aidesCEE = investissementPAC * 0.3 // 30% d'aides moyennes
      const retourInvestissement = (investissementPAC - aidesCEE) / economiesAnnuelles
      
      const emissionsCO2Actuelles = consommationActuelle * getEmissionFactorCO2()
      const emissionsCO2Futures = consommationOptimisee * 0.057 // PAC électrique
      const reductionCO2 = emissionsCO2Actuelles - emissionsCO2Futures
      
      setResults({
        consommationActuelle: Math.round(consommationActuelle),
        consommationOptimisee: Math.round(consommationOptimisee),
        economiesAnnuelles: Math.round(economiesAnnuelles),
        economiesPercentage: Math.round((economiesAnnuelles / factureActuelle) * 100),
        investissementPAC: Math.round(investissementPAC),
        aidesCEE: Math.round(aidesCEE),
        coutReel: Math.round(investissementPAC - aidesCEE),
        retourInvestissement: Math.round(retourInvestissement * 10) / 10,
        reductionCO2: Math.round(reductionCO2),
        classeDPE: getDPEClass(consommationOptimisee / surface),
        recommandations: getRecommendations()
      })
      
      setIsCalculating(false)
      setStep(5)
    }, 2000)
  }

  const getIsolationCoefficient = () => {
    let coeff = 1
    if (formData.isolationCombles === 'bonne') coeff *= 0.85
    if (formData.isolationMurs === 'bonne') coeff *= 0.9
    if (formData.typeVitrage === 'double') coeff *= 0.95
    if (formData.typeVitrage === 'triple') coeff *= 0.9
    return coeff
  }

  const getAgeCoefficient = () => {
    const annee = parseInt(formData.anneeConstruction)
    if (annee >= 2012) return 0.7 // RT2012
    if (annee >= 2005) return 0.8 // RT2005
    if (annee >= 1988) return 0.9 // RT1988
    return 1.1 // Ancien
  }

  const getRegionCoefficient = () => {
    const cp = formData.codePostal.substring(0, 2)
    // Zones climatiques simplifiées
    if (['06', '13', '83', '84'].includes(cp)) return 0.8 // Sud
    if (['59', '62', '80', '02'].includes(cp)) return 1.1 // Nord
    return 1 // Moyenne
  }

  const getEmissionFactorCO2 = () => {
    switch (formData.energieActuelle) {
      case 'gaz': return 0.227
      case 'fioul': return 0.324
      case 'electricite': return 0.057
      case 'bois': return 0.013
      default: return 0.2
    }
  }

  const getDPEClass = (consommation) => {
    if (consommation <= 50) return 'A'
    if (consommation <= 90) return 'B'
    if (consommation <= 150) return 'C'
    if (consommation <= 230) return 'D'
    if (consommation <= 330) return 'E'
    if (consommation <= 450) return 'F'
    return 'G'
  }

  const getRecommendations = () => {
    const reco = []
    
    if (formData.isolationCombles !== 'bonne') {
      reco.push({
        type: 'Isolation des combles',
        priorite: 'Haute',
        economie: '15-25%',
        cout: '20-40€/m²'
      })
    }
    
    if (formData.typeVitrage === 'simple') {
      reco.push({
        type: 'Remplacement des fenêtres',
        priorite: 'Moyenne',
        economie: '10-15%',
        cout: '300-800€/m²'
      })
    }
    
    reco.push({
      type: 'Installation PAC Air/Eau',
      priorite: 'Haute',
      economie: '40-60%',
      cout: '8000-15000€'
    })
    
    if (formData.ventilation === false) {
      reco.push({
        type: 'VMC Double Flux',
        priorite: 'Moyenne',
        economie: '5-10%',
        cout: '3000-6000€'
      })
    }
    
    return reco
  }

  const exportResults = () => {
    const reportData = {
      ...formData,
      ...results,
      dateGeneration: new Date().toLocaleDateString('fr-FR'),
      entreprise: 'M2KS - Diagnostic Énergétique'
    }
    
    const dataStr = JSON.stringify(reportData, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `diagnostic-energetique-m2ks-${Date.now()}.json`
    link.click()
  }

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <Home className="w-16 h-16 text-blue-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Informations sur votre logement</h3>
        <p className="text-gray-600">Commençons par les caractéristiques de base</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Type de logement</label>
          <select 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={formData.typeLogement}
            onChange={(e) => handleInputChange('typeLogement', e.target.value)}
          >
            <option value="">Sélectionnez</option>
            <option value="maison">Maison individuelle</option>
            <option value="appartement">Appartement</option>
            <option value="commerce">Local commercial</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Surface habitable (m²)</label>
          <input 
            type="number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={formData.surface}
            onChange={(e) => handleInputChange('surface', e.target.value)}
            placeholder="Ex: 120"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Année de construction</label>
          <input 
            type="number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={formData.anneeConstruction}
            onChange={(e) => handleInputChange('anneeConstruction', e.target.value)}
            placeholder="Ex: 1995"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nombre d'occupants</label>
          <input 
            type="number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={formData.nbOccupants}
            onChange={(e) => handleInputChange('nbOccupants', e.target.value)}
            placeholder="Ex: 4"
          />
        </div>
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Localisation et orientation</h3>
        <p className="text-gray-600">Ces informations influencent les besoins énergétiques</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Ville</label>
          <input 
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            value={formData.ville}
            onChange={(e) => handleInputChange('ville', e.target.value)}
            placeholder="Ex: Lille"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Code postal</label>
          <input 
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            value={formData.codePostal}
            onChange={(e) => handleInputChange('codePostal', e.target.value)}
            placeholder="Ex: 59000"
          />
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Orientation principale</label>
          <select 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            value={formData.orientation}
            onChange={(e) => handleInputChange('orientation', e.target.value)}
          >
            <option value="">Sélectionnez</option>
            <option value="nord">Nord</option>
            <option value="sud">Sud</option>
            <option value="est">Est</option>
            <option value="ouest">Ouest</option>
            <option value="sud-est">Sud-Est</option>
            <option value="sud-ouest">Sud-Ouest</option>
          </select>
        </div>
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <Thermometer className="w-16 h-16 text-orange-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Chauffage actuel</h3>
        <p className="text-gray-600">Analysons votre système existant</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Type de chauffage</label>
          <select 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
            value={formData.typeChauffage}
            onChange={(e) => handleInputChange('typeChauffage', e.target.value)}
          >
            <option value="">Sélectionnez</option>
            <option value="chaudiere-gaz">Chaudière gaz</option>
            <option value="chaudiere-fioul">Chaudière fioul</option>
            <option value="radiateurs-electriques">Radiateurs électriques</option>
            <option value="pompe-chaleur">Pompe à chaleur</option>
            <option value="poele-bois">Poêle à bois</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Énergie principale</label>
          <select 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
            value={formData.energieActuelle}
            onChange={(e) => handleInputChange('energieActuelle', e.target.value)}
          >
            <option value="">Sélectionnez</option>
            <option value="gaz">Gaz naturel</option>
            <option value="fioul">Fioul</option>
            <option value="electricite">Électricité</option>
            <option value="bois">Bois</option>
            <option value="propane">Propane</option>
          </select>
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Facture énergétique annuelle (€)</label>
          <input 
            type="number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
            value={formData.factureAnnuelle}
            onChange={(e) => handleInputChange('factureAnnuelle', e.target.value)}
            placeholder="Ex: 2500"
          />
          <p className="text-sm text-gray-500 mt-1">Chauffage + eau chaude sanitaire</p>
        </div>
      </div>
    </div>
  )

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <Home className="w-16 h-16 text-purple-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Isolation et équipements</h3>
        <p className="text-gray-600">État de l'isolation et besoins complémentaires</p>
      </div>
      
      <div className="space-y-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Isolation combles</label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              value={formData.isolationCombles}
              onChange={(e) => handleInputChange('isolationCombles', e.target.value)}
            >
              <option value="">Sélectionnez</option>
              <option value="inexistante">Inexistante</option>
              <option value="faible">Faible</option>
              <option value="correcte">Correcte</option>
              <option value="bonne">Bonne</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Isolation murs</label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              value={formData.isolationMurs}
              onChange={(e) => handleInputChange('isolationMurs', e.target.value)}
            >
              <option value="">Sélectionnez</option>
              <option value="inexistante">Inexistante</option>
              <option value="faible">Faible</option>
              <option value="correcte">Correcte</option>
              <option value="bonne">Bonne</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Type de vitrage</label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              value={formData.typeVitrage}
              onChange={(e) => handleInputChange('typeVitrage', e.target.value)}
            >
              <option value="">Sélectionnez</option>
              <option value="simple">Simple vitrage</option>
              <option value="double">Double vitrage</option>
              <option value="triple">Triple vitrage</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">Besoins complémentaires</label>
          <div className="space-y-3">
            <label className="flex items-center">
              <input 
                type="checkbox"
                className="mr-3 h-4 w-4 text-purple-600"
                checked={formData.climatisation}
                onChange={(e) => handleInputChange('climatisation', e.target.checked)}
              />
              <span>Climatisation / Rafraîchissement</span>
            </label>
            
            <label className="flex items-center">
              <input 
                type="checkbox"
                className="mr-3 h-4 w-4 text-purple-600"
                checked={formData.eauChaudeSanitaire}
                onChange={(e) => handleInputChange('eauChaudeSanitaire', e.target.checked)}
              />
              <span>Eau chaude sanitaire optimisée</span>
            </label>
            
            <label className="flex items-center">
              <input 
                type="checkbox"
                className="mr-3 h-4 w-4 text-purple-600"
                checked={formData.ventilation}
                onChange={(e) => handleInputChange('ventilation', e.target.checked)}
              />
              <span>Ventilation contrôlée (VMC)</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )

  const renderCalculating = () => (
    <div className="text-center py-12">
      <Calculator className="w-20 h-20 text-blue-600 mx-auto mb-6 animate-pulse" />
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Calcul en cours...</h3>
      <p className="text-gray-600 mb-6">Analyse de vos données et calcul des économies potentielles</p>
      <div className="w-64 bg-gray-200 rounded-full h-2 mx-auto">
        <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{width: '75%'}}></div>
      </div>
    </div>
  )

  const renderResults = () => (
    <div className="space-y-8">
      <div className="text-center">
        <TrendingUp className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-3xl font-bold text-gray-900 mb-2">Votre Diagnostic Énergétique</h3>
        <p className="text-gray-600">Analyse personnalisée par les experts M2KS</p>
      </div>
      
      {/* Résultats principaux */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-green-50 p-6 rounded-xl border border-green-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {results.economiesAnnuelles}€
            </div>
            <div className="text-sm text-green-700 font-medium mb-1">
              Économies annuelles
            </div>
            <div className="text-xs text-green-600">
              -{results.economiesPercentage}% sur votre facture
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {results.retourInvestissement} ans
            </div>
            <div className="text-sm text-blue-700 font-medium mb-1">
              Retour sur investissement
            </div>
            <div className="text-xs text-blue-600">
              Coût réel: {results.coutReel}€
            </div>
          </div>
        </div>
        
        <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {results.reductionCO2}kg
            </div>
            <div className="text-sm text-purple-700 font-medium mb-1">
              Réduction CO₂/an
            </div>
            <div className="text-xs text-purple-600">
              Nouvelle classe DPE: {results.classeDPE}
            </div>
          </div>
        </div>
      </div>
      
      {/* Recommandations */}
      <div className="bg-gray-50 p-6 rounded-xl">
        <h4 className="text-xl font-bold text-gray-900 mb-4">Nos Recommandations</h4>
        <div className="space-y-4">
          {results.recommandations.map((reco, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border">
              <div>
                <div className="font-medium text-gray-900">{reco.type}</div>
                <div className="text-sm text-gray-600">Économies: {reco.economie} • Coût: {reco.cout}</div>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                reco.priorite === 'Haute' ? 'bg-red-100 text-red-800' :
                reco.priorite === 'Moyenne' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {reco.priorite}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={exportResults}
          className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Download className="w-5 h-5 mr-2" />
          Télécharger le rapport
        </button>
        
        <button 
          onClick={() => window.location.href = '/contact'}
          className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Zap className="w-5 h-5 mr-2" />
          Demander un devis
        </button>
      </div>
    </div>
  )

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.typeLogement && formData.surface && formData.anneeConstruction
      case 2:
        return formData.ville && formData.codePostal
      case 3:
        return formData.typeChauffage && formData.energieActuelle && formData.factureAnnuelle
      case 4:
        return formData.isolationCombles && formData.isolationMurs && formData.typeVitrage
      default:
        return false
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header avec progression */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6 text-white">
          <h2 className="text-2xl font-bold mb-4">Diagnostic Énergétique M2KS</h2>
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNum ? 'bg-white text-blue-600' : 'bg-blue-500 text-white'
                }`}>
                  {stepNum}
                </div>
                {stepNum < 4 && <div className="w-8 h-1 bg-blue-400 mx-2"></div>}
              </div>
            ))}
          </div>
        </div>
        
        {/* Contenu */}
        <div className="p-8">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          {step === 4 && renderStep4()}
          {isCalculating && renderCalculating()}
          {results && renderResults()}
        </div>
        
        {/* Navigation */}
        {!isCalculating && !results && (
          <div className="flex justify-between p-6 bg-gray-50 border-t">
            <button 
              onClick={() => setStep(step - 1)}
              disabled={step === 1}
              className="px-6 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Précédent
            </button>
            
            {step < 4 ? (
              <button 
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Suivant
              </button>
            ) : (
              <button 
                onClick={calculateDiagnostic}
                disabled={!canProceed()}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Calculer mon diagnostic
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default DiagnosticTool

