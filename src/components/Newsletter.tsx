import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Newsletter({ language }: { language: 'en' | 'es' }) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto glass-morphism bg-brand-50 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-30" />
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            {language === 'en' ? 'Stay Ahead of the Intelligence Curve' : 'Manténgase a la Vanguardia de la Curva de Inteligencia'}
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            {language === 'en' 
              ? "Subscribe to our monthly briefing on AI breakthroughs and Quantex engineering updates." 
              : "Suscríbase a nuestro boletín mensual sobre avances en IA y actualizaciones de ingeniería de Quantex."}
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder={language === 'en' ? "Enter your work email" : "Ingrese su correo corporativo"}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white border border-slate-200 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all shadow-sm"
              />
              <button
                type="submit"
                className="bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-700 hover:shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {language === 'en' ? 'Join Briefing' : 'Unirse al Boletín'}
                <Send size={18} />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-brand-600 font-bold bg-white p-6 rounded-2xl border border-brand-100 shadow-xl"
            >
              <CheckCircle2 size={24} />
              {language === 'en' ? 'Thanks for subscribing!' : '¡Gracias por suscribirse!'}
            </motion.div>
          )}
          
          <p className="mt-6 text-xs text-slate-400">
            {language === 'en' 
              ? "We respect your privacy. Unsubscribe at any time." 
              : "Respetamos su privacidad. Cancele su suscripción en cualquier momento."}
          </p>
        </div>
      </div>
    </section>
  );
}
