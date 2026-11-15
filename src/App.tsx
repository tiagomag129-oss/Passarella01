import { MotionConfig } from 'motion/react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import HowItWorksSection from './components/HowItWorksSection';
import CoverageAndTrustSection from './components/CoverageAndTrustSection';
import ConversionAndFaqSection from './components/ConversionAndFaqSection';
import ContactAndFooter from './components/ContactAndFooter';
import MobileStickyBar from './components/MobileStickyBar';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#0B132B] text-[#F8FAFC]">
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <HowItWorksSection />
          <CoverageAndTrustSection />
          <ConversionAndFaqSection />
          <ContactAndFooter />
        </main>
        <MobileStickyBar />
      </div>
    </MotionConfig>
  );
}
