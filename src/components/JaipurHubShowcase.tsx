import React from 'react';
import { jaipurHubData } from '../data/jaipurHubData';
import { MapPin, Phone, Mail, Building, ShieldCheck, Award, CheckCircle } from 'lucide-react';

interface JaipurHubShowcaseProps {
  onScheduleVisit: () => void;
}

export const JaipurHubShowcase: React.FC<JaipurHubShowcaseProps> = ({ onScheduleVisit }) => {
  return (
    <section id="jaipur-hub" className="py-24 relative bg-[#070b14] border-t border-slate-800">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/40 border border-amber-600/40 text-amber-300 text-xs font-mono uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            Headquarters & Registration Hub
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Jaipur, Rajasthan: The Silicon Desert
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Proudly registered and rooted in the Pink City of Jaipur. We combine Rajasthan's 
            exceptional engineering density with world-class cloud infrastructure to serve global enterprises.
          </p>
        </div>

        {/* Main Grid: Corporate Details & Campus Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Official Legal Registration & Contact Card (6 cols) */}
          <div className="lg:col-span-6 rounded-2xl glass-card border border-amber-500/30 p-7 sm:p-9 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 block">
                    Registered Corporate Entity
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-0.5">
                    {jaipurHubData.companyName}
                  </h3>
                </div>
                <div className="p-2.5 rounded-xl bg-amber-950/40 border border-amber-800/50 text-amber-400">
                  <Building className="w-6 h-6" />
                </div>
              </div>

              {/* Registration Badges Table */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-500 block text-[10px] uppercase">Corporate CIN</span>
                  <span className="text-cyan-300 font-bold">{jaipurHubData.corporateRegistration.cin}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-500 block text-[10px] uppercase">GSTIN (Rajasthan)</span>
                  <span className="text-cyan-300 font-bold">{jaipurHubData.corporateRegistration.gstin}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-500 block text-[10px] uppercase">MSME Udyam Reg.</span>
                  <span className="text-slate-300">{jaipurHubData.corporateRegistration.msmeRegistration}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <span className="text-slate-500 block text-[10px] uppercase">Startup India DPIIT</span>
                  <span className="text-slate-300">{jaipurHubData.corporateRegistration.dpiitRecognition}</span>
                </div>
              </div>

              {/* Physical Campus Address */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                  Engineering Campus & Head Office
                </span>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-300">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <p className="font-semibold text-white">{jaipurHubData.headquarters.addressLine1}</p>
                    <p>{jaipurHubData.headquarters.addressLine2}</p>
                    <p className="text-slate-400">{jaipurHubData.headquarters.techCampus}</p>
                    <p className="text-amber-300 font-mono mt-1">
                      {jaipurHubData.headquarters.city}, {jaipurHubData.headquarters.state} — {jaipurHubData.headquarters.pincode}, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Hotlines */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <a
                  href={`tel:${jaipurHubData.contact.phoneIndia}`}
                  className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 transition flex items-center gap-3 text-slate-300"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <div>
                    <span className="text-[10px] text-slate-500 block">Jaipur Office Desk</span>
                    <span className="font-mono font-medium">{jaipurHubData.contact.phoneIndia}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${jaipurHubData.contact.emailGeneral}`}
                  className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 transition flex items-center gap-3 text-slate-300"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <div>
                    <span className="text-[10px] text-slate-500 block">Direct Inquiries</span>
                    <span className="font-mono font-medium">{jaipurHubData.contact.emailGeneral}</span>
                  </div>
                </a>
              </div>

            </div>

            <div className="pt-4 border-t border-slate-800/80">
              <button
                onClick={onScheduleVisit}
                className="w-full py-3 px-4 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 text-amber-300 font-semibold text-xs transition flex items-center justify-center gap-2"
              >
                <Building className="w-4 h-4" />
                <span>Schedule an In-Person Visit to our WTP Campus</span>
              </button>
            </div>
          </div>

          {/* Right: Regional Strategic Advantages (6 cols) */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            
            <div className="space-y-4">
              {jaipurHubData.regionalHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl glass-card border border-slate-800 hover:border-slate-700 transition space-y-2"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <h4 className="text-base font-bold text-white">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 pl-6 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications & Accreditations bar */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Governance & Accreditations
                </span>
                <span className="text-[11px] font-mono text-cyan-400">100% Verified</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {jaipurHubData.certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="text-[11px] font-medium px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800 flex items-center gap-1.5"
                  >
                    <Award className="w-3 h-3 text-amber-400" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
