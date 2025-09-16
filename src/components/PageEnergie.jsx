import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  Zap, 
  Thermometer, 
  Wind, 
  Leaf, 
  Calculator,
  TrendingDown,
  Home,
  Building,
  CheckCircle,
  Award,
  Euro,
  Calendar
} from 'lucide-react'

const PageEnergie = () => {
  const [calculatorData, setCalculatorData] = useState({
    surface: '',
    currentHeating: 'gaz',
    currentBill: '',
    houseType: 'maison'
  })

  const [calculatorResult, setCalculatorResult] = useState(null)

  const solutions = [
    {
      title: "Pompes à Chaleur Air/Eau",
      description: "Solution polyvalente pour chauffage et eau chaude sanitaire. Performances optimales même par grand froid.",
      icon: Thermometer,
      benefits: [
        "COP jusqu'à 5,2 (500% de rendement)",
        "Éligible aux aides MaPrimeRénov'",
        "Réduction jusqu'à 70% des factures",
        "Compatible avec radiateurs existants"
      ],
      price: "À partir de 12 000€ TTC posée",
      color: "var(--m2ks-blue)"
    },
    {
      title: "Pompes à Chaleur Air/Air",
      description: "Climatisation réversible pour un confort optimal été comme hiver. Installation rapide et efficace.",
      icon: Wind,
      benefits: [
        "Chauffage et climatisation 2-en-1",
        "Installation sans gros travaux",
        "Contrôle zone par zone",
        "Technologie Inverter économique"
      ],
      price: "À partir de 3 500€ TTC posée",
      color: "var(--m2ks-green)"
    },
    {
      title: "Systèmes Hybrides",
      description: "Combinaison intelligente pompe à chaleur + chaudière pour une efficacité maximale.",
      icon: Zap,
      benefits: [
        "Optimisation automatique des sources",
        "Sécurité d'approvisionnement garantie",
        "Rendement optimal toute l'année",
        "Transition énergétique progressive"
      ],
      price: "À partir de 15 000€ TTC posée",
      color: "#f59e0b"
    }
  ]

  const certifications = [
    { name: "QualiPAC", description: "Qualification pour l'installation de pompes à chaleur" },
    { name: "FEEBAT", description: "Formation aux économies d'énergie dans le bâtiment" },
    { name: "RGE", description: "Reconnu Garant de l'Environnement" }
  ]

  const calculateSavings = () => {
    const surface = parseFloat(calculatorData.surface)
    const currentBill = parseFloat(calculatorData.currentBill)
    
    if (!surface || !currentBill) return

    // Calculs simplifiés pour la démonstration
    const consumptionPerM2 = currentBill / surface
    const pacEfficiency = calculatorData.currentHeating === 'electrique' ? 0.7 : 0.6
    const newBill = currentBill * (1 - pacEfficiency)
    const annualSavings = currentBill - newBill
    const co2Reduction = surface * 0.05 // kg CO2/m²/an

    setCalculatorResult({
      currentBill,
      newBill: Math.round(newBill),
      annualSavings: Math.round(annualSavings),
      co2Reduction: Math.round(co2Reduction),
      paybackTime: Math.round(12000 / annualSavings * 10) / 10
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-900 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Énergie & Confort
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Solutions énergétiques intelligentes pour votre confort et vos économies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Calculator className="mr-2 h-5 w-5" />
                Calculer mes économies
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-900">
                Audit énergétique gratuit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--m2ks-blue)' }}>
              Calculateur d'Économies
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez vos économies potentielles avec une pompe à chaleur
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Surface à chauffer (m²)
                </label>
                <input
                  type="number"
                  value={calculatorData.surface}
                  onChange={(e) => setCalculatorData({...calculatorData, surface: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Ex: 120"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Facture annuelle actuelle (€)
                </label>
                <input
                  type="number"
                  value={calculatorData.currentBill}
                  onChange={(e) => setCalculatorData({...calculatorData, currentBill: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Ex: 2000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Chauffage actuel
                </label>
                <select
                  value={calculatorData.currentHeating}
                  onChange={(e) => setCalculatorData({...calculatorData, currentHeating: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="gaz">Gaz naturel</option>
                  <option value="fioul">Fioul</option>
                  <option value="electrique">Électrique</option>
                  <option value="propane">Propane</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Type de logement
                </label>
                <select
                  value={calculatorData.houseType}
                  onChange={(e) => setCalculatorData({...calculatorData, houseType: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="maison">Maison individuelle</option>
                  <option value="appartement">Appartement</option>
                  <option value="bureau">Bureau/Local</option>
                </select>
              </div>
            </div>

            <div className="text-center mb-8">
              <Button 
                onClick={calculateSavings}
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Calculer mes économies
              </Button>
            </div>

            {calculatorResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-green-50 rounded-xl p-6"
              >
                <h3 className="text-2xl font-bold text-center mb-6" style={{ color: 'var(--m2ks-green)' }}>
                  Vos Économies Potentielles
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      {calculatorResult.currentBill}€
                    </div>
                    <div className="text-sm text-gray-600">Facture actuelle</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {calculatorResult.newBill}€
                    </div>
                    <div className="text-sm text-gray-600">Nouvelle facture</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {calculatorResult.annualSavings}€
                    </div>
                    <div className="text-sm text-gray-600">Économies/an</div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-green-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                    <div>
                      <Leaf className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <div className="font-semibold">Réduction CO₂</div>
                      <div className="text-lg text-green-600">{calculatorResult.co2Reduction} kg/an</div>
                    </div>
                    <div>
                      <TrendingDown className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <div className="font-semibold">Retour sur investissement</div>
                      <div className="text-lg text-blue-600">{calculatorResult.paybackTime} ans</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Demander un devis personnalisé
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--m2ks-blue)' }}>
              Nos Solutions Énergétiques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des technologies de pointe pour votre confort et vos économies d'énergie
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-6">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${solution.color}15` }}
                    >
                      <IconComponent 
                        className="h-8 w-8" 
                        style={{ color: solution.color }}
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--m2ks-blue)' }}>
                      {solution.title}
                    </h3>
                    <p className="text-gray-700 mb-6">
                      {solution.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-500">Prix indicatif</div>
                        <div className="text-lg font-bold" style={{ color: solution.color }}>
                          {solution.price}
                        </div>
                      </div>
                      <Button 
                        size="sm"
                        style={{ backgroundColor: solution.color }}
                        className="text-white"
                      >
                        En savoir plus
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--m2ks-blue)' }}>
              Certifications & Aides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos qualifications vous garantissent l'accès aux aides publiques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
              >
                <Award className="h-12 w-12 mx-auto mb-4" style={{ color: 'var(--m2ks-green)' }} />
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--m2ks-blue)' }}>
                  {cert.name}
                </h3>
                <p className="text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: 'var(--m2ks-blue)' }}>
              Aides Financières Disponibles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Euro className="h-8 w-8 mx-auto mb-2" style={{ color: 'var(--m2ks-green)' }} />
                <div className="font-semibold">MaPrimeRénov'</div>
                <div className="text-sm text-gray-600">Jusqu'à 4 000€</div>
              </div>
              <div className="text-center">
                <Euro className="h-8 w-8 mx-auto mb-2" style={{ color: 'var(--m2ks-green)' }} />
                <div className="font-semibold">CEE</div>
                <div className="text-sm text-gray-600">Jusqu'à 2 500€</div>
              </div>
              <div className="text-center">
                <Euro className="h-8 w-8 mx-auto mb-2" style={{ color: 'var(--m2ks-green)' }} />
                <div className="font-semibold">Éco-PTZ</div>
                <div className="text-sm text-gray-600">Jusqu'à 15 000€</div>
              </div>
              <div className="text-center">
                <Euro className="h-8 w-8 mx-auto mb-2" style={{ color: 'var(--m2ks-green)' }} />
                <div className="font-semibold">TVA réduite</div>
                <div className="text-sm text-gray-600">5,5% au lieu de 20%</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--m2ks-green)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Prêt à Réduire vos Factures ?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Bénéficiez d'un audit énergétique gratuit et découvrez vos économies potentielles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
                <Home className="mr-2 h-5 w-5" />
                Audit gratuit à domicile
              </Button>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
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

export default PageEnergie

