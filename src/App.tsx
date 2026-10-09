import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsCounter } from './components/StatsCounter';
import { ServicesSection } from './components/ServicesSection';
import { ProjectCostEstimator } from './components/ProjectCostEstimator';
import { TechStackMatrix } from './components/TechStackMatrix';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { JaipurHubShowcase } from './components/JaipurHubShowcase';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ConsultationForm } from './components/ConsultationForm';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingNav } from './components/ui/FloatingNav';
import { ArrowUpRight, Layers, Cpu, Calculator, Award, MapPin } from 'lucide-react';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [quoteDetails, setQuoteDetails] = useState('');

  const handleOpenConsultation = () => {
    setSelectedService('');
    setQuoteDetails('');
    setModalOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  const handleQuoteRequested = (details: string) => {
    setQuoteDetails(details);
    setModalOpen(true);
  };

  const handleScheduleVisit = () => {
    setSelectedService('On-Site WTP Jaipur Campus Visit & Architectural Workshop');
    setModalOpen(true);
  };

  const floatingNavItems = [
    { name: 'Services', link: '#services', icon: <Layers className="w-3.5 h-3.5" /> },
    { name: 'Stack', link: '#tech-stack', icon: <Cpu className="w-3.5 h-3.5" /> },
    { name: 'Estimator', link: '#cost-estimator', icon: <Calculator className="w-3.5 h-3.5" /> },
    { name: 'Proof', link: '#case-studies', icon: <Award className="w-3.5 h-3.5" /> },
    { name: 'Jaipur Hub', link: '#jaipur-hub', icon: <MapPin className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200 antialiased relative">
      {/* Aceternity Floating Nav on Scroll */}
      <FloatingNav
        navItems={floatingNavItems}
        extraAction={
          <button
            onClick={handleOpenConsultation}
            className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-white hover:bg-zinc-200 text-black transition"
          >
            <span>Consult</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        }
      />

      {/* Top Navigation Bar with Jaipur HQ Announcement */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenConsultation={handleOpenConsultation} />

        <StatsCounter />

        <ServicesSection onSelectService={handleSelectService} />

        <ProjectCostEstimator onQuoteRequested={handleQuoteRequested} />

        <TechStackMatrix />

        <CaseStudiesSection />

        <JaipurHubShowcase onScheduleVisit={handleScheduleVisit} />

        <TestimonialsSection />

        <FAQSection />

        {/* Embedded Full Consultation Section */}
        <ConsultationForm />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Modal Dialog when triggered from CTAs / Estimator */}
      {modalOpen && (
        <ConsultationForm
          isOpenModal={true}
          initialService={selectedService}
          initialQuote={quoteDetails}
          onCloseModal={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
