import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Calendar,
  Gem,
  Heart,
  Orbit,
  ScrollText,
  Sun,
} from 'lucide-react';
import { fadeInUp, staggerContainer } from './motion';

const services = [
  {
    icon: Sun,
    title: 'Birth Chart Analysis',
    description:
      'A comprehensive reading of your Janma Kundali — planets, houses, yogas, and the unique tapestry of your cosmic identity.',
    price: 'From $49',
    popular: true,
  },
  {
    icon: Orbit,
    title: 'Dasha & Transit Reports',
    description:
      'Navigate life\'s seasons with detailed Vimshottari dasha analysis and current planetary transit forecasts.',
    price: 'From $39',
    popular: false,
  },
  {
    icon: Heart,
    title: 'Compatibility Matching',
    description:
      'Discover relationship harmony through Ashtakoota and Dashakoota matching with AI-powered synastry insights.',
    price: 'From $59',
    popular: false,
  },
  {
    icon: Calendar,
    title: 'Muhurta Selection',
    description:
      'Find the most auspicious moments for weddings, business launches, travel, and other life-defining events.',
    price: 'From $35',
    popular: false,
  },
  {
    icon: ScrollText,
    title: 'Career & Finance Guidance',
    description:
      'Unlock your professional potential with D-10 Dasamsa analysis and planetary period insights for wealth and success.',
    price: 'From $45',
    popular: false,
  },
  {
    icon: Gem,
    title: 'Remedial Consultations',
    description:
      'Personalized gemstone, mantra, and ritual recommendations to harmonize challenging planetary influences.',
    price: 'From $55',
    popular: false,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-nakshatra-400 mb-4">
            Our Offerings
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            Astrology Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Expert-crafted readings powered by AI precision — each service
            designed to illuminate a different facet of your destiny.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={fadeInUp}
              className={`group relative flex flex-col p-8 rounded-2xl border transition-all duration-500 ${
                service.popular
                  ? 'border-nakshatra-500/40 bg-gradient-to-b from-nakshatra-500/10 to-transparent shadow-xl shadow-nakshatra-500/10'
                  : 'border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent hover:border-nakshatra-500/20'
              }`}
            >
              {service.popular && (
                <span className="absolute -top-3 left-8 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-nakshatra-500 to-nakshatra-600 text-white">
                  Most Popular
                </span>
              )}

              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-nakshatra-500/10 border border-nakshatra-500/20 mb-5 group-hover:border-nakshatra-400/40 transition-colors">
                <service.icon className="w-6 h-6 text-nakshatra-400" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">
                {service.description}
              </p>

              <div className="flex items-center justify-between pt-5 border-t border-white/5">
                <span className="text-nakshatra-400 font-semibold">
                  {service.price}
                </span>
                <a
                  href="#hero"
                  className="inline-flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-nakshatra-300 transition-colors group/link"
                >
                  Get Started
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
