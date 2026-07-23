import { motion } from 'framer-motion';
import {
  Brain,
  Compass,
  Moon,
  Shield,
  Sparkles,
  Zap,
} from 'lucide-react';
import { fadeInUp, staggerContainer } from './motion';

const features = [
  {
    icon: Brain,
    title: 'AI-Enhanced Interpretations',
    description:
      'Our advanced AI synthesizes thousands of classical texts to deliver nuanced, personalized readings that honor tradition while speaking to your modern life.',
  },
  {
    icon: Compass,
    title: 'Precise Sidereal Calculations',
    description:
      'Built on authentic Lahiri ayanamsa with Swiss Ephemeris accuracy — your birth chart reflects the true positions of the heavens at your moment of arrival.',
  },
  {
    icon: Moon,
    title: 'Deep Nakshatra Analysis',
    description:
      'Explore all 27 lunar mansions with detailed pada interpretations, deity associations, and their influence on your personality and life path.',
  },
  {
    icon: Zap,
    title: 'Instant Dasha Predictions',
    description:
      'Navigate Vimshottari dasha periods with clarity. Understand which planetary periods are active and what opportunities or challenges they bring.',
  },
  {
    icon: Shield,
    title: 'Privacy-First Architecture',
    description:
      'Your birth data is encrypted and never shared. Consult the cosmos with complete confidence that your most personal details remain sacred.',
  },
  {
    icon: Sparkles,
    title: 'Daily Cosmic Guidance',
    description:
      'Receive personalized daily insights based on transits, your natal chart, and current dasha lords — a celestial compass for every decision.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-nakshatra-400 mb-4">
            Why Nakshatra
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            Ancient Wisdom,{' '}
            <span className="bg-gradient-to-r from-nakshatra-300 to-nakshatra-500 bg-clip-text text-transparent">
              Modern Precision
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Every feature is crafted to bridge millennia of Vedic knowledge with
            the clarity and accessibility you deserve.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="group relative p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent hover:border-nakshatra-500/20 hover:bg-white/[0.06] transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-nakshatra-500/0 to-nakshatra-500/0 group-hover:from-nakshatra-500/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-nakshatra-500/10 border border-nakshatra-500/20 mb-5 group-hover:border-nakshatra-400/40 transition-colors">
                  <feature.icon className="w-6 h-6 text-nakshatra-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
