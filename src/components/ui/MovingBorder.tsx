import React from 'react';
import { motion } from 'framer-motion';

export function Button({
  borderRadius = '1rem',
  children,
  as: Component = 'button',
  containerClassName = '',
  borderClassName = '',
  duration = 3000,
  className = '',
  onClick,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}) {
  return (
    <Component
      onClick={onClick}
      className={`bg-transparent relative text-xl p-[1px] overflow-hidden ${containerClassName}`}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={`h-20 w-20 opacity-[0.8] bg-[radial-gradient(#06b6d4_40%,transparent_60%)] ${borderClassName}`}
          />
        </MovingBorder>
      </div>

      <div
        className={`relative bg-zinc-950/[0.9] border border-white/10 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased ${className}`}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="absolute h-full w-full"
      width="100%"
      height="100%"
      {...otherProps}
    >
      <rect
        fill="none"
        width="100%"
        height="100%"
        rx={rx}
        ry={ry}
      />
      <motion.g
        animate={{
          offsetDistance: ['0%', '100%'],
        }}
        transition={{
          duration: duration / 1000,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {children}
      </motion.g>
    </svg>
  );
};
