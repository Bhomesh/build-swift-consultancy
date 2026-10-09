import React, { useState } from 'react';
import { techStackData } from '../data/techStackData';
import { Terminal, Database, Cpu, Layout, Lock } from 'lucide-react';
import { TechItem } from '../types';

export const TechStackMatrix: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Technologies', icon: Terminal },
    { id: 'cloud', label: 'Cloud & DevOps', icon: Terminal },
    { id: 'backend', label: 'Backend & Data', icon: Database },
    { id: 'ai', label: 'Applied AI & RAG', icon: Cpu },
    { id: 'frontend', label: 'Frontend & Mobile', icon: Layout },
    { id: 'security', label: 'Security & Auth', icon: Lock },
  ];

  const filteredTech = filter === 'all'
    ? techStackData
    : techStackData.filter(t => t.category === filter);

  return (
    <section id="tech-stack" className="py-24 relative bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/50 text-indigo-400 text-xs font-mono uppercase tracking-wider">
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Battle-Tested Engineering Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            We reject fragile boilerplate. Every tool in our ecosystem is chosen for strict enterprise uptime, 
            low latency, deterministic scalability, and developer ergonomics.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {categories.map((c) => {
              const Icon = c.icon;
              return (
                <button
                  key={c.id}
                  onClick={() => setFilter(c.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition ${
                    filter === c.id
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-cyan-500/20'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{c.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTech.map((item: TechItem) => (
            <div
              key={item.name}
              className="p-6 rounded-2xl glass-card glass-card-hover border border-slate-800/80 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    {item.name}
                  </h4>
                  <span className="text-xs font-mono text-cyan-300 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">
                    {item.proficiency}% Proficiency
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Meter */}
                <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${item.proficiency}%` }}
                  />
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/70">
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block mb-1">
                  Enterprise Proven In:
                </span>
                <p className="text-xs text-slate-400 font-mono italic">
                  "{item.enterpriseUse}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
