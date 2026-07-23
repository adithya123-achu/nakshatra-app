import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { fadeInUp, staggerContainer } from './motion';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Entrepreneur, Mumbai',
    content:
      'Nakshatra revealed patterns in my chart I\'d never understood despite years of consultations. The AI interpretations are remarkably nuanced — it feels like speaking with a master astrologer who knows my entire life story.',
    rating: 5,
  },
  {
    name: 'Arjun Mehta',
    role: 'Software Engineer, Bangalore',
    content:
      'As someone who values both science and spirituality, I was skeptical. But the sidereal calculations are impeccable, and the dasha predictions have been eerily accurate. This is astrology done right for the modern age.',
    rating: 5,
  },
  {
    name: 'Ananya Reddy',
    role: 'Yoga Teacher, Hyderabad',
    content:
      'The nakshatra analysis alone is worth every penny. Understanding my birth star\'s pada and deity associations brought profound clarity to my spiritual practice. Nakshatra is simply beautiful.',
    rating: 5,
  },
  {
    name: 'Rahul Kapoor',
    role: 'Investment Banker, Delhi',
    content:
      'I used the muhurta service for my business launch and the career guidance report for a major career transition. Both were insightful and practical. Luxury experience from start to finish.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
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
            Testimonials
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
            Voices from the Cosmos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Join thousands who have discovered clarity, purpose, and cosmic
            alignment through Nakshatra.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.blockquote
              key={testimonial.name}
              variants={fadeInUp}
              className="relative p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-nakshatra-500/15" />

              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-nakshatra-400 fill-nakshatra-400"
                  />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <footer className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-nakshatra-400 to-nakshatra-600 flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-white text-sm">
                    {testimonial.name}
                  </cite>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
