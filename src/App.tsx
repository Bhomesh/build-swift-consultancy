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

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Navigation */}
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
