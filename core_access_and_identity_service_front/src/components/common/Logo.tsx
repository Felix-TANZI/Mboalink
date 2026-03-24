import React from 'react';

interface LogoProps {
  variant?: 'desktop' | 'tablet' | 'mobile';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'desktop' }) => {
  const sizeClass = variant === 'mobile' ? 'h-8 w-8' : variant === 'tablet' ? 'h-10 w-10' : 'h-12 w-12';

  return (
    <div className="flex items-center gap-3">
      <img
        src="/src/assets/images/Logo Mboalink-02 1-1.png"
        alt="MboaLink Logo"
        className={`${sizeClass} object-contain`}
      />
      <span className="text-white text-xl font-bold"></span>
    </div>
  );
};
