import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Globe,
  Mail,
  MessageCircle,
  Share2,
  Sparkles,
} from 'lucide-react';
import { fadeInUp } from './motion';

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#hero' },
    { label: 'Blog', href: '#hero' },
    { label: 'Careers', href: '#hero' },
    { label: 'Contact', href: '#hero' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#hero' },
    { label: 'Terms of Service', href: '#hero' },
    { label: 'Cookie Policy', href: '#hero' },
  ],
};

const socialLinks = [
  { icon: Share2, href: '#', label: 'Share' },
  { icon: Globe, href: '#', label: 'Website' },
  { icon: MessageCircle, href: '#', label: 'Community' },
  { icon: Mail, href: '#', label: 'Email' },
];

const LandingFooter = () => {
  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-[#07051a] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="rounded-2xl border border-nakshatra-500/20 bg-gradient-to-r from-nakshatra-500/10 via-nakshatra-500/5 to-transparent p-8 md:p-12 mb-16 text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Discover Your Cosmic Blueprint?
          </h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Join thousands who have unlocked the wisdom of the stars. Your
            journey begins with a single birth detail.
          </p>
          <a
            href="#hero"
            className="inline-flex items-center px-8 py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-nakshatra-500 to-nakshatra-600 text-white shadow-lg shadow-nakshatra-500/25 hover:shadow-nakshatra-500/40 hover:from-nakshatra-400 hover:to-nakshatra-500 transition-all duration-300"
          >
            Get Your Free Chart Preview
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-nakshatra-500/10 border border-nakshatra-500/30">
                <Sparkles className="w-4 h-4 text-nakshatra-400" />
              </span>
              <span className="font-display text-xl font-semibold bg-gradient-to-r from-nakshatra-300 to-nakshatra-500 bg-clip-text text-transparent">
                Nakshatra
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              AI-powered Vedic Astrology platform bridging ancient Jyotish
              wisdom with modern precision for seekers worldwide.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-gray-400 hover:text-nakshatra-400 hover:border-nakshatra-500/30 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-nakshatra-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Nakshatra. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Crafted with reverence for the ancient science of Jyotish.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
