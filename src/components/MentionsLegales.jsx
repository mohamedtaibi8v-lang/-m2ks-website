import React from 'react'
import { motion } from 'framer-motion'
import { Building, User, Server, Mail, Phone, MapPin } from 'lucide-react'

const MentionsLegales = () => {
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
            Mentions Légales
          </h1>
          <p className="text-xl text-gray-600">
            Informations légales concernant le site web M2KS
          </p>
        </motion.div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          
          {/* Éditeur du site */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center mb-4">
              <Building className="h-6 w-6 mr-3" style={{ color: 'var(--m2ks-green)' }} />
              <h2 className="text-2xl font-bold" style={{ color: 'var(--m2ks-blue)' }}>
                Éditeur du site
              </h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2"><strong>Raison sociale :</strong> M2KS</p>
              <p className="mb-2"><strong>Forme juridique :</strong> [À compléter selon le statut]</p>
              <p className="mb-2"><strong>SIRET :</strong> [À compléter]</p>
              <p className="mb-2"><strong>Code APE :</strong> [À compléter]</p>
              <p className="mb-2"><strong>Capital social :</strong> [À compléter]</p>
              <div className="flex items-start mt-4">
                <MapPin className="h-5 w-5 mr-2 mt-1" style={{ color: 'var(--m2ks-green)' }} />
                <div>
                  <p><strong>Adresse du siège social :</strong></p>
                  <p>171 Rue Bruant des Roseaux</p>
                  <p>59000 Lille, France</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Directeur de publication */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <User className="h-6 w-6 mr-3" style={{ color: 'var(--m2ks-green)' }} />
              <h2 className="text-2xl font-bold" style={{ color: 'var(--m2ks-blue)' }}>
                Directeur de publication
              </h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2"><strong>Nom :</strong> Mohamed Taibi</p>
              <p className="mb-2"><strong>Qualité :</strong> Dirigeant de M2KS</p>
              <div className="flex items-center mt-4">
                <Mail className="h-5 w-5 mr-2" style={{ color: 'var(--m2ks-green)' }} />
                <p><strong>Email :</strong> contact@m2ks.fr</p>
              </div>
              <div className="flex items-center mt-2">
                <Phone className="h-5 w-5 mr-2" style={{ color: 'var(--m2ks-green)' }} />
                <p><strong>Téléphone :</strong> 03 74 47 48 29</p>
              </div>
            </div>
          </motion.section>

          {/* Hébergement */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <Server className="h-6 w-6 mr-3" style={{ color: 'var(--m2ks-green)' }} />
              <h2 className="text-2xl font-bold" style={{ color: 'var(--m2ks-blue)' }}>
                Hébergement
              </h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2"><strong>Hébergeur :</strong> [À compléter selon l'hébergeur choisi]</p>
              <p className="mb-2"><strong>Adresse :</strong> [Adresse de l'hébergeur]</p>
              <p className="mb-2"><strong>Téléphone :</strong> [Téléphone de l'hébergeur]</p>
            </div>
          </motion.section>

          {/* Propriété intellectuelle */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--m2ks-blue)' }}>
              Propriété intellectuelle
            </h2>
            <div className="prose prose-gray max-w-none">
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p>
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
                formellement interdite sauf autorisation expresse du directeur de publication.
              </p>
            </div>
          </motion.section>

          {/* Responsabilité */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--m2ks-blue)' }}>
              Responsabilité
            </h2>
            <div className="prose prose-gray max-w-none">
              <p>
                Les informations contenues sur ce site sont aussi précises que possible et le site est 
                périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions 
                ou des lacunes.
              </p>
              <p>
                Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de 
                bien vouloir le signaler par email à l'adresse contact@m2ks.fr, en décrivant le problème 
                de la manière la plus précise possible.
              </p>
            </div>
          </motion.section>

          {/* Liens hypertextes */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--m2ks-blue)' }}>
              Liens hypertextes
            </h2>
            <div className="prose prose-gray max-w-none">
              <p>
                Les liens hypertextes mis en place dans le cadre du présent site web en direction d'autres 
                ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de M2KS.
              </p>
            </div>
          </motion.section>

          {/* Droit applicable */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--m2ks-blue)' }}>
              Droit applicable et juridiction compétente
            </h2>
            <div className="prose prose-gray max-w-none">
              <p>
                Tout litige en relation avec l'utilisation du site m2ks.com est soumis au droit français. 
                Il est fait attribution exclusive de juridiction aux tribunaux compétents de Lille.
              </p>
            </div>
          </motion.section>

          {/* Contact */}
          <motion.div 
            className="mt-12 text-center bg-gray-50 rounded-lg p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--m2ks-blue)' }}>
              Questions sur ces mentions légales ?
            </h3>
            <p className="text-gray-600 mb-4">
              Pour toute question concernant ces mentions légales, contactez-nous :
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
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default MentionsLegales

