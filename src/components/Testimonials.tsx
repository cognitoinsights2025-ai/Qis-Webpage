import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export default function Testimonials({ language }: { language: 'en' | 'es' }) {
  const testimonials = [
    {
      name: "Anitha Vaddi",
      role: language === 'en' ? "CEO & Director" : "CEO y Directora",
      content: language === 'en' 
        ? "With over 22 years of extensive experience in the IT industry, leading Quantex towards pioneering AI agent solutions and enterprise intelligence." 
        : "Con más de 22 años de amplia experiencia en la industria de TI, liderando a Quantex hacia soluciones pioneras de agentes de IA e inteligencia empresarial.",
    },
    {
      name: "Venkat Yalla",
      role: language === 'en' ? "CTO & Director" : "CTO y Director",
      content: language === 'en' 
        ? "Driving innovation with 30+ years of technical leadership, specializing in robust machine learning architectures and scalable system design." 
        : "Impulsando la innovación con más de 30 años de liderazgo técnico, especializándose en arquitecturas robustas de aprendizaje automático y diseño de sistemas escalables.",
    },
    {
      name: "Pratap Reddi",
      role: language === 'en' ? "Board of Director" : "Miembro de la Junta Directiva",
      content: language === 'en' 
        ? "Providing strategic oversight and industry governance to ensure Quantex remains at the forefront of global technological advancements." 
        : "Brindando supervisión estratégica y gobernanza de la industria para garantizar que Quantex se mantenga a la vanguardia de los avances tecnológicos globales.",
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-brand-600 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500 rounded-full blur-3xl -mr-48 -mt-48 opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-700 rounded-full blur-3xl -ml-48 -mb-48 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 underline-offset-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            {language === 'en' ? 'Leadership Excellence' : 'Excelencia en el Liderazgo'}
          </h2>
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={20} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-white"
            >
              <Quote className="text-brand-300 mb-6" size={32} />
              <p className="text-lg italic leading-relaxed mb-8 opacity-90 font-medium">
                "{testi.content}"
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <h4 className="font-bold text-xl">{testi.name}</h4>
                  <p className="text-xs opacity-70 uppercase tracking-wider font-bold">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
