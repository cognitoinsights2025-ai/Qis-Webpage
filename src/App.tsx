/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import { motion } from 'motion/react';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  return (
    <div className="relative font-sans overflow-x-hidden selection:bg-brand-500 selection:text-white">
      <Header 
        onSearchOpen={() => setIsSearchOpen(true)} 
        language={language}
        setLanguage={setLanguage}
      />
      
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero language={language} />
          <Services language={language} />
          <CaseStudies language={language} />
          <Testimonials language={language} />
          <Newsletter language={language} />
        </motion.div>
      </main>

      <Footer language={language} />

      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        language={language}
      />
    </div>
  );
}
