import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { Cloud, Cpu, Code2, ShieldCheck, Smartphone, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'Infrastructure', label: 'Cloud & DevOps' },
    { id: 'Artificial Intelligence', label: 'Applied AI & RAG' },
    { id: 'Engineering', label: 'Custom Software' },
    { id: 'Security & Compliance', label: 'Cybersecurity' },
    { id: 'Mobile Engineering', label: 'Mobile Apps' },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-indigo-400" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-blue-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-pink-400" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6 text-amber-400" />;
      default:
        return <Code2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 relative bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            Consulting & Engineering Domains
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive IT Advisory & Software Craftsmanship
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From greenfield architecture design to high-throughput cloud migration and autonomous AI swarms,
            our Jaipur engineering pods deliver mission-critical excellence.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service: ServiceItem) => {
            const isExpanded = expandedService === service.id;

            return (
              <div
                key={service.id}
                className="group p-7 rounded-2xl glass-card glass-card-hover flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 transition">
                      {getIcon(service.icon)}
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800/80 text-cyan-300 border border-slate-700/50">
                      {service.stats}
                    </span>
                  </div>

                  {/* Title & Short description */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs uppercase font-mono tracking-wider text-slate-500 block">
                      Key Deliverables
                    </span>
                    {service.deliverables.slice(0, isExpanded ? 4 : 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setExpandedService(isExpanded ? null : service.id)}
                    className="text-xs text-slate-400 hover:text-cyan-400 font-medium underline underline-offset-4 transition"
                  >
                    {isExpanded ? 'Show Less' : 'View Full Scope'}
                  </button>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
