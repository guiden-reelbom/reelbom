/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import SocialProof from './components/SocialProof';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import BrandAssets from './pages/BrandAssets';
import ScrollToTop from './components/ScrollToTop';

function Home() {
  return (
    <div className="relative min-h-screen selection:bg-primary selection:text-white bg-dark">
      {/* Global Cinematic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-dark/40 z-10" />
        <img 
          src="/background.png" 
          alt="REELBOM Atmosphere"
          className="w-full h-full object-cover opacity-60 fixed hover:scale-105 transition-transform duration-[20s] ease-linear"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark opacity-80" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Process />
          <Portfolio />
          <SocialProof />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/brand-assets" element={<BrandAssets />} />
      </Routes>
    </Router>
  );
}
