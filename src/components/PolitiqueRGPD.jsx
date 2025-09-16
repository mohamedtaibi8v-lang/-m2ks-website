import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Eye, Clock, Trash2, Download, Mail, Phone } from 'lucide-react'

const PolitiqueRGPD = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--m2ks-blue)' }}>
            Politique de Confidentialité
          </h1>
          <p className="text-xl text-gray-600">
            Protection des données personnelles - Conforme RGPD
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </motion.div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          
          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 mr-3" style={{ color: 'var(--m2ks-green)' }} />
              <h2 className="text-2xl font-bold" style={{ color: 'var(--m2ks-blue)' }}>
                Notre engagement
              </h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p>
                M2KS s'engage à protéger la confidentialité et la sécurité de vos données personnelles. 
                Cette politique de confidentialité explique comment nous collectons, utilisons, stockons 
                et protégeons vos informations personnelles conformément au Règlement Général sur la 
                Protection des Données (RGPD).
              </p>
            </div>
          </motion.section>

          {/* Responsable du traitement */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--m2ks-blue)' }}>
              Responsable du traitement des données
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2"><strong>M2KS</strong></p>
              <p className="mb-2">171 Rue Bruant des Roseaux, 59000 Lille</p>
              <p className="mb-2">Email : contact@m2ks.fr</p>
              <p>Téléphone : 03 74 47 48 29</p>
            </div>
          </motion.section>

          {/* Données collectées */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <Eye className="h-6 w-6 mr-3" style={{ color: 'var(--m2ks-green)' }} />
              <h2 className="text-2xl font-bold" style={{ color: 'var(--m2ks-blue)' }}>
                Données collectées
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Données d'identification</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Adresse postale (pour les interventions)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Données techniques</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Adresse IP</li>
                  <li>Type de navigateur</li>
                  <li>Pages visitées et durée de visite</li>
                  <li>Cookies techniques</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Données professionnelles</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Nom de l'entreprise</li>
                  <li>Secteur d'activité</li>
                  <li>Détails des équipements techniques</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Finalités du traitement */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--m2ks-blue)' }}>
              Finalités du traitement
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Gestion des services</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Traitement des demandes de devis</li>
                  <li>• Planification des interventions</li>
                  <li>• Suivi des contrats de maintenance</li>
                  <li>• Facturation et comptabilité</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Communication</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Réponse aux demandes d'information</li>
                  <li>• Envoi de newsletters (avec consentement)</li>
                  <li>• Notifications de maintenance</li>
                  <li>• Support technique</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Amélioration des services</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Analyse de la satisfaction client</li>
                  <li>• Optimisation du site web</li>
                  <li>• Développement de nouveaux services</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Obligations légales</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Conservation des factures</li>
                  <li>• Respect des normes techniques</li>
                  <li>• Déclarations administratives</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Base légale */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--m2ks-blue)' }}>
              Base légale du traitement
            </h2>
            <div className="prose prose-gray max-w-none">
              <ul>
                <li><strong>Exécution du contrat :</strong> Pour la réalisation de nos prestations de service</li>
                <li><strong>Intérêt légitime :</strong> Pour l'amélioration de nos services et la prospection commerciale</li>
                <li><strong>Consentement :</strong> Pour l'envoi de newsletters et communications marketing</li>
                <li><strong>Obligation légale :</strong> Pour la conservation des documents comptables et fiscaux</li>
              </ul>
            </div>
          </motion.section>

          {/* Durée de conservation */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 mr-3" style={{ color: 'var(--m2ks-green)' }} />
              <h2 className="text-2xl font-bold" style={{ color: 'var(--m2ks-blue)' }}>
                Durée de conservation
              </h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Clients actifs</h3>
                  <p className="text-sm text-gray-700">Pendant toute la durée de la relation commerciale + 3 ans</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Prospects</h3>
                  <p className="text-sm text-gray-700">3 ans à compter du dernier contact</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Documents comptables</h3>
                  <p className="text-sm text-gray-700">10 ans (obligation légale)</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Données de navigation</h3>
                  <p className="text-sm text-gray-700">13 mois maximum</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Vos droits */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--m2ks-blue)' }}>
              Vos droits
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <Eye className="h-5 w-5 mt-1" style={{ color: 'var(--m2ks-green)' }} />
                <div>
                  <h3 className="font-semibold">Droit d'accès</h3>
                  <p className="text-sm text-gray-700">Connaître les données que nous détenons sur vous</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <Download className="h-5 w-5 mt-1" style={{ color: 'var(--m2ks-green)' }} />
                <div>
                  <h3 className="font-semibold">Droit à la portabilité</h3>
                  <p className="text-sm text-gray-700">Récupérer vos données dans un format lisible</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <Trash2 className="h-5 w-5 mt-1" style={{ color: 'var(--m2ks-green)' }} />
                <div>
                  <h3 className="font-semibold">Droit à l'effacement</h3>
                  <p className="text-sm text-gray-700">Demander la suppression de vos données</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <Shield className="h-5 w-5 mt-1" style={{ color: 'var(--m2ks-green)' }} />
                <div>
                  <h3 className="font-semibold">Droit de rectification</h3>
                  <p className="text-sm text-gray-700">Corriger des informations inexactes</p>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm">
                <strong>Comment exercer vos droits :</strong> Contactez-nous par email à 
                <a href="mailto:contact@m2ks.fr" className="text-blue-600 hover:underline ml-1">contact@m2ks.fr</a> 
                en précisant votre demande et en joignant une copie de votre pièce d'identité.
              </p>
            </div>
          </motion.section>

          {/* Cookies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--m2ks-blue)' }}>
              Gestion des cookies
            </h2>
            <div className="prose prose-gray max-w-none">
              <p>
                Notre site utilise des cookies techniques nécessaires au bon fonctionnement du site 
                (navigation, sécurité, préférences). Ces cookies ne nécessitent pas votre consentement.
              </p>
              <p>
                Pour les cookies analytiques et marketing, votre consentement est requis via le bandeau 
                de cookies affiché lors de votre première visite.
              </p>
            </div>
          </motion.section>

          {/* Sécurité */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--m2ks-blue)' }}>
              Sécurité des données
            </h2>
            <div className="prose prose-gray max-w-none">
              <p>
                M2KS met en œuvre des mesures techniques et organisationnelles appropriées pour protéger 
                vos données personnelles contre la destruction, la perte, l'altération, la divulgation 
                ou l'accès non autorisés :
              </p>
              <ul>
                <li>Chiffrement des données sensibles</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Sauvegardes régulières et sécurisées</li>
                <li>Formation du personnel à la protection des données</li>
              </ul>
            </div>
          </motion.section>

          {/* Contact */}
          <motion.div 
            className="mt-12 text-center bg-gray-50 rounded-lg p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--m2ks-blue)' }}>
              Questions sur la protection de vos données ?
            </h3>
            <p className="text-gray-600 mb-4">
              Notre équipe est à votre disposition pour toute question relative à la protection de vos données personnelles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@m2ks.fr"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: 'var(--m2ks-green)' }}
              >
                <Mail className="mr-2 h-5 w-5" />
                contact@m2ks.fr
              </a>
              <a
                href="tel:0374474829"
                className="inline-flex items-center justify-center px-6 py-3 border-2 text-base font-medium rounded-md transition-all duration-300 hover:scale-105"
                style={{ 
                  borderColor: 'var(--m2ks-blue)', 
                  color: 'var(--m2ks-blue)',
                  backgroundColor: 'transparent'
                }}
              >
                <Phone className="mr-2 h-5 w-5" />
                03 74 47 48 29
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Vous pouvez également saisir la CNIL en cas de réclamation : 
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                www.cnil.fr
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default PolitiqueRGPD

