import { motion } from 'motion/react';
import { ArrowRight, Cpu, Network, Zap } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'es';
}

export default function Hero({ language }: HeroProps) {
  const content = {
    en: {
      tag: "The Future of Intelligence",
      title: "Building Next-Gen AI Solutions for Modern Enterprise",
      description: "Quantex Intelligence Systems delivers high-performance machine learning models and automated systems designed to scale with your business intelligence needs.",
      ctaPrimary: "Explore Solutions",
      ctaSecondary: "AI Agents in Modern Era",
      activeClients: "200+ Global Clients",
    },
    es: {
      tag: "El Futuro de la Inteligencia",
      title: "Construyendo Soluciones de IA de Próxima Generación",
      description: "Quantex Intelligence Systems ofrece modelos de aprendizaje automático de alto rendimiento y sistemas automatizados diseñados para escalar con sus necesidades empresariales.",
      ctaPrimary: "Explorar Soluciones",
      ctaSecondary: "Agentes de IA en la Era Moderna",
      activeClients: "200+ Clientes Globales",
    }
  };

  const t = content[language];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-brand-50 to-transparent opacity-50" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-30 animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-bold uppercase tracking-wider mb-6">
            <Zap size={14} />
            {t.tag}
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-slate-900 mb-8">
            {t.title.split('AI').map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && <span className="text-gradient">AI</span>}
              </span>
            ))}
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
            {t.description}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <button className="bg-brand-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-200 transition-all active:scale-95 flex items-center gap-2">
              {t.ctaPrimary}
              <ArrowRight size={20} />
            </button>
            <motion.button 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(14, 165, 233, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all cursor-pointer"
            >
              {t.ctaSecondary}
            </motion.button>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/id/${i + 10}/100/100`}
                  alt="Client"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-sm font-medium text-slate-500">
              <span className="text-slate-900 font-bold">{t.activeClients}</span>
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50">
            <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200"
              alt="Quantex Intelligence Systems - AI Agents"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
