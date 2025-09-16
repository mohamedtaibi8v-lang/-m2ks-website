import React, { useState, useEffect } from 'react'
import { trackM2KSEvents } from './Analytics'

// Configuration CRM
const CRM_CONFIG = {
  apiEndpoint: '/api/crm', // À adapter selon votre backend
  webhookUrl: '/api/webhook/leads', // Pour les intégrations externes
  enabled: true
}

const CRMIntegration = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [leadQueue, setLeadQueue] = useState([])

  useEffect(() => {
    // Vérifier la connexion CRM au chargement
    checkCRMConnection()
    
    // Traiter la queue des leads en attente
    processLeadQueue()
  }, [])

  const checkCRMConnection = async () => {
    try {
      const response = await fetch(`${CRM_CONFIG.apiEndpoint}/status`)
      setIsConnected(response.ok)
    } catch (error) {
      console.error('Erreur de connexion CRM:', error)
      setIsConnected(false)
    }
  }

  const processLeadQueue = () => {
    const storedLeads = localStorage.getItem('m2ks-lead-queue')
    if (storedLeads) {
      const leads = JSON.parse(storedLeads)
      setLeadQueue(leads)
      
      // Traiter chaque lead en attente
      leads.forEach(lead => {
        sendLeadToCRM(lead)
      })
    }
  }

  const sendLeadToCRM = async (leadData) => {
    try {
      const response = await fetch(`${CRM_CONFIG.apiEndpoint}/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData)
      })

      if (response.ok) {
        // Lead envoyé avec succès, le retirer de la queue
        removeFromQueue(leadData.id)
        console.log('Lead envoyé au CRM:', leadData.id)
      } else {
        throw new Error('Erreur lors de l\'envoi au CRM')
      }
    } catch (error) {
      console.error('Erreur CRM:', error)
      // Garder le lead en queue pour un nouvel essai
      addToQueue(leadData)
    }
  }

  const addToQueue = (leadData) => {
    const currentQueue = JSON.parse(localStorage.getItem('m2ks-lead-queue') || '[]')
    const existingIndex = currentQueue.findIndex(lead => lead.id === leadData.id)
    
    if (existingIndex === -1) {
      currentQueue.push(leadData)
      localStorage.setItem('m2ks-lead-queue', JSON.stringify(currentQueue))
      setLeadQueue(currentQueue)
    }
  }

  const removeFromQueue = (leadId) => {
    const currentQueue = JSON.parse(localStorage.getItem('m2ks-lead-queue') || '[]')
    const filteredQueue = currentQueue.filter(lead => lead.id !== leadId)
    localStorage.setItem('m2ks-lead-queue', JSON.stringify(filteredQueue))
    setLeadQueue(filteredQueue)
  }

  return null // Ce composant ne rend rien visuellement
}

// Fonctions utilitaires pour le CRM
export const createLead = async (formData, source = 'website') => {
  const leadData = {
    id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    timestamp: new Date().toISOString(),
    source: source,
    status: 'nouveau',
    ...formData
  }

  // Tracker l'événement
  trackM2KSEvents.contactFormSubmit(source)

  // Envoyer au CRM
  try {
    const response = await fetch(`${CRM_CONFIG.apiEndpoint}/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData)
    })

    if (response.ok) {
      console.log('Lead créé avec succès:', leadData.id)
      return { success: true, leadId: leadData.id }
    } else {
      throw new Error('Erreur lors de la création du lead')
    }
  } catch (error) {
    console.error('Erreur création lead:', error)
    
    // Ajouter à la queue pour un traitement ultérieur
    const currentQueue = JSON.parse(localStorage.getItem('m2ks-lead-queue') || '[]')
    currentQueue.push(leadData)
    localStorage.setItem('m2ks-lead-queue', JSON.stringify(currentQueue))
    
    return { success: false, error: error.message, leadId: leadData.id }
  }
}

export const createBooking = async (bookingData) => {
  const booking = {
    id: `booking_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    timestamp: new Date().toISOString(),
    type: 'rendez-vous',
    status: 'planifié',
    ...bookingData
  }

  // Tracker l'événement
  trackM2KSEvents.bookingFormSubmit(bookingData.service, bookingData.date)

  try {
    const response = await fetch(`${CRM_CONFIG.apiEndpoint}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(booking)
    })

    if (response.ok) {
      console.log('Rendez-vous créé avec succès:', booking.id)
      return { success: true, bookingId: booking.id }
    } else {
      throw new Error('Erreur lors de la création du rendez-vous')
    }
  } catch (error) {
    console.error('Erreur création rendez-vous:', error)
    return { success: false, error: error.message }
  }
}

export const updateLeadStatus = async (leadId, newStatus, notes = '') => {
  try {
    const response = await fetch(`${CRM_CONFIG.apiEndpoint}/leads/${leadId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: newStatus,
        notes: notes,
        updatedAt: new Date().toISOString()
      })
    })

    if (response.ok) {
      console.log('Statut lead mis à jour:', leadId, newStatus)
      return { success: true }
    } else {
      throw new Error('Erreur lors de la mise à jour du statut')
    }
  } catch (error) {
    console.error('Erreur mise à jour lead:', error)
    return { success: false, error: error.message }
  }
}

export const getLeadHistory = async (leadId) => {
  try {
    const response = await fetch(`${CRM_CONFIG.apiEndpoint}/leads/${leadId}/history`)
    
    if (response.ok) {
      const history = await response.json()
      return { success: true, history }
    } else {
      throw new Error('Erreur lors de la récupération de l\'historique')
    }
  } catch (error) {
    console.error('Erreur historique lead:', error)
    return { success: false, error: error.message }
  }
}

// Intégrations spécifiques
export const integrations = {
  // Intégration email (exemple avec un service comme SendGrid)
  sendWelcomeEmail: async (leadData) => {
    try {
      const response = await fetch('/api/email/welcome', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: leadData.email,
          name: leadData.nom,
          service: leadData.service
        })
      })

      return response.ok
    } catch (error) {
      console.error('Erreur envoi email:', error)
      return false
    }
  },

  // Intégration SMS (exemple avec un service comme Twilio)
  sendConfirmationSMS: async (phoneNumber, message) => {
    try {
      const response = await fetch('/api/sms/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: phoneNumber,
          message: message
        })
      })

      return response.ok
    } catch (error) {
      console.error('Erreur envoi SMS:', error)
      return false
    }
  },

  // Intégration calendrier (exemple avec Google Calendar)
  createCalendarEvent: async (bookingData) => {
    try {
      const response = await fetch('/api/calendar/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: `RDV M2KS - ${bookingData.service}`,
          start: bookingData.dateTime,
          duration: bookingData.duration || 60,
          attendees: [bookingData.email],
          location: bookingData.adresse
        })
      })

      return response.ok
    } catch (error) {
      console.error('Erreur création événement:', error)
      return false
    }
  },

  // Intégration facturation
  createInvoice: async (clientData, services) => {
    try {
      const response = await fetch('/api/invoice/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client: clientData,
          services: services,
          date: new Date().toISOString()
        })
      })

      if (response.ok) {
        const invoice = await response.json()
        return { success: true, invoiceId: invoice.id }
      } else {
        throw new Error('Erreur lors de la création de la facture')
      }
    } catch (error) {
      console.error('Erreur création facture:', error)
      return { success: false, error: error.message }
    }
  }
}

// Hook personnalisé pour utiliser le CRM
export const useCRM = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const submitLead = async (formData, source) => {
    setIsLoading(true)
    setError(null)

    try {
      const result = await createLead(formData, source)
      
      if (result.success) {
        // Envoyer email de bienvenue
        await integrations.sendWelcomeEmail(formData)
      }
      
      setIsLoading(false)
      return result
    } catch (err) {
      setError(err.message)
      setIsLoading(false)
      return { success: false, error: err.message }
    }
  }

  const submitBooking = async (bookingData) => {
    setIsLoading(true)
    setError(null)

    try {
      const result = await createBooking(bookingData)
      
      if (result.success) {
        // Créer événement calendrier
        await integrations.createCalendarEvent(bookingData)
        
        // Envoyer SMS de confirmation
        await integrations.sendConfirmationSMS(
          bookingData.telephone,
          `Votre RDV M2KS est confirmé le ${bookingData.date} à ${bookingData.heure}. Merci !`
        )
      }
      
      setIsLoading(false)
      return result
    } catch (err) {
      setError(err.message)
      setIsLoading(false)
      return { success: false, error: err.message }
    }
  }

  return {
    submitLead,
    submitBooking,
    isLoading,
    error,
    integrations
  }
}

export default CRMIntegration

