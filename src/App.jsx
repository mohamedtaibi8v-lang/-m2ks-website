import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Expertises from './components/Expertises'
import NotreHistoire from './components/NotreHistoire'
import Engagements from './components/Engagements'
import Realisations from './components/Realisations'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PageRefrigeration from './components/PageRefrigeration'
import PageEnergie from './components/PageEnergie'
import PageConcept from './components/PageConcept'
import ChatWidget from './components/ChatWidget'
import BookingModal from './components/BookingModal'
import SEOHead from './components/SEOHead'
import { seoData } from './utils/seoData'

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    })
  }, [])

  const HomePage = () => (
    <main>
      <SEOHead {...seoData.home} />
      <Hero onBookingClick={() => setIsBookingModalOpen(true)} />
      <Expertises />
      <NotreHistoire />
      <Engagements />
      <Realisations />
      <Contact />
    </main>
  )

  return (
    <div className="min-h-screen bg-white">
      <Header onBookingClick={() => setIsBookingModalOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/refrigeration" element={
          <>
            <SEOHead {...seoData.refrigeration} />
            <PageRefrigeration onBookingClick={() => setIsBookingModalOpen(true)} />
          </>
        } />
        <Route path="/energie" element={
          <>
            <SEOHead {...seoData.energie} />
            <PageEnergie onBookingClick={() => setIsBookingModalOpen(true)} />
          </>
        } />
        <Route path="/concept" element={
          <>
            <SEOHead {...seoData.concept} />
            <PageConcept onBookingClick={() => setIsBookingModalOpen(true)} />
          </>
        } />
      </Routes>
      <Footer />
      
      {/* Global Components */}
      <ChatWidget />
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  )
}

export default App

