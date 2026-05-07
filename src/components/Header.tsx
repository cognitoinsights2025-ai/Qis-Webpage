import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Menu, X, Globe, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface HeaderProps {
  onSearchOpen: () => void;
  language: 'en' | 'es';
  setLanguage: (lang: 'en' | 'es') => void;
}

export default function Header({ onSearchOpen, language, setLanguage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: language === 'en' ? 'Solutions' : 'Soluciones', href: '#solutions' },
    { name: language === 'en' ? 'Case Studies' : 'Casos de Estudio', href: '#cases' },
    { name: language === 'en' ? 'Leadership' : 'Liderazgo', href: '#testimonials' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'glass-morphism py-3 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            Q
          </div>
          <span className="font-display font-bold text-xl tracking-tighter text-slate-900">
            Quantex<span className="text-brand-500 text-sm font-medium ml-1">Intelligence</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={onSearchOpen}
            className="p-2 text-slate-600 hover:text-brand-600 hover:bg-brand-50 rounded-full transition-all"
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          <button 
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="hidden sm:flex items-center gap-1 p-2 text-slate-600 hover:text-brand-600 transition-colors"
          >
            <Globe size={18} />
            <span className="text-xs font-bold uppercase">{language}</span>
          </button>

          <a 
            href="#contact"
            className="hidden md:flex items-center gap-2 bg-brand-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-700 hover:shadow-lg transition-all active:scale-95"
          >
            {language === 'en' ? 'Get Started' : 'Empezar'}
            <ChevronRight size={16} />
          </a>

          <button 
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-morphism absolute top-full left-0 right-0 border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-slate-100" />
              <button 
                onClick={() => {
                  setLanguage(language === 'en' ? 'es' : 'en');
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-slate-600"
              >
                <Globe size={20} />
                <span>{language === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
