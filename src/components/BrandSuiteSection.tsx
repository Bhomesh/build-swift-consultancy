import React, { useState, useEffect } from 'react';
import { Check, Download, Sparkles, Layers, Palette, Eye } from 'lucide-react';
import { Reveal } from './Reveal';

export interface LogoConcept {
  id: string;
  number: number;
  name: string;
  subtitle: string;
  tagline: string;
  glyph: string;
  description: string;
  philosophy: string;
  colors: { label: string; hex: string; bg: string }[];
  svgUrl: string;
  pngUrl: string;
  iconSvgUrl: string;
  iconPngUrl: string;
  gradientBadge: string;
}

export const logoConcepts: LogoConcept[] = [
  {
    id: 'cyber-triad',
    number: 1,
    name: 'Cyber Triad Monogram',
    subtitle: 'Tri-color Intertwined Ribbon',
    tagline: 'HIGH-PERFORMANCE ARCHITECTURE',
    glyph: 'NGD',
    description: 'A dynamic intertwined ribbon forming the letters N, G, and D with three vibrant cyber neon gradients. Represents the triad of modern engineering: Velocity, Architectural Integrity, and Scale.',
    philosophy: 'Engineered for cloud-native agility, modern AI orchestration, and enterprise precision.',
    colors: [
      { label: 'Cyan Pulse', hex: '#00F2FE', bg: 'bg-[#00F2FE]' },
      { label: 'Cyber Violet', hex: '#818CF8', bg: 'bg-[#818CF8]' },
      { label: 'Neon Rose', hex: '#F472B6', bg: 'bg-[#F472B6]' },
    ],
    svgUrl: '/brand/concept1.svg',
    pngUrl: '/brand/concept1.png',
    iconSvgUrl: '/brand/icon1.svg',
    iconPngUrl: '/brand/icon1.png',
    gradientBadge: 'from-cyan-400 via-indigo-400 to-rose-400',
  },
  {
    id: 'quantum-prism',
    number: 2,
    name: 'Quantum Code Prism',
    subtitle: 'Hexagonal Code Bracket Core',
    tagline: 'CLOUD ARCHITECTURE & APPLIED AI',
    glyph: '< NGD >',
    description: 'An architectural isometric hexagon framing code brackets < and > surrounding a central G quantum core. Directly signals developer heritage, deep algorithmic mastery, and applied AI infrastructure.',
    philosophy: 'Rooted in syntax, cryptographic stability, and high-frequency backend engineering.',
    colors: [
      { label: 'Emerald Matrix', hex: '#10B981', bg: 'bg-[#10B981]' },
      { label: 'Quantum Cyan', hex: '#06B6D4', bg: 'bg-[#06B6D4]' },
      { label: 'Deep Cobalt', hex: '#3B82F6', bg: 'bg-[#3B82F6]' },
    ],
    svgUrl: '/brand/concept2.svg',
    pngUrl: '/brand/concept2.png',
    iconSvgUrl: '/brand/icon2.svg',
    iconPngUrl: '/brand/icon2.png',
    gradientBadge: 'from-emerald-400 via-teal-400 to-cyan-400',
  },
  {
    id: 'velocity-chevron',
    number: 3,
    name: 'Velocity Chevron',
    subtitle: 'Hyper-Aerodynamic Fast-Forward',
    tagline: 'HIGH-VELOCITY SOFTWARE & DEVOPS',
    glyph: 'NXG >>',
    description: 'Slanted aerodynamic forward chevrons (>>) cutting through geometric whitespace to carve NXG initials. Embodies relentless shipping speed, instantaneous deployments, and zero-latency pipelines.',
    philosophy: 'Optimized for high-velocity software squads, CI/CD automation, and fast-moving scaleups.',
    colors: [
      { label: 'Hyper Flame', hex: '#FF007A', bg: 'bg-[#FF007A]' },
      { label: 'Solar Coral', hex: '#FF4D4D', bg: 'bg-[#FF4D4D]' },
      { label: 'Electric Orchid', hex: '#C084FC', bg: 'bg-[#C084FC]' },
    ],
    svgUrl: '/brand/concept3.svg',
    pngUrl: '/brand/concept3.png',
    iconSvgUrl: '/brand/icon3.svg',
    iconPngUrl: '/brand/icon3.png',
    gradientBadge: 'from-pink-500 via-rose-500 to-purple-600',
  },
  {
    id: 'infinite-flow',
    number: 4,
    name: 'Infinite Flow Loop',
    subtitle: 'Dimensional Möbius Delivery Loop',
    tagline: 'CONTINUOUS DELIVERY & SCALABLE SYSTEMS',
    glyph: 'NG ∞',
    description: 'A 3D Möbius infinity loop weaving the letters N and G into an unbroken lifecycle ring. Highlights end-to-end consulting, continuous observability, and iterative digital transformation.',
    philosophy: 'Embodies perpetual lifecycle iteration, frictionless DevOps loops, and resilient distributed systems.',
    colors: [
      { label: 'Sky Aurora', hex: '#38BDF8', bg: 'bg-[#38BDF8]' },
      { label: 'Iris Glow', hex: '#818CF8', bg: 'bg-[#818CF8]' },
      { label: 'Fuchsia Beam', hex: '#E879F9', bg: 'bg-[#E879F9]' },
    ],
    svgUrl: '/brand/concept4.svg',
    pngUrl: '/brand/concept4.png',
    iconSvgUrl: '/brand/icon4.svg',
    iconPngUrl: '/brand/icon4.png',
    gradientBadge: 'from-sky-400 via-indigo-400 to-fuchsia-400',
  },
  {
    id: 'architect-monolith',
    number: 5,
    name: 'Architect Monolith',
    subtitle: 'Titanium Stencil & Laser Terminal',
    tagline: 'GLOBAL ENTERPRISE IT CONSULTANCY',
    glyph: 'NXG >_',
    description: 'Precision-notched isometric titanium badge fusing an architectural stencil N-X-G monogram with a prompt chevron. Conveys institutional permanence, zero-trust security, and Tier-1 enterprise trust.',
    philosophy: 'Built for enterprise leadership, mission-critical infrastructure, and global sovereign standards.',
    colors: [
      { label: 'Pure Platinum', hex: '#FFFFFF', bg: 'bg-[#FFFFFF]' },
      { label: 'Cyan Laser', hex: '#00F0FF', bg: 'bg-[#00F0FF]' },
      { label: 'Slate Obsidian', hex: '#334155', bg: 'bg-[#334155]' },
    ],
    svgUrl: '/brand/concept5.svg',
    pngUrl: '/brand/concept5.png',
    iconSvgUrl: '/brand/icon5.svg',
    iconPngUrl: '/brand/icon5.png',
    gradientBadge: 'from-slate-200 via-cyan-400 to-blue-600',
  },
];

interface BrandSuiteSectionProps {
  activeLogoId: string;
  onSelectActiveLogo: (logoId: string) => void;
}

export const BrandSuiteSection: React.FC<BrandSuiteSectionProps> = ({
  activeLogoId,
  onSelectActiveLogo,
}) => {
  const [selectedConcept, setSelectedConcept] = useState<LogoConcept>(() => {
    return logoConcepts.find((c) => c.id === activeLogoId) || logoConcepts[0];
  });
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const match = logoConcepts.find((c) => c.id === activeLogoId);
    if (match) setSelectedConcept(match);
  }, [activeLogoId]);

  const handleCopyHex = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const handleApplyLogo = (concept: LogoConcept) => {
    onSelectActiveLogo(concept.id);
    setToastMessage(`Concept ${concept.number}: "${concept.name}" applied as active site logo!`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <section id="brand-suite" className="py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal variant="up">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> OFFICIAL BRAND IDENTITY SUITE
            </span>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Next Gen Dev <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Logo Concepts</span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={140}>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              Explore the 5 bespoke identity concepts designed for <strong>Next Gen Dev</strong> (Next Generation Dev, <code className="text-cyan-300 font-mono">nexgdev.com</code>). 
              Preview, inspect color swatches, download vector SVGs/PNGs, or toggle your preferred logo live across the entire website.
            </p>
          </Reveal>
        </div>

        {/* Quick Tabs to Select Concept */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {logoConcepts.map((concept) => {
            const isSelected = selectedConcept.id === concept.id;
            const isLiveActive = activeLogoId === concept.id;
            return (
              <button
                key={concept.id}
                onClick={() => setSelectedConcept(concept)}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-200 relative group ${
                  isSelected
                    ? 'bg-zinc-900 border-cyan-400/80 shadow-lg shadow-cyan-500/15'
                    : 'bg-zinc-950/80 border-white/10 hover:border-white/25 hover:bg-zinc-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-white/5 text-zinc-400 group-hover:text-white">
                    0{concept.number}
                  </span>
                  {isLiveActive && (
                    <span className="flex items-center gap-1 text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      <Check className="w-3 h-3" /> ACTIVE
                    </span>
                  )}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
                  {concept.name}
                </div>
                <div className="text-[11px] text-zinc-400 truncate mt-0.5">
                  {concept.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Concept Showcase Card */}
        <div className="bg-zinc-900/90 border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Logo Preview Area */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center">
              <div className="w-full bg-zinc-950/80 border border-white/10 rounded-2xl p-6 sm:p-8 flex items-center justify-center shadow-inner relative group min-h-[180px] sm:min-h-[220px]">
                <img
                  src={selectedConcept.svgUrl}
                  alt={`${selectedConcept.name} Full Vector Logo`}
                  className="w-full max-w-[420px] h-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-xl"
                />
                <span className="absolute bottom-3 right-3 text-[10px] font-mono text-zinc-400 bg-zinc-900/80 px-2.5 py-1 rounded-full border border-white/5">
                  Vector SVG • 440 × 90
                </span>
              </div>

              {/* Standalone Icon & App Mark Preview Row */}
              <div className="w-full grid grid-cols-2 gap-3 mt-4">
                <div className="bg-zinc-950/50 border border-white/5 rounded-xl p-3 flex items-center gap-3">
                  <img
                    src={selectedConcept.iconSvgUrl}
                    alt={`${selectedConcept.name} Icon Mark`}
                    className="w-12 h-12 rounded-lg object-contain shadow"
                  />
                  <div>
                    <div className="text-xs font-bold text-white">App / Favicon Mark</div>
                    <div className="text-[10px] font-mono text-zinc-400">64 × 64 Vector Icon</div>
                  </div>
                </div>

                <div className="bg-zinc-950/50 border border-white/5 rounded-xl p-3 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">Initials Anchor</div>
                    <div className="text-xs font-mono font-bold text-cyan-400">{selectedConcept.glyph}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono px-2 py-1 rounded bg-zinc-800 text-zinc-300">
                      nexgdev.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Concept Details & Actions Area */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-cyan-400 font-bold">CONCEPT 0{selectedConcept.number}</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-xs font-mono text-zinc-400">{selectedConcept.subtitle}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                  {selectedConcept.name}
                </h3>
                <p className="text-xs font-mono text-purple-400 tracking-wider font-semibold mb-4">
                  {selectedConcept.tagline}
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {selectedConcept.description}
                </p>

                {/* Color Swatches */}
                <div className="mb-6">
                  <div className="text-xs font-mono text-zinc-400 mb-2 flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5 text-zinc-400" />
                    BRAND COLOR SPECTRUM (CLICK TO COPY)
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedConcept.colors.map((color) => (
                      <button
                        key={color.hex}
                        onClick={() => handleCopyHex(color.hex)}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950 border border-white/10 hover:border-cyan-400/50 transition group"
                        title={`Copy ${color.hex}`}
                      >
                        <span className={`w-3.5 h-3.5 rounded-full ${color.bg} shadow`} />
                        <span className="text-xs font-medium text-zinc-300">{color.label}</span>
                        <span className="text-[10px] font-mono text-zinc-400 group-hover:text-cyan-300">
                          {copiedHex === color.hex ? 'COPIED!' : color.hex}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => handleApplyLogo(selectedConcept)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-lg ${
                    activeLogoId === selectedConcept.id
                      ? 'bg-emerald-600 text-white cursor-default'
                      : 'bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-cyan-500/20'
                  }`}
                >
                  {activeLogoId === selectedConcept.id ? (
                    <>
                      <Check className="w-4 h-4" /> Active On Site Header &amp; Footer
                    </>
                  ) : (
                    <>
                      <Eye className="w-4 h-4" /> Apply This Logo Live to Site
                    </>
                  )}
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={selectedConcept.svgUrl}
                    download={`next-gen-dev-concept-${selectedConcept.number}.svg`}
                    className="py-2.5 px-3 rounded-xl bg-zinc-950 border border-white/15 hover:border-white/30 text-white text-xs font-medium flex items-center justify-center gap-1.5 transition text-center"
                  >
                    <Download className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Download SVG</span>
                  </a>
                  <a
                    href={selectedConcept.pngUrl}
                    download={`next-gen-dev-concept-${selectedConcept.number}.png`}
                    className="py-2.5 px-3 rounded-xl bg-zinc-950 border border-white/15 hover:border-white/30 text-white text-xs font-medium flex items-center justify-center gap-1.5 transition text-center"
                  >
                    <Download className="w-3.5 h-3.5 text-purple-400" />
                    <span>Download PNG</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Toast Feedback Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 bg-zinc-900 border border-cyan-400/80 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-in">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
          </div>
        )}

        {/* Complete Brand Kit Master Download Box */}
        <div className="mt-12 bg-gradient-to-r from-cyan-950/40 via-purple-950/40 to-pink-950/40 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Download Complete Brand Assets Kit (.ZIP)
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400">
                Includes all 5 vector logo SVGs, 5 app icon marks, high-res 512px PNGs, and dark comparison board.
              </p>
            </div>
          </div>
          <a
            href="/brand/next-gen-dev-brand-kit.zip"
            download="next-gen-dev-brand-kit.zip"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-white text-zinc-950 hover:bg-zinc-200 transition shadow-lg"
          >
            <Download className="w-4 h-4" />
            <span>Download All Assets (ZIP)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
