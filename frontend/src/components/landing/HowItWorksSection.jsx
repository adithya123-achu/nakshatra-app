import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from './motion';

const steps = [
  {
    number: '01',
    title: 'Enter Your Birth Details',
    description:
      'Provide your date, time, and place of birth. Our geolocation engine resolves the exact coordinates for pinpoint astronomical accuracy.',
  },
  {
    number: '02',
    title: 'We Calculate Your Chart',
    description:
      'Within seconds, Nakshatra constructs your complete Vedic birth chart — planets, houses, nakshatras, and dasha timelines computed with precision.',
  },
  {
    number: '03',
    title: 'AI Interprets Your Blueprint',
    description:
      'Our AI reads your unique planetary configuration through the lens of classical Jyotish, delivering insights tailored to your specific cosmic signature.',
  },
  {
    number: '04',
    title: 'Receive Your Cosmic Guidance',
    description:
      'Explore your personalized dashboard with detailed reports, daily transits, compatibility analysis, and actionable guidance for every area of life.',
  },
];

const HowItWorksSection = () => {
  return (
    <section
      id="how-it-works"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nakshatra-500/[0.03] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-nakshatra-400 mb-4">
            Simple Process
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            How It Works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From birth details to profound insight in four elegant steps.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
        >
          {steps.map((step, index) => (
            <motion.div key={step.number} variants={fadeInUp} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-nakshatra-500/40 to-nakshatra-500/10" />
              )}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-nakshatra-500/20 to-nakshatra-600/10 border border-nakshatra-500/25 mb-6">
                  <span className="font-display text-2xl font-bold text-nakshatra-400">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
