import React from 'react';
import { Award, Globe2, TrendingDown, Users2 } from 'lucide-react';

export const StatsCounter: React.FC = () => {
  const stats = [
    {
      label: 'Enterprise Deployments',
      value: '150+',
      description: 'Zero-downtime production rollouts',
      icon: Award,
      color: 'text-cyan-400'
    },
    {
      label: 'Cloud Cost Reductions',
      value: '45%',
      description: 'Average FinOps infrastructure savings',
      icon: TrendingDown,
      color: 'text-emerald-400'
    },
    {
      label: 'Global Markets Served',
      value: '15+',
      description: 'US, UK, UAE, Singapore & India',
      icon: Globe2,
      color: 'text-blue-400'
    },
    {
      label: 'Senior Engineers in Jaipur',
      value: '60+',
      description: 'IIT, BITS Pilani & MNIT alumni',
      icon: Users2,
      color: 'text-amber-400'
    }
  ];

  return (
    <div className="relative py-12 bg-slate-900/60 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-2xl bg-slate-950/40 border border-slate-800/80 hover:border-slate-700 transition flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-400">
                    {stat.label}
                  </span>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div>
                  <div className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${stat.color} font-mono mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
