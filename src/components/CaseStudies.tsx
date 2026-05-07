import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export default function CaseStudies({ language }: { language: 'en' | 'es' }) {
  const cases = [
    {
      title: language === 'en' ? "Global Logistics Optimization" : "Optimización de Logística Global",
      client: "TransWorld Corp",
      result: language === 'en' ? "35% efficiency increase in last-mile delivery using AI-driven routing." : "Aumento del 35% en la eficiencia de la entrega de última milla utilizando rutas impulsadas por IA.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      tag: language === 'en' ? "Logistics" : "Logística"
    },
    {
      title: language === 'en' ? "Predictive Health Monitoring" : "Monitoreo Predictivo de Salud",
      client: "BioMed Systems",
      result: language === 'en' ? "Early detection of anomalies with 99.4% accuracy in genomic data." : "Detección temprana de anomalías con un 99,4% de precisión en datos genómicos.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
      tag: language === 'en' ? "Healthcare" : "Salud"
    },
    {
      title: language === 'en' ? "Fintech Fraud Prevention" : "Prevención de Fraude Fintech",
      client: "Apex Bank",
      result: language === 'en' ? "Reduced fraudulent transactions by $40M annually through real-time ML." : "Se redujeron las transacciones fraudulentas en $40 millones anuales a través de ML en tiempo real.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      tag: language === 'en' ? "Fintech" : "Fintech"
    }
  ];

  return (
    <section id="cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {language === 'en' ? 'Evidence of Excellence' : 'Evidencia de Excelencia'}
            </h2>
            <p className="text-slate-600 text-lg">
              {language === 'en' 
                ? "Real-world impact across diverse industries powered by Quantex intelligence." 
                : "Impacto en el mundo real en diversas industrias impulsado por la inteligencia de Quantex."}
            </p>
          </div>
          <button className="text-brand-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            {language === 'en' ? 'View All Stories' : 'Ver Todas las Historias'}
            <ExternalLink size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur shadow-sm px-3 py-1 rounded-full text-xs font-bold text-brand-600">
                    {item.tag}
                  </span>
                </div>
              </div>
              <p className="text-sm font-bold text-brand-500 uppercase tracking-widest mb-2">{item.client}</p>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600">{item.result}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
