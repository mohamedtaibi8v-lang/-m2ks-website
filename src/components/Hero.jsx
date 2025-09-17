import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Users, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import heroImage from '../assets/hero-m2ks.jpg'

const Hero = ({ onBookingClick }) => {
  return (
    <motion.section 
      id="accueil" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--m2ks-blue)] via-[var(--m2ks-blue)] to-[var(--m2ks-green)] opacity-85"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            M2KS : L'exigence technique,
            <motion.span 
              className="block" 
              style={{ color: 'var(--m2ks-green)' }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              la fierté d'une famille
            </motion.span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Depuis notre création, nous portons les valeurs d'une entreprise familiale : 
            l'exigence technique, la transparence et la fiabilité. 
            <strong className="text-white"> Votre tranquillité est notre métier.</strong>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 text-white transition-all duration-300"
                style={{ backgroundColor: 'var(--m2ks-green)' }}
                onClick={onBookingClick}
              >
                Confiez-nous votre projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-[var(--m2ks-blue)] transition-all duration-300"
                onClick={() => window.open('tel:0374474829')}
              >
                Urgence 7j/7 : 03 74 47 48 29
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.div 
              className="flex flex-col items-center text-white"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.7 }}
              >
                <Shield className="h-12 w-12 mb-3" style={{ color: 'var(--m2ks-green)' }} />
              </motion.div>
              <h3 className="text-base font-semibold mb-2">Fiabilité Garantie</h3>
              <p className="text-gray-200 text-sm">Interventions sans sous-traitance</p>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center text-white"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.9 }}
              >
                <Users className="h-12 w-12 mb-3" style={{ color: 'var(--m2ks-green)' }} />
              </motion.div>
              <h3 className="text-base font-semibold mb-2">Équipe Familiale</h3>
              <p className="text-gray-200 text-sm">Mohamed, Karima, Kaïs, Soulayman</p>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center text-white"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 2.1 }}
              >
                <Award className="h-12 w-12 mb-3" style={{ color: 'var(--m2ks-green)' }} />
              </motion.div>
              <h3 className="text-base font-semibold mb-2">Expertise Certifiée</h3>
              <p className="text-gray-200 text-sm">QualiPAC, FEEBAT, KNX</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.3 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Hero

