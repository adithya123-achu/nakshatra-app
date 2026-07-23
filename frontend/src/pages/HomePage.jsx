import {
  StarBackground,
  LandingNavbar,
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  ServicesSection,
  TestimonialsSection,
  FAQSection,
  LandingFooter,
} from '../components/landing';

const HomePage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StarBackground />
      <LandingNavbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ServicesSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <LandingFooter />
    </div>
  );
};

export default HomePage;
