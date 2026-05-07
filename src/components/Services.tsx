import { motion } from 'motion/react';
import { Brain, Search, Shield, Zap, Database, BarChart3, Cloud, Settings } from 'lucide-react';

interface AnimatedIconProps {
  icon: React.ReactNode;
  animation: any;
}

const AnimatedIcon = ({ icon, animation }: AnimatedIconProps) => (
  <motion.div
    animate={animation}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {icon}
  </motion.div>
);

export default function Services({ language }: { language: 'en' | 'es' }) {
  const services = [
    {
      icon: <Brain className="w-6 h-6" />,
      animation: { scale: [1, 1.1, 1] },
      title: language === 'en' ? "Neural Architectures" : "Arquitecturas Neuronales",
      description: language === 'en' 
        ? "Custom deep learning models optimized for complex pattern recognition tasks." 
        : "Modelos de aprendizaje profundo personalizados para tareas de reconocimiento de patrones complejos.",
      color: "bg-blue-50 text-blue-600",
      rate: 98
    },
    {
      icon: <Search className="w-6 h-6" />,
      animation: { x: [0, 5, 0] },
      title: language === 'en' ? "Predictive Analytics" : "Analítica Predictiva",
      description: language === 'en' 
        ? "Anticipate market trends and consumer behavior with high-precision forecasting." 
        : "Anticipe las tendencias del mercado y el comportamiento del consumidor con pronósticos de alta precisión.",
      color: "bg-indigo-50 text-indigo-600",
      rate: 94
    },
    {
      icon: <Database className="w-6 h-6" />,
      animation: { y: [0, -4, 0] },
      title: language === 'en' ? "Big Data Fusion" : "Fusión de Big Data",
      description: language === 'en' 
        ? "Seamlessly integrate disparate data sources into a unified intelligence stream." 
        : "Integre visualmente fuentes de datos dispares en un flujo de inteligencia unificado.",
      color: "bg-cyan-50 text-cyan-600",
      rate: 89
    },
    {
      icon: <Shield className="w-6 h-6" />,
      animation: { opacity: [0.7, 1, 0.7] },
      title: language === 'en' ? "Secure AI Systems" : "Sistemas de IA Seguros",
      description: language === 'en' 
        ? "Enterprise-grade security protocols for all your sensitive machine learning assets." 
        : "Protocolos de seguridad de nivel empresarial para todos sus activos sensibles de aprendizaje automático.",
      color: "bg-brand-50 text-brand-600",
      rate: 99
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      animation: { scaleY: [1, 1.2, 1] },
      title: language === 'en' ? "Real-time Audits" : "Auditorías en Tiempo Real",
      description: language === 'en' 
        ? "Monitor model performance and data integrity with live tracking dashboards." 
        : "Supervise el rendimiento del modelo y la integridad de los datos con paneles de seguimiento en vivo.",
      color: "bg-emerald-50 text-emerald-600",
      rate: 92
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      animation: { y: [0, 4, 0], x: [0, 2, 0] },
      title: language === 'en' ? "Cloud ML Ops" : "Operaciones de ML en la Nube",
      description: language === 'en' 
        ? "Scalable deployment pipelines for global AI infrastructure management." 
        : "Canales de implementación escalables para la gestión global de infraestructura de IA.",
      color: "bg-sky-50 text-sky-600",
      rate: 96
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            {language === 'en' ? 'Intelligent Solutions for the Modern Era' : 'Soluciones Inteligentes para la Era Moderna'}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600"
          >
            {language === 'en' 
              ? "We bridge the gap between raw data and actionable intelligence through advanced AI engineering." 
              : "Cerramos la brecha entre los datos brutos y la inteligencia procesable a través de la ingeniería de IA avanzada."}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col group h-full"
            >
              <div className={`p-4 rounded-2xl w-fit mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
                <AnimatedIcon icon={service.icon} animation={service.animation} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
              
              <div className="mt-auto pt-6 border-t border-slate-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    {language === 'en' ? 'Processing Rate' : 'Tasa de Procesamiento'}
                  </span>
                  <span className="text-xs font-bold text-brand-600">{service.rate}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${service.rate}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.1 + 0.5 }}
                    className="h-full bg-brand-500 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
