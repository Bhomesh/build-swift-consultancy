import React from 'react';

interface BackgroundGridProps {
  children?: React.ReactNode;
  className?: string;
  dotSize?: 'sm' | 'md' | 'lg';
}

export const BackgroundGrid: React.FC<BackgroundGridProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`relative w-full overflow-hidden bg-black ${className}`}>
      {/* Aceternity Dot Matrix Pattern */}
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      
      {/* Radial Gradient Mask for that signature Aceternity fade */}
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] bg-black/60" />
      
      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
