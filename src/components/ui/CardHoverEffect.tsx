import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const HoverEffect = ({
  items,
  className = '',
}: {
  items: {
    title: string;
    description: string;
    link?: string;
    icon?: React.ReactNode;
    badge?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 ${className}`}
    >
      {items.map((item, idx) => (
        <div
          key={item?.title}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-cyan-500/[0.1] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="rounded-2xl h-full w-full p-6 overflow-hidden bg-zinc-950 border border-white/10 group-hover:border-cyan-500/30 relative z-20 transition duration-300 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/5 text-cyan-400">
                  {item.icon}
                </div>
                {item.badge && (
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-zinc-900 text-zinc-400 border border-white/5">
                    {item.badge}
                  </span>
                )}
              </div>
              <h4 className="text-white font-bold tracking-tight text-base">
                {item.title}
              </h4>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
