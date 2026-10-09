import React from 'react';
import { ArrowRight, Calculator, CheckCircle2, Shield, Sparkles, Building2, Terminal } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <div className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden tech-grid-bg">
      {/* Background Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[250px] bg-blue-600/15 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs sm:text-sm font-medium text-cyan-300 shadow-lg shadow-cyan-950/40 animate-float">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Jaipur, Rajasthan Registered IT Consultancy & Engineering Firm</span>
            <span className="text-slate-500 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">Global Delivery Pods</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
            Engineering Next-Gen{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              Cloud, AI & Enterprise Software
            </span>{' '}
            at Startup Speed
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Build Swift is Jaipur’s premier global IT consultancy, transforming ideas into scalable 
            digital powerhouses. From our state-of-the-art Innovation Lab in Jaipur, Rajasthan, we architect 
            high-throughput microservices, sovereign AI agent systems, and automated multi-cloud infrastructures.
          </p>

          {/* Quick value props */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400 pt-2">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Client IP Ownership</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span>ISO 27001 & SOC 2 Aligned</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>World Trade Park Innovation Lab</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#cost-estimator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base border border-slate-700/80 hover:border-cyan-500/50 transition-all"
            >
              <Calculator className="w-5 h-5 text-cyan-400" />
              <span>Instant Project Estimate</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/50 text-cyan-300 font-semibold text-base border border-cyan-500/40 hover:border-cyan-400 transition-all"
            >
              <span>Book Free Consultation</span>
            </button>
          </div>

          {/* Interactive Shell Snippet Preview */}
          <div className="pt-10 max-w-2xl mx-auto">
            <div className="rounded-2xl bg-slate-950/90 border border-slate-800 shadow-2xl p-4 text-left font-mono text-xs sm:text-sm text-slate-300">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-slate-500 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-slate-400">buildswift-consulting-mesh ~ jaipur-node</span>
                </div>
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>v2026.1-prod</span>
                </div>
              </div>
              <div className="pt-3 space-y-1.5 leading-relaxed">
                <p className="text-slate-400">
                  <span className="text-emerald-400">$</span> buildswift init --location="Jaipur, Rajasthan" --tier="Enterprise"
                </p>
                <p className="text-cyan-300">
                  ✔ Registered Entity: BuildSwift Technologies Pvt. Ltd. [CIN: U72900RJ2024PTC089124]
                </p>
                <p className="text-slate-300">
                  ✔ Deploying dedicated engineering pod (Architect + DevOps + AI Engine + SRE)
                </p>
                <p className="text-amber-300">
                  ✔ Architecture SLA: 99.999% • Multi-Cloud Kubernetes & Private RAG Pipelines
                </p>
                <p className="text-emerald-400 font-semibold">
                  🚀 Ready for sprint 0 kickoff in &lt; 5 business days.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
