import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Shield, Calendar, Phone, Mail, MapPin, X } from 'lucide-react';
import { jaipurHubData } from '../data/jaipurHubData';

interface ConsultationFormProps {
  initialService?: string;
  initialQuote?: string;
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  initialService = '',
  initialQuote = '',
  isOpenModal = false,
  onCloseModal
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: initialService || 'Cloud Architecture & DevOps',
    budgetRange: '$20,000 - $50,000 (₹15L - ₹40L)',
    timeline: 'Within 2-4 weeks',
    message: initialQuote ? `Pre-configured Quote:\n${initialQuote}\n\nProject Overview:\n` : '',
    requiresNDA: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialQuote) {
      setFormData(prev => ({
        ...prev,
        message: `Calculated Estimate Details:\n${initialQuote}\n\nAdditional Requirements:\n`
      }));
    }
  }, [initialQuote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim() || !formData.email.trim()) {
      setErrorMsg('Please provide your name and work email address.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMsg('Please enter a valid business email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const formContent = (
    <div className="space-y-6">
      {submitted ? (
        <div className="text-center py-10 space-y-5">
          <div className="w-16 h-16 rounded-full bg-emerald-950/80 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-950/50">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">
              Consultation Request Received!
            </h3>
            <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-cyan-400 font-semibold">{formData.fullName}</span>. A Senior Solutions Architect from our Jaipur headquarters has been assigned to your brief.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-left text-xs font-mono space-y-2 max-w-md mx-auto">
            <div className="text-slate-400">Reference: <span className="text-cyan-300">BS-JP-{(Math.random() * 100000 | 0)}</span></div>
            <div className="text-slate-400">Target Service: <span className="text-white">{formData.service}</span></div>
            <div className="text-slate-400">Response SLA: <span className="text-emerald-400">Within 4 Business Hours</span></div>
            {formData.requiresNDA && (
              <div className="text-slate-400">Mutual NDA: <span className="text-amber-400">Auto-Draft Dispatched to {formData.email}</span></div>
            )}
          </div>

          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={() => {
                setSubmitted(false);
                if (onCloseModal) onCloseModal();
              }}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition"
            >
              Done
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMsg && (
            <div className="p-3 rounded-lg bg-red-950/60 border border-red-800 text-red-300 text-xs font-medium">
              {errorMsg}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono uppercase text-slate-400 block mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Ankit Sharma / Sarah Jenkins"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="text-xs font-mono uppercase text-slate-400 block mb-1">
                Work Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="sarah@company.com"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono uppercase text-slate-400 block mb-1">
                Phone / WhatsApp Number
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98290 12345 or +1 (555) 019"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="text-xs font-mono uppercase text-slate-400 block mb-1">
                Organization / Company
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Acme Enterprises Inc."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono uppercase text-slate-400 block mb-1">
                Consulting Domain
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition"
              >
                <option value="Cloud Architecture & DevOps">Cloud Architecture & DevOps</option>
                <option value="Applied AI & Autonomous Agents">Applied AI & Autonomous Agents</option>
                <option value="Custom Enterprise Software">Custom Enterprise Software</option>
                <option value="Cybersecurity & Zero Trust">Cybersecurity & Zero Trust</option>
                <option value="Cross-Platform Mobile Apps">Cross-Platform Mobile Apps</option>
                <option value="Legacy Monolith Modernization">Legacy Monolith Modernization</option>
                <option value="Dedicated Engineering Pod">Dedicated Engineering Pod</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-mono uppercase text-slate-400 block mb-1">
                Target Budget Tier
              </label>
              <select
                value={formData.budgetRange}
                onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition"
              >
                <option value="< $15,000 (< ₹12L)">Under $15,000 (Under ₹12L) - Rapid Prototype</option>
                <option value="$15,000 - $35,000 (₹12L - ₹30L)">$15,000 - $35,000 (₹12L - ₹30L) - Standard Pod</option>
                <option value="$35,000 - $75,000 (₹30L - ₹65L)">$35,000 - $75,000 (₹30L - ₹65L) - Enterprise Growth</option>
                <option value="> $75,000 (> ₹65L)">$75,000+ (₹65L+) - Multi-Month Transformation</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-mono uppercase text-slate-400 block mb-1">
              Project Brief & Architectural Requirements
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your current stack, bottlenecks, goals, and desired kickoff timeline..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono transition"
            />
          </div>

          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-slate-300">
              <input
                type="checkbox"
                checked={formData.requiresNDA}
                onChange={(e) => setFormData({ ...formData, requiresNDA: e.target.checked })}
                className="rounded border-slate-700 text-cyan-500 focus:ring-0"
              />
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                Request Mutual Non-Disclosure Agreement (NDA)
              </span>
            </label>

            <span className="text-slate-500 font-mono text-[11px]">Strict Confidentiality</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span className="animate-pulse">Transmitting to Jaipur Architect Pod...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit RFP & Schedule Architecture Call</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );

  // If rendering inside a modal
  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
        <div className="relative w-full max-w-2xl bg-slate-950 border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <button
            onClick={onCloseModal}
            className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
              Build Swift • Jaipur Office
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              Book Free Architectural Consultation
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Speak directly with an enterprise solutions architect. No sales fluff.
            </p>
          </div>

          {formContent}
        </div>
      </div>
    );
  }

  // Regular Section Render
  return (
    <section id="consultation" className="py-24 relative bg-[#070b14] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Contact (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" /> Direct Inquiry Desk
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready to Accelerate Your Architecture?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Book a zero-obligation 45-minute technical discovery session. Our principal architects in 
              Jaipur will review your architecture, diagnose bottlenecks, and map out an execution roadmap.
            </p>

            <div className="space-y-3 pt-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <span className="text-slate-400 text-[11px] block">Corporate Head Office</span>
                  <span className="font-semibold text-white">World Trade Park (WTP), Jaipur, Rajasthan</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <span className="text-slate-400 text-[11px] block">Direct Hotline</span>
                  <span className="font-mono font-semibold text-white">{jaipurHubData.contact.phoneIndia}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-slate-400 text-[11px] block">Solutions Email</span>
                  <span className="font-mono font-semibold text-white">{jaipurHubData.contact.emailConsulting}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Form Card (7 cols) */}
          <div className="lg:col-span-7 glass-card p-7 sm:p-9 rounded-2xl border border-cyan-500/30 shadow-2xl">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white">
                Request Formal RFP / IT Audit
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Receive our comprehensive proposal, sprint schedule, and architectural plan within 24 hours.
              </p>
            </div>

            {formContent}
          </div>

        </div>

      </div>
    </section>
  );
};
