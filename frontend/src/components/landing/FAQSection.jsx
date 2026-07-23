import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeInUp, staggerContainer } from './motion';

const faqs = [
  {
    question: 'What makes Nakshatra different from other astrology apps?',
    answer:
      'Nakshatra combines authentic Vedic sidereal calculations with AI-powered interpretation trained on classical Jyotish texts. Unlike generic horoscope apps, we provide deeply personalized readings based on your exact birth chart, nakshatra, and dasha periods — not sun-sign generalizations.',
  },
  {
    question: 'Do I need to know my exact birth time?',
    answer:
      'For the most accurate chart, yes — birth time determines your ascendant (Lagna) and house placements. If you\'re unsure, we offer birth time rectification guidance. Even without an exact time, you can still receive valuable nakshatra and planetary sign insights.',
  },
  {
    question: 'Is Vedic astrology the same as Western astrology?',
    answer:
      'No. Vedic (Jyotish) astrology uses the sidereal zodiac, which accounts for the precession of equinoxes and aligns with the actual constellations. Western astrology uses the tropical zodiac. This means your Vedic sun sign may differ from your Western one — and the readings are fundamentally different systems.',
  },
  {
    question: 'How is my birth data protected?',
    answer:
      'Your privacy is sacred to us. All birth details are encrypted in transit and at rest. We never sell or share your personal data with third parties. You can request complete deletion of your account and data at any time.',
  },
  {
    question: 'Can I get a reading for someone else?',
    answer:
      'Absolutely. You can create charts for family members, partners, or friends by entering their birth details. Our compatibility matching service is especially popular for couples exploring relationship dynamics through synastry analysis.',
  },
  {
    question: 'What is your refund policy?',
    answer:
      'We offer a 7-day satisfaction guarantee on all paid reports. If you\'re not completely satisfied with your reading, contact our support team for a full refund — no questions asked.',
  },
];

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border-b border-white/5 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center justify-between w-full py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg font-medium text-white group-hover:text-nakshatra-300 transition-colors pr-8">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-nakshatra-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed text-sm md:text-base">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-nakshatra-400 mb-4">
            FAQ
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            Common Questions
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Everything you need to know before beginning your cosmic journey.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent px-6 md:px-8"
        >
          {faqs.map((faq, index) => (
            <motion.div key={faq.question} variants={fadeInUp}>
              <FAQItem
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
