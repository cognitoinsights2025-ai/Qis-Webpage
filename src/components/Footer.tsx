import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Globe } from 'lucide-react';

export default function Footer({ language }: { language: 'en' | 'es' }) {
  const currentYear = 2026;

  return (
    <footer id="contact" className="bg-slate-900 pt-20 pb-10 text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-full lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                Q
              </div>
              <span className="font-display font-bold text-xl tracking-tighter">
                Quantex<span className="text-brand-400 text-sm font-medium ml-1">Intelligence</span>
              </span>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed max-w-sm">
              {language === 'en' 
                ? "Engineering the next generation of scalable intelligence systems for the global enterprise landscape."
                : "Diseñando la próxima generación de sistemas de inteligencia escalables para el entorno empresarial global."}
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-brand-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-brand-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-brand-600 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-slate-500">
              {language === 'en' ? 'Solutions' : 'Soluciones'}
            </h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Neural Architectures</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Predictive Analytics</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Big Data Fusion</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Cloud ML Ops</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-slate-500">
              {language === 'en' ? 'Resources' : 'Recursos'}
            </h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#cases" className="hover:text-brand-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-widest text-slate-500">
              {language === 'en' ? 'Connect' : 'Conectar'}
            </h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <Mail className="text-brand-500" size={18} />
                <a href="mailto:quantexintelligencesystems@gmail.com" className="hover:text-brand-400 transition-colors">
                  quantexintelligencesystems@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-500" size={18} />
                <a href="tel:7013497025" className="hover:text-brand-400 transition-colors">
                  +91-7013497025
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-500 shrink-0 mt-1" size={18} />
                <span className="leading-relaxed">Danavai Peta, Rajahmundry,<br />533103, A.P, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>© {currentYear} Quantex Intelligence Systems. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="flex items-center gap-2">
              <Globe size={14} />
              USA / Global
            </span>
            <a href="#" className="hover:text-white transition-colors">Compliance</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
