import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const services = [
    { id: 'refrigeration', name: 'Réfrigération', duration: '2h', price: 'Devis gratuit' },
    { id: 'energie', name: 'Énergie & Confort', duration: '1h30', price: 'Audit gratuit' },
    { id: 'concept', name: 'Concept & Agencement', duration: '1h', price: 'Consultation gratuite' },
    { id: 'maintenance', name: 'Maintenance préventive', duration: '1h', price: 'À partir de 120€' },
    { id: 'urgence', name: 'Dépannage urgent', duration: '30min', price: 'Intervention 7j/7' }
  ]

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30'
  ]

  const generateAvailableDates = () => {
    const dates = []
    const today = new Date()
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      
      // Skip weekends for non-urgent services
      if (selectedService !== 'urgence' && (date.getDay() === 0 || date.getDay() === 6)) {
        continue
      }
      
      dates.push({
        date: date.toISOString().split('T')[0],
        display: date.toLocaleDateString('fr-FR', { 
          weekday: 'long', 
          day: 'numeric', 
          month: 'long' 
        })
      })
    }
    
    return dates.slice(0, 10)
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSuccess(true)
    
    // Auto close after success
    setTimeout(() => {
      onClose()
      resetForm()
    }, 3000)
  }

  const resetForm = () => {
    setStep(1)
    setSelectedService('')
    setSelectedDate('')
    setSelectedTime('')
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      message: ''
    })
    setIsSuccess(false)
  }

  const handleClose = () => {
    onClose()
    setTimeout(resetForm, 300)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={handleClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div 
            className="p-6 text-white flex items-center justify-between"
            style={{ backgroundColor: 'var(--m2ks-blue)' }}
          >
            <div className="flex items-center space-x-3">
              <Calendar className="h-6 w-6" />
              <div>
                <h2 className="text-xl font-bold">Prendre Rendez-vous</h2>
                <p className="text-blue-100">Planifiez votre intervention M2KS</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
              onClick={handleClose}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="px-6 py-4 bg-gray-50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Étape {step} sur 4
              </span>
              <span className="text-sm font-medium" style={{ color: 'var(--m2ks-green)' }}>
                {Math.round((step / 4) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 rounded-full transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--m2ks-green)',
                  width: `${(step / 4) * 100}%`
                }}
              ></div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <CheckCircle className="h-16 w-16 mx-auto mb-4" style={{ color: 'var(--m2ks-green)' }} />
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--m2ks-blue)' }}>
                  Rendez-vous Confirmé !
                </h3>
                <p className="text-gray-600 mb-6">
                  Votre demande a été enregistrée. Nous vous contacterons sous 24h pour confirmer les détails.
                </p>
                <div className="bg-green-50 rounded-lg p-4 text-left">
                  <h4 className="font-semibold mb-2">Récapitulatif :</h4>
                  <p><strong>Service :</strong> {services.find(s => s.id === selectedService)?.name}</p>
                  <p><strong>Date :</strong> {new Date(selectedDate).toLocaleDateString('fr-FR', { 
                    weekday: 'long', 
                    day: 'numeric', 
                    month: 'long' 
                  })}</p>
                  <p><strong>Heure :</strong> {selectedTime}</p>
                  <p><strong>Contact :</strong> {formData.firstName} {formData.lastName}</p>
                </div>
              </motion.div>
            ) : (
              <>
                {/* Step 1: Service Selection */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--m2ks-blue)' }}>
                      Quel service vous intéresse ?
                    </h3>
                    <div className="space-y-3">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => setSelectedService(service.id)}
                          className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left hover:shadow-md ${
                            selectedService === service.id
                              ? 'border-green-500 bg-green-50'
                              : 'border-gray-200 hover:border-green-300'
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-gray-800">{service.name}</h4>
                              <p className="text-sm text-gray-600 mt-1">
                                Durée : {service.duration}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium" style={{ color: 'var(--m2ks-green)' }}>
                                {service.price}
                              </p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Date Selection */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--m2ks-blue)' }}>
                      Choisissez une date
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {generateAvailableDates().map((dateOption) => (
                        <button
                          key={dateOption.date}
                          onClick={() => setSelectedDate(dateOption.date)}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 text-left hover:shadow-md ${
                            selectedDate === dateOption.date
                              ? 'border-green-500 bg-green-50'
                              : 'border-gray-200 hover:border-green-300'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <Calendar className="h-5 w-5 text-gray-400" />
                            <span className="font-medium capitalize">{dateOption.display}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Time Selection */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--m2ks-blue)' }}>
                      Choisissez un créneau
                    </h3>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-lg border-2 transition-all duration-300 text-center hover:shadow-md ${
                            selectedTime === time
                              ? 'border-green-500 bg-green-50'
                              : 'border-gray-200 hover:border-green-300'
                          }`}
                        >
                          <div className="flex items-center justify-center space-x-2">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span className="font-medium">{time}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Contact Information */}
                {step === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--m2ks-blue)' }}>
                      Vos coordonnées
                    </h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Prénom *
                          </label>
                          <input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="Votre prénom"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nom *
                          </label>
                          <input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="Votre nom"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="votre@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="06 12 34 56 78"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Adresse d'intervention
                        </label>
                        <input
                          type="text"
                          value={formData.address}
                          onChange={(e) => setFormData({...formData, address: e.target.value})}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Adresse complète"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message (optionnel)
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          rows={3}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Décrivez votre besoin..."
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </>
            )}
          </div>

          {/* Footer */}
          {!isSuccess && (
            <div className="p-6 bg-gray-50 flex justify-between">
              <Button
                variant="outline"
                onClick={() => step > 1 ? setStep(step - 1) : handleClose()}
                disabled={isSubmitting}
              >
                {step === 1 ? 'Annuler' : 'Précédent'}
              </Button>

              <Button
                onClick={() => {
                  if (step === 4) {
                    handleSubmit()
                  } else {
                    setStep(step + 1)
                  }
                }}
                disabled={
                  isSubmitting ||
                  (step === 1 && !selectedService) ||
                  (step === 2 && !selectedDate) ||
                  (step === 3 && !selectedTime) ||
                  (step === 4 && (!formData.firstName || !formData.lastName || !formData.email || !formData.phone))
                }
                className="text-white"
                style={{ backgroundColor: 'var(--m2ks-green)' }}
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Confirmation...</span>
                  </div>
                ) : step === 4 ? (
                  'Confirmer le RDV'
                ) : (
                  'Suivant'
                )}
              </Button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default BookingModal

