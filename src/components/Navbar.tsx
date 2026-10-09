import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Technologies', href: '#tech-stack' },
    { label: 'Cost Estimator', href: '#cost-estimator' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Jaipur Campus', href: '#jaipur-hub' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <>
      {/* Top Banner announcing Jaipur, Rajasthan Registration */}
      <div className="bg-gradient-to-r from-cyan-950 via-slate-900 to-indigo-950 border-b border-cyan-800/40 text-xs py-2 px-4 text-center text-slate-300 flex items-center justify-center gap-3">
        <span className="inline-flex items-center gap-1.5 text-cyan-400 font-medium">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          Headquartered in Jaipur, Rajasthan, India
        </span>
        <span className="hidden md:inline text-slate-500">•</span>
        <span className="hidden md:inline text-slate-400">
          CIN: U72900RJ2024PTC089124 • World Trade Park Campus
        </span>
        <span className="hidden md:inline text-slate-500">•</span>
        <span className="inline-flex items-center gap-1 text-emerald-400">
          <ShieldCheck className="w-3.5 h-3.5" /> ISO 27001 & SOC 2 Aligned
        </span>
      </div>

      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070b14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl shadow-cyan-950/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
              <span className="font-mono font-bold text-lg text-white tracking-tighter">BS</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  Build<span className="text-cyan-400">Swift</span>
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Systems Active" />
              </div>
              <span className="text-[10px] tracking-widest text-slate-400 uppercase font-mono">
                IT Consultancy • Jaipur
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-cyan-400 after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+911413589920"
              className="hidden xl:inline-flex text-xs font-mono text-slate-300 hover:text-cyan-300 px-3 py-2 rounded-lg border border-slate-800 hover:border-slate-700 transition"
            >
              +91 141 358-9920
            </a>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-200 hover:text-cyan-400 font-medium py-2 border-b border-slate-800/60"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-2 flex flex-col gap-3">
              <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                World Trade Park, Jaipur, Rajasthan
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/30"
              >
                <span>Book Free IT Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
