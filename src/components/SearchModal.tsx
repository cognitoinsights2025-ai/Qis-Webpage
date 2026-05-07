import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ArrowRight, CornerDownLeft } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'es';
}

export default function SearchModal({ isOpen, onClose, language }: SearchModalProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const suggestions = [
    { title: "Neural Architectures", category: "Solution" },
    { title: "TransWorld Logistics Case", category: "Case Study" },
    { title: "Ethical AI Guidelines", category: "Insight" },
    { title: "Contact Sales", category: "Direct" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center pt-20 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-4 p-6 border-b border-slate-100">
              <Search className="text-slate-400" size={24} />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={language === 'en' ? "Search for solutions, insights, cases..." : "Buscar soluciones, perspectivas, casos..."}
                className="flex-1 text-xl bg-transparent focus:outline-none text-slate-900 placeholder:text-slate-300"
              />
              <button 
                onClick={onClose}
                className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
                aria-label="Close"
              >
                <X size={20} className="text-slate-500" />
              </button>
            </div>

            <div className="p-6 h-[400px] overflow-y-auto">
              {query === '' ? (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                    {language === 'en' ? 'Quick Suggestions' : 'Sugerencias Rápidas'}
                  </h4>
                  <div className="space-y-2">
                    {suggestions.map((item, i) => (
                      <button
                        key={i}
                        className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-brand-50 group transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-slate-100 group-hover:bg-brand-100 group-hover:text-brand-600 rounded-lg transition-colors">
                            <ArrowRight size={18} />
                          </div>
                          <div className="text-left">
                            <p className="font-bold text-slate-900">{item.title}</p>
                            <p className="text-xs text-slate-400">{item.category}</p>
                          </div>
                        </div>
                        <CornerDownLeft size={16} className="text-slate-300 opacity-0 group-hover:opacity-100" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="bg-slate-50 p-6 rounded-full mb-6">
                    <Search size={48} className="text-slate-200" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {language === 'en' ? 'No results found' : 'No se encontraron resultados'}
                  </h3>
                  <p className="text-slate-500">
                    {language === 'en' 
                      ? "Try adjusting your search for broader results." 
                      : "Intente ajustar su búsqueda para obtener resultados más amplios."}
                  </p>
                </div>
              )}
            </div>

            <div className="bg-slate-50 p-4 px-6 border-t border-slate-100 flex items-center justify-between text-[10px] uppercase font-bold text-slate-400 tracking-widest">
              <div className="flex gap-4">
                <span className="flex items-center gap-1"><span className="bg-white border p-1 rounded">ESC</span> to close</span>
                <span className="flex items-center gap-1"><span className="bg-white border p-1 rounded">↵</span> to select</span>
              </div>
              <span>Quantex Systems Search Engine v2.4</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
